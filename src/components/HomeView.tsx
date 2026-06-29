import React, { useState, useEffect } from 'react';
import { NOTICES, PAPERS } from '../data/tmacData';
import { Play, FileText, ChevronRight, MessageSquare, Phone, Info, Award, Calendar, Eye } from 'lucide-react';

import karyotypeImage from '../assets/images/karyotype_fluorescence_1782125529893.jpg';
import cellNucleiImage from '../assets/images/cell_nuclei_imaging_1782125546738.jpg';
import dnaHelixImage from '../assets/images/dna_helix_render_1782125561216.jpg';

// 사용자 요청에 따른 로컬 이미지 임포트
import antibody_Image from '../assets/images/antibody.png';
import immunoblot_Image from '../assets/images/immunoblot.png';
import miria_Image from '../assets/images/miria_system.png';

interface HomeViewProps {
  setView: (view: string) => void;
  lang: 'ko' | 'en';
  onSelectNotice?: (id: number) => void;
  onSelectPaper?: (id: number) => void;
}

export default function HomeView({ setView, lang, onSelectNotice, onSelectPaper }: HomeViewProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [boardTab, setBoardTab] = useState<'notice' | 'papers'>('notice');

  const slides = [
    {
      titleKo: '인류의 행복한 삶을 위한 기업',
      titleEn: 'A company for the happy life of mankind',
      subtitleKo: '면역블롯 기반 단백질 분석 기술과 분석용 항체 콜렉션 기술 개발',
      subtitleEn: 'Developing protein analysis based on immunoblotting and research antibody collections',
      badgeKo: '연구소기업 공동설립',
      badgeEn: 'Research Institute Joint Venture',
      image: karyotypeImage
    },
    {
      titleKo: '21세기 전사 과정 없는 바이오 혁신 선도',
      titleEn: '21st Century Leader in Transfer-Free Chromatography',
      subtitleKo: '신기술 In-Gel Western Blot System으로 프로토콜 시간 및 시약 비용의 극적 감축',
      subtitleEn: 'Dramatic reductions in protocol times and reagent costs via high-fidelity In-Gel Western blotting',
      badgeKo: '글로벌 특허 보유',
      badgeEn: 'Protected by Global Patents',
      image: cellNucleiImage
    },
    {
      titleKo: '독창적인 바이오마커 면역진단 플랫폼',
      titleEn: 'Unique Biomarker Immunodiagnostics Platform',
      subtitleKo: '초고해상도 클라우드 인겔 스캐너 및 다채널 단백질 분석을 통한 맞춤형 선별 검사',
      subtitleEn: 'Next generation cloud-based scanners and multi-channel profiling targeted screening workflows',
      badgeKo: '차세대 진단 최적화',
      badgeEn: 'Next-Gen Diagnostics',
      image: dnaHelixImage
    }
  ];

  // Auto cycle banner
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full">
      {/* 1. Hero Automated Slider */}
      <div className="relative h-[480px] md:h-[540px] w-full overflow-hidden bg-slate-950">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Dark tint overlay */}
            <div className="absolute inset-0 bg-slate-950/70 z-10" />
            <img
              src={slide.image}
              alt="Biotechnology background"
              className="w-full h-full object-cover transform scale-105 duration-[6000ms] ease-out"
              referrerPolicy="no-referrer"
            />
            
            {/* Content overlay */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full text-white">
                <div className="text-emerald-400 font-mono tracking-widest text-xs md:text-sm font-semibold uppercase mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                  {lang === 'ko' ? slide.badgeKo : slide.badgeEn}
                </div>
                
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-4xl mb-4 leading-tight">
                  {lang === 'ko' ? slide.titleKo : slide.titleEn}
                </h2>
                
                <p className="text-sm md:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed font-light">
                  {lang === 'ko' ? slide.subtitleKo : slide.subtitleEn}
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => setView('ingel')}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs md:text-sm py-3 px-6 rounded-lg shadow-lg hover:shadow-emerald-900/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    {lang === 'ko' ? '기술 바로가기' : 'Explore Tech'}
                  </button>
                  <button
                    onClick={() => setView('products')}
                    className="border border-slate-400 hover:border-white hover:bg-white/10 text-white font-semibold text-xs md:text-sm py-3 px-6 rounded-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    {lang === 'ko' ? '제품 전체보기' : 'Browse Products'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Small Slider Dot Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                idx === activeSlide ? 'bg-emerald-500 w-8' : 'bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 2. Black Summary row (What is a blotting?) */}
      <div className="w-full bg-slate-950 text-white border-y border-slate-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800 gap-8">
          
          {/* blotting definition section */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-950 text-emerald-400 rounded-lg">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider text-slate-300">
                {lang === 'ko' ? '블로팅이란 무엇인가?' : 'What is a blotting?'}
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {lang === 'ko' 
                  ? '블로팅 기술은 DNA, RNA 및 단백질 등 생체 분자들에 대한 분석 기술로 타겟 분자들에 특이적으로 결합하는 표지자(probe)를 이용하여 분자 결합력을 추정 및 검출하는 바이오 핵심 기반 기술입니다.'
                  : 'Blotting technologies resolve macromolecular entities like DNA, RNA, and proteins, securing precise detection and assaying via targeted complementary bio-probes.'}
              </p>
            </div>
          </div>

          {/* Development roadmap summary */}
          <div className="flex items-start gap-4 md:pl-8 pt-6 md:pt-0">
            <div className="p-3 bg-indigo-950 text-indigo-400 rounded-lg">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider text-slate-300">
                {lang === 'ko' ? '티맥 개발로드맵 & 핵심 비전' : 'Development roadmap'}
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {lang === 'ko'
                  ? 'MiRIA 시스템의 고해상도 구현을 위한 자동화 스캐너 기구 판매 및 다중 시료 어레이 검사 가동. 특허 CDR 핵심 밸브 기술을 탑재해 동급 최다 항체 다중 분석 스크리닝 서비스를 지원합니다.'
                  : 'Delivering proprietary MiRIA workflows with high density dispensers, leveraging patented cyclic draining (CDR) valves to achieve multi-analyte, rapid throughput diagnostics.'}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Circular Feature Hub (New Immunoblot Platform, MiRIA System, Antibody Collection) */}
      <div className="w-full bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Core Capabilities
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950 mt-3 tracking-tight">
              {lang === 'ko' ? '티맥 핵심 바이오 테크놀로지' : 'TMAC Bio-Technology Clusters'}
            </h3>
            <p className="text-xs md:text-sm text-slate-500 mt-2 max-w-xl mx-auto">
              {lang === 'ko'
                ? '연구원들의 실험 환경 혁신을 선도하는 맞춤형 소모품 및 자동화 통합 분석 라인업'
                : 'Pioneering workflow automation to accelerate clinical assay times and optimize laboratory results'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Circle 1 - New Immunoblot Platform - DOUBLE SIZE & LOCAL IMAGE */}
            <div className="bg-white border border-slate-100 rounded-xl p-8 text-center hover:shadow-xl transition-all hover:scale-[1.01] flex flex-col items-center">
              <div className="w-48 h-48 rounded-full border-8 border-emerald-500 overflow-hidden shadow-xl flex items-center justify-center bg-emerald-50 mb-10 group-hover:rotate-6">
                <img
                  src={immunoblot_Image}
                  alt="Immunoblot technology"
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {lang === 'ko' ? 'New Immunoblot Platform' : 'New Immunoblot Platform'}
              </h4>
              <div className="h-[3px] w-16 bg-emerald-500 my-4"></div>
              <ul className="text-sm text-slate-600 text-left space-y-2.5 mt-2 leading-relaxed">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
                  <span>{lang === 'ko' ? '반응 시간 85% 이상 대폭 단축' : '85% response time reduction'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
                  <span>{lang === 'ko' ? '고가 시약 및 시료 사용량 최소화' : 'Minimal chemical & sample volume'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
                  <span>{lang === 'ko' ? '고효율 다채널 면역블롯 어레이 연계' : 'High-density immunoblot arrays'}</span>
                </li>
              </ul>
              <button
                onClick={() => setView('ingel')}
                className="mt-8 text-sm text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1.5 group cursor-pointer"
              >
                {lang === 'ko' ? '상세히 보기' : 'Check Details'}
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Circle 2 - MiRIA System - DOUBLE SIZE & LOCAL IMAGE */}
            <div className="bg-white border border-slate-100 rounded-xl p-8 text-center hover:shadow-xl transition-all hover:scale-[1.01] flex flex-col items-center">
              <div className="w-48 h-48 rounded-full border-8 border-orange-500 overflow-hidden shadow-xl flex items-center justify-center bg-orange-50 mb-10">
                <img
                  src={miria_Image}
                  alt="Automated MiRIA system"
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {lang === 'ko' ? 'MiRIA System' : 'MiRIA System'}
              </h4>
              <div className="h-[3px] w-16 bg-orange-500 my-4"></div>
              <ul className="text-sm text-slate-600 text-left space-y-2.5 mt-2 leading-relaxed">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></span>
                  <span>{lang === 'ko' ? '전체 면역블롯 소량 어레이 자동화' : 'Automated high-density blot assay'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0"></span>
                  <span>{lang === 'ko' ? '다중 대량 시료 및 다중 항체 교차 분석' : 'Multi-sample, multi-antibody profiling'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0"></span>
                  <span>{lang === 'ko' ? 'MiRIA 시스템 전용 소모품 공급 가속' : 'Dedicated MiRIA consumables'}</span>
                </li>
              </ul>
              <button
                onClick={() => setView('roadmap')}
                className="mt-8 text-sm text-orange-600 hover:text-orange-700 font-bold flex items-center gap-1.5 group cursor-pointer"
              >
                {lang === 'ko' ? '상세히 보기' : 'Check Details'}
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Circle 3 - Antibody Collection - DOUBLE SIZE & LOCAL IMAGE */}
            <div className="bg-white border border-slate-100 rounded-xl p-8 text-center hover:shadow-xl transition-all hover:scale-[1.01] flex flex-col items-center">
              <div className="w-48 h-48 rounded-full border-8 border-indigo-500 overflow-hidden shadow-xl flex items-center justify-center bg-indigo-50 mb-10">
                <img
                  src={antibody_Image}
                  alt="Validated antibodies"
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {lang === 'ko' ? 'Antibody Collection' : 'Antibody Collection'}
              </h4>
              <div className="h-[3px] w-16 bg-indigo-500 my-4"></div>
              <ul className="text-sm text-slate-600 text-left space-y-2.5 mt-2 leading-relaxed">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0"></span>
                  <span>{lang === 'ko' ? '검증된 글로벌 연구용 항체 라이브러리' : 'Validated primary antibody list'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"></span>
                  <span>{lang === 'ko' ? '이차 항체 정량 검증 및 발현 프로파일링' : 'Secondary validations & profiling'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"></span>
                  <span>{lang === 'ko' ? '산업용 맞춤형 고친화성 신규 항체 개발' : 'New high-affinity custom antibodies'}</span>
                </li>
              </ul>
              <button
                onClick={() => setView('products')}
                className="mt-8 text-sm text-indigo-600 hover:text-indigo-700 font-bold flex items-center gap-1.5 group cursor-pointer"
              >
                {lang === 'ko' ? '상세히 보기' : 'Check Details'}
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* 4. Combined Institute Banner Row with deep blue background */}
      <div className="relative py-12 bg-emerald-950 text-white overflow-hidden">
        {/* Abstract biological cell backdrop pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-400 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center font-bold text-lg text-emerald-400">
              K
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-emerald-300 font-semibold font-mono">
                Joint Venture Initiative
              </p>
              <h4 className="text-md md:text-lg font-bold mt-1 max-w-xl">
                {lang === 'ko'
                  ? '(주)티맥은 한국생명공학연구원 (KRIBB) 과 (주)씨맥이 공동 설립한 정부 지정 공인 연구소기업입니다.'
                  : 'TMAC is an official Ministry-approved Research Institute Enterprise co-established by KRIBB and CMAC.'}
              </h4>
            </div>
          </div>
          <button
            onClick={() => setView('greeting')}
            className="whitespace-nowrap px-5 py-2.5 bg-white text-emerald-950 font-bold rounded-lg text-xs hover:bg-slate-100 transition-colors shadow-sm cursor-pointer"
          >
            {lang === 'ko' ? '공동 협력구조 보기' : 'View Partnership Struct'}
          </button>
        </div>
      </div>

      {/* 5. Split Bottom Section: Contact (Left) and Board Tabs (Right) */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Widget: Contact Details (4 cols) */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Phone className="w-5 h-5 text-emerald-600" />
              {lang === 'ko' ? '제품 및 기술 협력 문의' : 'Inquiries & Collaborations'}
            </h4>
            
            <p className="text-xs text-slate-500 mt-3 leading-relaxed">
              {lang === 'ko'
                ? '대전 유성구 대덕테크노밸리 바이오 연구 허브. 원천 기술 연구나 특화 주문형 제품 견적이 필요하시면 언제든 남겨주세요.'
                : 'Daedeok Science Valley Bio Research Hub. Feel free to send us custom requests regarding immunoblotting assemblies.'}
            </p>

            <div className="mt-6 space-y-3 font-medium text-xs text-slate-700">
              <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
                <span>{lang === 'ko' ? '회사 대표전화' : 'TEL'}</span>
                <span className="font-bold text-slate-900 font-mono">+82-70-7543-2532</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
                <span>{lang === 'ko' ? '팩스 전송' : 'FAX'}</span>
                <span className="font-bold text-slate-900 font-mono">+82-70-7543-2533</span>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
            <p className="text-xs text-emerald-800 leading-relaxed font-medium">
              🔔 {lang === 'ko' 
                ? '연구 개발 및 제품관련 궁금하신 사항이 있으시면 언제든지 문의주세요. [관련 논문 리스트] 탭을 클릭하시면 제품 관련 논문을 보실 수 있습니다.'
                : 'Please press the Inquiries button to request estimates. Clicking the Publications lists lets you check scientific validity.'}
            </p>
            <button
              onClick={() => setView('products')}
              className="mt-3.5 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded text-xs transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              {lang === 'ko' ? '제품 견적/인겔 상담 신청' : 'Request Product Estimates'}
            </button>
          </div>
        </div>

        {/* Right Widget: Bulletin Board Tab Widget (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          
          {/* Tab buttons switcher */}
          <div className="flex border-b border-slate-200 bg-slate-50">
            <button
              onClick={() => setBoardTab('notice')}
              className={`flex-1 py-4 text-center font-bold text-xs md:text-sm tracking-wide border-b-2 transition-colors cursor-pointer ${
                boardTab === 'notice'
                  ? 'border-emerald-600 text-emerald-700 bg-white'
                  : 'border-transparent text-slate-600 hover:text-emerald-600 hover:bg-slate-100/50'
              }`}
            >
              📊 {lang === 'ko' ? '공지사항' : 'Company Notices'}
            </button>
            <button
              onClick={() => setBoardTab('papers')}
              className={`flex-1 py-4 text-center font-bold text-xs md:text-sm tracking-wide border-b-2 transition-colors cursor-pointer ${
                boardTab === 'papers'
                  ? 'border-emerald-600 text-emerald-700 bg-white'
                  : 'border-transparent text-slate-600 hover:text-emerald-600 hover:bg-slate-100/50'
              }`}
            >
              🔬 {lang === 'ko' ? '관련 논문 리스트' : 'Publications List'}
            </button>
          </div>

          <div className="p-6">
            
            {/* Notices Board sub-panel */}
            {boardTab === 'notice' && (
              <div className="space-y-4">
                {NOTICES.map((notice) => (
                  <div
                    key={notice.id}
                    onClick={() => onSelectNotice?.(notice.id)}
                    className="p-4 rounded-lg border border-slate-100 hover:border-emerald-200 hover:bg-slate-50/50 transition-all cursor-pointer group"
                  >
                    <div className="flex justify-between items-start gap-4 flex-wrap">
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                        Notice
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {notice.date}
                      </span>
                    </div>
                    <h5 className="font-bold text-xs md:text-sm text-slate-900 group-hover:text-emerald-700 transition-colors mt-2.5 lines-clamp-1">
                      {lang === 'ko' ? notice.titleKo : notice.titleEn}
                    </h5>
                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {lang === 'ko' ? notice.contentKo : notice.contentEn}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Papers / Video sub-panel */}
            {boardTab === 'papers' && (
              <div className="divide-y divide-slate-100">
                {PAPERS.slice(0, 4).map((paper) => (
                  <div
                    key={paper.id}
                    onClick={() => onSelectPaper?.(paper.id)}
                    className="py-3.5 flex items-start gap-4 hover:bg-slate-50/60 p-2 rounded-lg cursor-pointer transition-colors group"
                  >
                    {/* Tiny visual card representing paper */}
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded overflow-hidden border border-slate-200 bg-slate-100 flex-shrink-0 flex items-center justify-center relative">
                      {paper.imageUrl ? (
                        <img src={paper.imageUrl} alt="Ref Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      ) : (
                        <FileText className="w-6 h-6 text-slate-400" />
                      )}
                      {paper.youtubeUrl && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Play className="w-5 h-5 text-white fill-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono mb-1">
                        <span className="text-slate-500 font-sans font-bold">{paper.author}</span>
                        <span className="flex items-center gap-1 font-mono">
                          <Eye className="w-3 h-3" /> {paper.views.toLocaleString()}
                        </span>
                      </div>
                      <h5 className="font-bold text-[11px] md:text-xs text-slate-950 group-hover:text-emerald-700 transition-colors line-clamp-1">
                        {lang === 'ko' ? paper.titleKo : paper.titleEn}
                      </h5>
                      <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-snug">
                        {lang === 'ko' ? paper.summaryKo : paper.summaryEn}
                      </p>
                    </div>
                  </div>
                ))}
                
                <div className="pt-3 text-center">
                  <button
                    onClick={() => setView('papers')}
                    className="text-xs text-emerald-600 hover:text-emerald-700 font-bold inline-flex items-center gap-1 cursor-pointer"
                  >
                    {lang === 'ko' ? '논문 및 자료실 보러가기' : 'Check All Research Media'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}