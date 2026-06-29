import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/tmacData';
import { Search, SlidersHorizontal, ArrowUpRight, CheckCircle2, X, MessageSquare, Mail, Info } from 'lucide-react';
import { supabase } from '../lib/supabase';
import emailjs from '@emailjs/browser';

import gelGloveHand from '../assets/images/gel_glove_hand_1782126175435.jpg';
import labExperimentImg from '../assets/images/lab_experiment_1782188436040.jpg';

interface ProductsViewProps {
  lang: 'ko' | 'en';
  setView?: (view: string) => void;
}

export default function ProductsView({ lang, setView }: ProductsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);

  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState<number>(0);

  const [clientName, setClientName] = useState('');
  const [clientInst, setClientInst] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientTel, setClientTel] = useState('');
  
  // 수량 항목 및 관련 상태를 완전히 제거하고, 제목(inquiryTitle)과 메시지 상태만 운영
  const [inquiryTitle, setInquiryTitle] = useState('');
  const [message, setMessage] = useState('');
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const categories = ['All', 'Electrophoresis', 'Blotting', 'Proteom Analysis', 'Diagnostics'];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const searchString = searchQuery.toLowerCase();
    const matchesSearch =
      p.name.toLowerCase().includes(searchString) ||
      (lang === 'ko' ? p.descriptionKo : p.descriptionEn).toLowerCase().includes(searchString);
    return matchesCategory && matchesSearch;
  });

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !inquiryProduct) return;
    setFormLoading(true);

    // 제목이 비어있을 경우 기본 제목 자동 세팅
    const finalTitle = inquiryTitle || `[제품 견적 및 기술 문의] ${inquiryProduct.name} 문의`;
    const inquiryMsg = message || `${inquiryProduct.name} 제품에 대한 상세 견적 및 기술 사양 요소를 요청합니다.`;

    const generatedId = `inq_${Date.now()}`;
    const localBack = {
      id: generatedId,
      name: clientName, email: clientEmail, phone: clientTel || '-',
      institution: clientInst || '-', title: finalTitle, message: inquiryMsg,
      product_name: inquiryProduct.name, quantity: 1, password: '1234',
      status: 'Pending' as const, created_at: new Date().toISOString()
    };

    try {
      const savedInqs = localStorage.getItem('tmac_client_inquiries');
      let currentInqs = savedInqs ? JSON.parse(savedInqs) : [];
      currentInqs.unshift(localBack);
      localStorage.setItem('tmac_client_inquiries', JSON.stringify(currentInqs));
    } catch (err) { console.warn(err); }

    try {
      const passwordInput = (document.getElementById('inquiry-pw') as HTMLInputElement)?.value || '1234';

      // DB 스키마에 맞게 Insert (수량은 1 고정)
      await supabase.from('inquiries').insert([{
        name: clientName,
        email: clientEmail,
        phone: clientTel || '-',
        institution: clientInst || '-',
        title: finalTitle,
        message: inquiryMsg,
        product_name: inquiryProduct.name,
        quantity: 1,
        password: passwordInput,
        status: 'Pending'
      }]);
    } catch (err) { console.warn(err); }

    try {
      await emailjs.send("service_t8cssi9", "template_0n594rr", {
        to_name: "TMAC Support Team", from_name: clientName, from_email: clientEmail,
        phone_num: clientTel || '-', title: finalTitle, message: inquiryMsg
      }, "vudnKYDZU1U_wrG8g");
    } catch (err) { console.warn(err); }

    setFormLoading(false);
    setFormSubmitted(true);
    setTimeout(() => { setFormSubmitted(false); setInquiryProduct(null); }, 5000);
  };

  const renderTpageTable = (specs: string[]) => {
    return (
      <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm bg-white">
        <table className="w-full border-collapse text-left text-[10px] md:text-xs">
          <thead>
            <tr className="bg-slate-700 text-white text-center border-b border-slate-400">
              <th className="p-2 border border-slate-300 font-bold bg-slate-800 text-white w-1/4" rowSpan={2}>
                {lang === 'ko' ? '농도 (Concentration)' : 'Concentration'}
              </th>
              <th className="p-2 border border-slate-300 font-bold" colSpan={4}>
                {lang === 'ko' ? '웰 구성 및 카탈로그 번호' : 'Well Configuration & Cat No.'}
              </th>
            </tr>
            <tr className="bg-slate-800 text-white text-center">
              <th className="p-2 border border-slate-300 font-bold">10 well / 30 uL</th>
              <th className="p-2 border border-slate-300 font-bold">10 well / 50 uL</th>
              <th className="p-2 border border-slate-300 font-bold">12 well / 20 uL</th>
              <th className="p-2 border border-slate-300 font-bold">15 well / 15 uL</th>
            </tr>
          </thead>
          <tbody>
            {specs.map((rowStr, idx) => {
              const parts = rowStr.split('|').map(p => p.trim());
              const concPart = parts[0]?.replace('농도:', '').replace('Conc:', '').trim() || '';

              const getCodeForHeader = (headerText: string) => {
                const found = parts.find(p => p.startsWith(headerText));
                return found ? found.split(':')[1]?.trim() : '-';
              };

              return (
                <tr key={idx} className="border-b border-slate-100 text-center font-mono hover:bg-slate-50">
                  <td className="p-2 font-extrabold bg-slate-50 border-r border-slate-200 text-slate-700">{concPart}</td>
                  <td className="p-2 border-r border-slate-100">{getCodeForHeader('10 well / 30 uL')}</td>
                  <td className="p-2 border-r border-slate-100">{getCodeForHeader('10 well / 50 uL')}</td>
                  <td className="p-2 border-r border-slate-100">{getCodeForHeader('12 well / 20 uL')}</td>
                  <td className="p-2">{getCodeForHeader('15 well / 15 uL')}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="w-full bg-slate-50 font-sans">

      {/* Hero Banner */}
      <div className="relative w-full h-[320px] md:h-[400px] flex flex-col justify-center items-center text-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-slate-950/60 z-10" />
        <img
          src={labExperimentImg}
          alt="TMAC Laboratory Experiment"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 text-white px-4 pt-16 md:pt-24 select-none max-w-4xl space-y-4 mx-auto w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {lang === 'ko' ? '혁신적인 분석 정밀도 연출' : 'Exceptional Analytical Precision'}
          </h2>
          <div className="h-1 w-24 bg-emerald-500 mx-auto rounded-full" />
          <p className="text-xs md:text-base text-slate-200 font-light leading-relaxed max-w-3xl mx-auto">
            {lang === 'ko'
              ? '멤브레인 전사가 필요 없는 독보적 인겔 테크놀로지로 실험 편차를 원천 차단합니다.'
              : 'Our revolutionary transfer-free In-Gel technology completely avoids standard blotting errors'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 md:px-6 lg:px-8">

        {/* Title & Category Filter */}
        <div className="border-b border-slate-250 pb-6 mb-8 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded">
              {lang === 'ko' ? '제품소개' : 'Products Portfolio'}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 mt-3">
              {lang === 'ko' ? '프로시스 제품군 카탈로그' : 'Prosis Product Solutions'}
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none max-w-full">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setSelectedCategory(cat)}
                className={`py-1.5 px-3.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer border ${selectedCategory === cat
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}>
                {lang === 'ko' ? (cat === 'All' ? '전체 보기' : cat) : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full mb-10">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'ko' ? '제품명 또는 규격 검색...' : 'Search products or specifications...'}
            className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl text-xs md:text-sm bg-white shadow-3xs focus:outline-emerald-600 focus:ring-2 focus:ring-emerald-600/10" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <div key={p.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs hover:shadow-xl hover:border-emerald-500 hover:scale-[1.01] transition-all flex flex-col justify-between group">
              <div className="h-56 bg-slate-100 overflow-hidden relative border-b border-slate-150">
                <img src={p.imageUrl || gelGloveHand} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 duration-700 transition-transform" referrerPolicy="no-referrer" />
                <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-sm uppercase">{p.category}</div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-slate-950 flex items-center justify-between group-hover:text-emerald-700">
                    {p.name} <ArrowUpRight className="w-5 h-5 text-slate-300" />
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">{lang === 'ko' ? p.descriptionKo : p.descriptionEn}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-4 mt-6">
                  <button onClick={() => { setDetailProduct(p); setActiveThumbnailIndex(0); }} className="py-2.5 w-full border border-slate-200 hover:bg-slate-50 font-bold rounded text-xs text-slate-700 transition-colors shadow-3xs cursor-pointer">
                    {lang === 'ko' ? '상세규격' : 'Specs'}
                  </button>
                  <button onClick={() => setInquiryProduct(p)} className="py-2.5 w-full bg-emerald-600 hover:bg-emerald-700 font-bold rounded text-xs text-white transition-all cursor-pointer">
                    {lang === 'ko' ? '문의하기' : 'Inquire'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Product Specifications */}
        {detailProduct && (
          <div className="fixed inset-0 bg-slate-950/80 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-fade-in unique-modal">
            <div className="bg-white rounded-xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl flex flex-col border border-slate-100">

              {/* Modal Header */}
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-emerald-600 rounded-full"></div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-700">{detailProduct.category}</span>
                    <h3 className="text-lg font-black text-slate-900 tracking-tight">{detailProduct.name.toUpperCase()} TECHNICAL DATASHEET</h3>
                  </div>
                </div>
                <button onClick={() => setDetailProduct(null)} className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-white cursor-pointer"><X className="w-6 h-6" /></button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-8 bg-white">

                {/* 1. 상단 개요 섹션 */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-5 space-y-3">
                    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white p-4 shadow-sm aspect-4/3 flex items-center justify-center h-72">
                      <img src={detailProduct.thumbnailImages?.[activeThumbnailIndex] || detailProduct.imageUrl} alt="Main" className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-1 justify-center">
                      {detailProduct.thumbnailImages?.map((img, idx) => (
                        <button key={idx} onClick={() => setActiveThumbnailIndex(idx)} className={`w-14 h-14 rounded-lg border-2 p-1 bg-white cursor-pointer transition-all ${activeThumbnailIndex === idx ? 'border-emerald-500 shadow-md' : 'border-slate-100'}`}>
                          <img src={img} className="w-full h-full object-contain rounded-md" />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-7 space-y-5">
                    <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      <Info className="w-3.5 h-3.5" /> Product Information
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 tracking-tighter leading-none">{detailProduct.name}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{lang === 'ko' ? detailProduct.descriptionKo : detailProduct.descriptionEn}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <span className="text-[9px] uppercase text-slate-400 font-bold block mb-1">Catalog No.</span>
                        <span className="text-xs font-mono font-bold text-slate-700">{detailProduct.id === 'prosis-tpage' ? 'TP-SERIES' : detailProduct.id}</span>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <span className="text-[9px] uppercase text-slate-400 font-bold block mb-1">Standard</span>
                        <span className="text-xs font-bold text-slate-700">KRIBB Verified Tech</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. 중앙 텍스트 섹션 */}
                <div className="py-8 px-6 bg-slate-900 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                  <div className="relative z-10 text-center space-y-2">
                    <h4 className="text-emerald-400 text-xs font-black uppercase tracking-[0.3em]">Executive Summary</h4>
                    <p className="text-white text-base md:text-lg font-bold leading-relaxed max-w-4xl mx-auto">
                      {lang === 'ko'
                        ? `"${detailProduct.name}는 고효율 면역 반응 분석을 위해 설계된 최첨단 장비로, 기존 방식 대비 시약 소모량을 70% 절감하면서도 최상의 실험 결과 재현성을 보장합니다."`
                        : `"${detailProduct.name} is a state-of-the-art system designed for high-efficiency immunoassay, ensuring maximum reproducibility with a 70% reduction in solution consumption."`}
                    </p>
                  </div>
                </div>

                {/* 3. 하단 섹션 */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-4 items-start">
                  <div className="md:col-span-4 space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-4 bg-slate-800"></div>
                      <span className="text-[11px] font-black uppercase tracking-widest text-slate-800">Reference Images</span>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {(detailProduct.referenceBottomImage || [detailProduct.imageUrl]).map((img, idx) => (
                        <div key={idx} className="border border-slate-200 rounded-xl p-2 bg-slate-50 shadow-3xs flex items-center justify-center overflow-hidden h-48 hover:shadow-md transition-shadow">
                          <img src={img} className="max-h-full max-w-full object-contain rounded-md" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-8 space-y-8">
                    <div>
                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-1.5 h-4 bg-emerald-600"></div>
                        <span className="text-[11px] font-black uppercase tracking-widest text-emerald-800">Key Features</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {(lang === 'ko' ? detailProduct.featuresKo : detailProduct.featuresEn).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-3xs hover:border-emerald-200 transition-colors">
                            <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                            <span className="text-[11px] text-slate-700 font-bold leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-1.5 h-4 bg-emerald-600"></div>
                        <span className="text-[11px] font-black uppercase tracking-widest text-emerald-800">Technical Specifications</span>
                      </div>

                      {detailProduct.id === 'prosis-tpage' ? (
                        renderTpageTable(lang === 'ko' ? detailProduct.specsKo : detailProduct.specsEn)
                      ) : (
                        <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white">
                          <table className="w-full text-left text-[11px] border-collapse">
                            <thead>
                              <tr className="bg-slate-800 text-white">
                                <th className="p-3 font-bold border-r border-slate-700 w-1/3 text-center">{lang === 'ko' ? '항목' : 'Item'}</th>
                                <th className="p-3 font-bold text-center">{lang === 'ko' ? '세부 사양' : 'Details'}</th>
                              </tr>
                            </thead>
                            <tbody>
                              {(lang === 'ko' ? detailProduct.specsKo : detailProduct.specsEn).map((spec, idx) => {
                                const [label, ...value] = spec.includes(':') ? spec.split(':') : [lang === 'ko' ? '상세사양' : 'Specs', spec];
                                return (
                                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                    <td className="p-3 font-black text-slate-700 bg-slate-50/50 border-r border-slate-200 text-center uppercase tracking-tighter">{label.trim()}</td>
                                    <td className="p-3 text-slate-600 font-mono font-medium">{value.join(':').trim()}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-600 text-white rounded-2xl p-6 flex flex-col md:flex-row items-center gap-5 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                  <div className="w-14 h-14 rounded-full bg-white text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-sm"><Mail className="w-7 h-7" /></div>
                  <div className="flex-1 text-center md:text-left z-10">
                    <p className="text-sm font-black leading-relaxed">
                      {lang === 'ko' ? (
                        <>제품 견적 및 기술 지원 문의는 <span className="text-amber-300 font-black underline">에스엠솔루션</span> (010-4414-0515) 또는 <span className="text-amber-300 font-black underline">biosmkn@daum.net</span> 으로 연락 바랍니다.</>
                      ) : (
                        <>For technical support or quotes, please contact <span className="text-amber-300 font-bold underline">SM Solution</span> at +82-10-4414-0515 or biosmkn@daum.net.</>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-between items-center px-8">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">MODEL ID: TMAC-{detailProduct.id}</span>
                <div className="flex gap-3">
                  <button onClick={() => setDetailProduct(null)} className="px-6 py-2.5 bg-white hover:bg-slate-100 border border-slate-200 font-black text-slate-600 text-xs rounded-xl transition-all cursor-pointer">{lang === 'ko' ? '창 닫기' : 'Close'}</button>
                  <button onClick={() => { setInquiryProduct(detailProduct); setDetailProduct(null); }} className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 font-black text-white text-xs rounded-xl transition-all shadow-md cursor-pointer">{lang === 'ko' ? '견적 요청하기' : 'Request Quote'}</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Inquiry Modal */}
        {inquiryProduct && (
          <div className="fixed inset-0 bg-slate-950/80 z-50 flex items-center justify-center p-4 animate-fade-in unique-modal">
            <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col border border-slate-100">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-900 text-white">
                <div className="flex items-center gap-2"><MessageSquare className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-sm font-bold">[ {inquiryProduct.name} ] Inquiry</h4>
                </div>
                <button onClick={() => setInquiryProduct(null)} className="text-slate-400 hover:text-white cursor-pointer"><X className="w-5 h-5" /></button>
              </div>

              <form onSubmit={handleInquirySubmit} className="p-6 space-y-4 overflow-y-auto">
                {formSubmitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center"><CheckCircle2 className="w-8 h-8 stroke-2 animate-bounce" /></div>
                    <h4 className="font-extrabold text-base text-slate-950">{lang === 'ko' ? '문의가 성공적으로 접수되었습니다!' : 'Request Sent!'}</h4>
                    <p className="text-xs text-slate-500">{lang === 'ko' ? '담당 과학자가 24시간 내에 회신해 드립니다.' : 'Our managers will contact you within 24 hours.'}</p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" required value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder={lang === 'ko' ? '이름' : 'Name'} className="w-full p-2.5 border border-slate-200 rounded text-xs bg-slate-50" />
                      <input type="text" value={clientInst} onChange={(e) => setClientInst(e.target.value)} placeholder={lang === 'ko' ? '기관명' : 'Institution'} className="w-full p-2.5 border border-slate-200 rounded text-xs bg-slate-50" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input type="email" required value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} placeholder="Email" className="w-full p-2.5 border border-slate-200 rounded text-xs bg-slate-50" />
                      <input type="tel" value={clientTel} onChange={(e) => setClientTel(e.target.value)} placeholder="Tel" className="w-full p-2.5 border border-slate-200 rounded text-xs bg-slate-50" />
                    </div>
                    
                    {/* 제품명 정보만 심플하게 노출 (수량 수식/뱃지 완전 삭제) */}
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded text-[10px] text-slate-600 font-bold font-mono">
                      <span>PRODUCT: {inquiryProduct.name}</span>
                    </div>

                    {/* 제목(Title) 직접 입력란 */}
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold block mb-1">{lang === 'ko' ? '문의 제목' : 'Inquiry Title'}</span>
                      <input 
                        type="text" 
                        value={inquiryTitle} 
                        onChange={(e) => setInquiryTitle(e.target.value)} 
                        placeholder={`[제품 견적 및 기술 문의] ${inquiryProduct.name} 문의`} 
                        className="w-full p-2.5 border border-slate-200 rounded text-xs bg-slate-50 font-medium" 
                      />
                    </div>

                    <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={lang === 'ko' ? '문의 내용을 입력하세요' : 'Your Message'} className="w-full p-2.5 border border-slate-200 rounded text-xs bg-slate-50" />
                    
                    {/* 비밀번호 입력 필드 */}
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold block mb-1">{lang === 'ko' ? '문의 조회용 비밀번호' : 'Inquiry Password'}</span>
                      <input type="password" required placeholder="••••" className="w-full p-2.5 border border-slate-200 rounded text-xs bg-slate-50" id="inquiry-pw" />
                    </div>

                    <button type="submit" disabled={formLoading} className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-all shadow-md disabled:bg-slate-300">
                      {formLoading ? (lang === 'ko' ? '전송 중...' : 'Sending...') : (lang === 'ko' ? '문의 메일 보내기' : 'Submit Inquiry')}
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}