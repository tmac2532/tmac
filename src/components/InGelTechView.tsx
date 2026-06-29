import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Flame, Cpu, ArrowRight, Zap, RefreshCw, Layers, Home } from 'lucide-react';
import microscopeHeroImage from '../assets/images/microscope_lenses_1782188765192.jpg';

interface InGelTechViewProps {
  lang: 'ko' | 'en';
  setView?: (view: string) => void;
}

export default function InGelTechView({ lang, setView }: InGelTechViewProps) {
  const [activeTab, setActiveTab] = useState<'convenience' | 'reproducible' | 'automation'>('convenience');
  
  // 드롭다운 메뉴 열림/닫힘 상태
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 메뉴 컨테이너 Ref
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 메뉴 영역 밖을 클릭했을 때만 드롭다운 닫기
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 드롭다운 항목 클릭 시 페이지 이동 후 메뉴 닫기
  const handleNavigation = (viewName: string) => {
    if (setView) {
      setView(viewName);
    }
    setIsMenuOpen(false);
  };

  // Interactive bullet cards information
  const tabsInfo = {
    convenience: {
      titleKo: '분석 편리성 증대 (Enhanced convenience)',
      titleEn: 'Enhanced Analysis Convenience',
      p1Ko: '복잡하고 손이 많이 가던 멤브레인 전사(Transfer) 과정이 100% 생략됩니다. 겔 자체를 특수 고체상과 반응시켜 바로 타겟을 포집하는 원리입니다.',
      p1En: 'The traditional, manual membrane transfer (Blotting) step is entirely eliminated. The target protein is securely immobilized within the native gel matrix.',
      bulletsKo: [
        '전사 장치 조립 및 밤새 소모되던 대량의 트랜스퍼 완충액 완전 불필요',
        '필름 감광 가이드 없이 즉시 형광 영상 획득 용이',
        '수작업 로딩 단계 감소에 따른 안전 사고 위험 차단'
      ],
      bulletsEn: [
        'No need to assemble transfer cassettes or spend liters of transfer buffers overnight',
        'Quick fluorescent signaling allows imaging directly from the gel',
        'Fewer manual stages prevent accidental sample drops or physical damage'
      ]
    },
    reproducible: {
      titleKo: '높은 재현성 (Maximum reproducibility)',
      titleEn: 'Maximum Analytical Reproducibility',
      p1Ko: '고분자 단백질이나 소분자 펩타이드 전개 시, 멤브레인 기공 크기 제한 및 트랜스퍼 불균일도 때문에 발생하던 "밴드 유실(Blow-through)" 현상이 원천 방지됩니다.',
      p1En: 'Eliminating the blotting step completely resolves blow-through or incomplete transfers typical of small peptides or larger macromolecular proteins.',
      bulletsKo: [
        '격자 단위 정량 포획으로 시료 로딩 전 구간에 동일 편차 적용',
        '겔 속 천연 구조 배합 상태에서의 균일 시약 접촉 가능',
        '실험자 편차(Operator Bias)에 따른 오차 범위를 3.5% 이내로 제어'
      ],
      bulletsEn: [
        'Intergradient capture anchors protein molecules evenly across all lanes',
        'Avoids background hot-spots or membrane-related speckling',
        'Constrains operator-bias deviation under an impressive 3.5% coefficient'
      ]
    },
    automation: {
      titleKo: '분석 자동화 (Full process automation)',
      titleEn: 'Seamless Workflow Automation',
      p1Ko: '티맥의 특허인 순환 제어방식 CDR 원자 동작 기계와 간편히 연동하여, 로딩 완료된 겔만 장비에 장착하면 워싱부터 타겟 발색까지 프로그램 제어가 가능합니다.',
      p1En: 'Configures seamlessly with TMAC\'s proprietary automated dispensers. Simply place the activated gel in the chamber, select your protocol, and let the device handle it.',
      bulletsKo: [
        'CDR 제어 솔브 펌프로 초소량 항체 용맥(3ml) 자동 투입 및 순환 회수',
        '단계별 세척 및 2차 항체 노출 조건 디지털 커스텀 타이머 저장',
        '다중 어레이 모듈 조합으로 하루 최대 10개 겔 병렬 무인 가동'
      ],
      bulletsEn: [
        'CDR fluidic valve continuously pumps and retrieves primary antibodies safely',
        'Automated digital profile controls wash interchanges throughout the runs',
        'Arrayed modules allow unmanned parallel operation of up to 10 gels daily'
      ]
    }
  };

  return (
    <div className="w-full bg-white font-sans">
      
      {/* Full-width Hero Banner with Laboratory backdrop */}
      <div className="relative w-full h-[320px] md:h-[400px] flex flex-col justify-center items-center text-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-slate-950/60 z-10" />
        <img
          src={microscopeHeroImage}
          alt="TMAC Microscope Lenses"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 text-white px-4 pt-16 md:pt-24 select-none">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {lang === 'ko' ? '혁신적인 분석 정밀도 연출' : 'Exceptional Analytical Precision'}
          </h2>
          <div className="h-1 w-24 bg-emerald-500 mx-auto mb-4 rounded-full" />
          <p className="text-xs md:text-base text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            {lang === 'ko'
              ? '멤브레인 전사가 필요 없는 독보적 인겔 테크놀로지로 실험 편차를 원천 차단합니다.'
              : 'Our revolutionary transfer-free In-Gel technology completely avoids standard blotting errors'}
          </p>
        </div>
      </div>

      {/* Sub-Navigation Breadcrumb */}
      <div className="w-full bg-slate-50 border-b border-slate-200 py-3 text-slate-600 select-none">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-4 text-xs font-medium">
          {/* Left aligned chain */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setView && setView('home')}
              className="p-1 rounded-sm text-slate-500 hover:text-emerald-600 transition-colors cursor-pointer"
              title="Home"
            >
              <Home className="w-4 h-4" />
            </button>
            
            <span className="text-slate-300">/</span>
            
            <div className="relative">
              <span className="text-slate-700 font-semibold px-2 py-1 rounded bg-white border border-slate-200 flex items-center gap-1 cursor-default shadow-3xs">
                {lang === 'ko' ? '기술소개' : 'Technology'}
              </span>
            </div>
            
            <span className="text-slate-300">/</span>

            {/* Hover Dropdown Menu Wrapper */}
            <div 
              ref={dropdownRef}
              className="relative inline-block"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <span className="text-emerald-700 font-bold px-2 py-1 rounded bg-white border border-emerald-200 flex items-center gap-1 shadow-3xs cursor-pointer">
                {lang === 'ko' ? '인겔 웨스턴 블롯' : 'In-Gel Western'}
              </span>
              
              {/* Dropdown menu: pt-2 패딩을 주어 텍스트와 메뉴 사이의 간극 마우스 이탈 방지 */}
              {isMenuOpen && (
                <div className="absolute left-0 top-full pt-2 w-44 z-50">
                  <div className="bg-white border border-slate-200 rounded shadow-md py-1 flex flex-col">
                    <button 
                      onClick={() => handleNavigation('overview')} 
                      className="text-left px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-emerald-600 cursor-pointer"
                    >
                      {lang === 'ko' ? '개요' : 'Overview'}
                    </button>
                    <button 
                      onClick={() => handleNavigation('immunoblot')} 
                      className="text-left px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-emerald-600 cursor-pointer"
                    >
                      {lang === 'ko' ? '면역블롯소개' : 'Immunoblot Intro'}
                    </button>
                    <button 
                      onClick={() => handleNavigation('papers')} 
                      className="text-left px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-emerald-600 cursor-pointer"
                    >
                      {lang === 'ko' ? '관련논문보기' : 'Related Papers'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono tracking-wider text-slate-400">
            <span className="text-emerald-600 font-bold font-sans">TMAC</span>
            <span>•</span>
            <span>IMMUNOBLOT EXPERT</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-12 px-4 md:px-6 lg:px-8">
        
        {/* Header Breadcrumb */}
        <div className="border-b border-slate-200 pb-6 mb-8 text-center md:text-left">
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded">
            {lang === 'ko' ? '기술소개' : 'Technology'}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 mt-3 tracking-tight">
            {lang === 'ko' ? '인겔 웨스턴 블롯 시스템' : 'In-Gel Western Blot System'}
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed">
            {lang === 'ko'
              ? '지속적인 연구개발과 고객 만족을 바탕으로 바이오 분야의 선도기업이 되도록 노력하겠습니다.'
              : 'Empowering core biochemistry workflows by eliminating traditional membrane transferring barriers.'}
          </p>
        </div>

        {/* Core Subtitle Badge Grid */}
        <div className="bg-slate-950 text-white rounded-xl p-6 md:p-8 mb-10 shadow-md">
          <p className="text-emerald-400 font-mono text-[11px] font-semibold tracking-wider uppercase text-center md:text-left">
            In-Gel Western Blot System
          </p>
          <h3 className="text-lg md:text-2xl font-extrabold mt-1 text-center md:text-left tracking-tight">
            {lang === 'ko' ? '멤브레인 전사과정이 필요 없는 웨스턴 블롯' : 'Western Blotting with absolutely zero membrane transfer requirements'}
          </h3>
          
          {/* Interactive Badge Selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
            <button
              onClick={() => setActiveTab('convenience')}
              className={`p-3 rounded-lg text-center font-bold text-xs transition-all cursor-pointer ${
                activeTab === 'convenience'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              🚀 {lang === 'ko' ? '분석 편리성 증대' : 'Enhanced Convenience'}
            </button>
            <button
              onClick={() => setActiveTab('reproducible')}
              className={`p-3 rounded-lg text-center font-bold text-xs transition-all cursor-pointer ${
                activeTab === 'reproducible'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              🛡️ {lang === 'ko' ? '높은 재현성' : 'High Reproducibility'}
            </button>
            <button
              onClick={() => setActiveTab('automation')}
              className={`p-3 rounded-lg text-center font-bold text-xs transition-all cursor-pointer ${
                activeTab === 'automation'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              🤖 {lang === 'ko' ? '분석 자동화' : 'Workflow Automation'}
            </button>
          </div>

          {/* Dynamic Tabs Info */}
          <div className="mt-8 pt-6 border-t border-slate-850 animate-fade-in">
            <h4 className="text-sm md:text-base font-bold text-slate-100">
              {lang === 'ko' ? tabsInfo[activeTab].titleKo : tabsInfo[activeTab].titleEn}
            </h4>
            <p className="text-xs md:text-sm text-slate-300 mt-2 leading-relaxed">
              {lang === 'ko' ? tabsInfo[activeTab].p1Ko : tabsInfo[activeTab].p1En}
            </p>
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {(lang === 'ko' ? tabsInfo[activeTab].bulletsKo : tabsInfo[activeTab].bulletsEn).map((bullet, idx) => (
                <li key={idx} className="bg-slate-900/60 p-3 rounded border border-slate-850 text-xs text-slate-400 flex items-start gap-2.5">
                  <span className="w-2.5 h-2.5 text-emerald-500 font-extrabold flex-shrink-0">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comparative Scientific Visual Diagram */}
        <div className="border border-slate-200 rounded-xl p-6 md:p-8 bg-slate-50 shadow-2xs mb-10">
          <div className="text-center mb-6">
            <span className="text-[10px] font-mono uppercase bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-bold">
              Procedural Comparison
            </span>
            <h4 className="text-base font-bold text-slate-950 mt-1.5">
              {lang === 'ko' ? '전통적인 웨스턴 블롯 vs 인겔 웨스턴 블롯 프로토콜' : 'Conventional Blotting vs. TMAC In-Gel Workflow'}
            </h4>
          </div>

          <div className="space-y-8">
            
            {/* Flow A: Conventional */}
            <div className="border border-red-100 bg-red-50/20 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-4 border-b border-red-50 pb-2">
                <span className="bg-red-600 text-white font-extrabold px-2.5 py-0.5 rounded-sm text-xs">A</span>
                <span className="font-bold text-xs uppercase tracking-wider text-red-950">
                  {lang === 'ko' ? 'Conventional Western Blot (전통적 방식: 24 ~ 30시간)' : 'Conventional Western Blot (24 to 30 Hrs)'}
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-3 rounded border border-slate-150 flex flex-col items-center shadow-3xs relative">
                  <span className="text-[10px] text-slate-400 font-bold font-mono">1. SDS-PAGE</span>
                  <div className="w-12 h-10 border border-slate-300 my-2 rounded flex flex-col gap-0.5 p-1 bg-sky-50">
                    <span className="w-full h-1 bg-sky-400 opacity-60"></span>
                    <span className="w-full h-1 bg-sky-400"></span>
                    <span className="w-full h-1 bg-sky-400 opacity-40"></span>
                    <span className="w-full h-1 bg-sky-400 opacity-80"></span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-snug">{lang === 'ko' ? '단백질 분리' : 'Protein separation'}</p>
                </div>

                <div className="bg-white p-3 rounded border border-slate-150 flex flex-col items-center shadow-3xs relative">
                  <span className="text-[10px] text-slate-400 font-bold font-mono">2. Blot (Transfer)</span>
                  <div className="w-12 h-10 border border-red-400 my-2 rounded flex items-center justify-center bg-red-50 gap-1.5 p-1">
                    <div className="w-3 h-7 bg-sky-300 rounded-xs"></div>
                    <span className="transform rotate-90 text-[8px] text-red-500">→</span>
                    <div className="w-3 h-7 bg-red-300 rounded-xs"></div>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-snug">{lang === 'ko' ? '멤브레인 이동 (blow-away 발생 가능)' : 'Membrane Transfer (loss risk)'}</p>
                </div>

                <div className="bg-white p-3 rounded border border-slate-150 flex flex-col items-center shadow-3xs relative">
                  <span className="text-[10px] text-slate-400 font-bold font-mono">3. Blocking</span>
                  <div className="w-12 h-10 border border-yellow-300 my-2 rounded flex items-center justify-center bg-yellow-50 p-1">
                    <div className="w-8 h-4 bg-yellow-100 rounded-sm border border-yellow-250 animate-pulse text-[8px] text-yellow-700 flex items-center justify-center">BSA</div>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-snug">{lang === 'ko' ? '비특이 반응 차단 (60분~밤샘)' : 'Block sites'}</p>
                </div>

                <div className="bg-white p-3 rounded border border-slate-150 flex flex-col items-center shadow-3xs relative">
                  <span className="text-[10px] text-slate-400 font-bold font-mono">4. Probe & Film</span>
                  <div className="w-12 h-10 border border-slate-400 my-2 rounded flex flex-col justify-center items-center gap-0.5 p-1 bg-slate-900">
                    <span className="w-6 h-[2px] bg-white opacity-90"></span>
                    <span className="w-8 h-[2px] bg-white opacity-30"></span>
                    <span className="w-7 h-[2px] bg-white"></span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-snug">{lang === 'ko' ? '1/2차 항체 결합 및 아날로그 노출' : 'Exposure signals'}</p>
                </div>
              </div>
            </div>

            {/* Flow B: In-Gel */}
            <div className="border border-emerald-200 bg-emerald-50/20 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-4 border-b border-emerald-100 pb-2">
                <span className="bg-emerald-600 text-white font-extrabold px-2.5 py-0.5 rounded-sm text-xs">B</span>
                <span className="font-bold text-xs uppercase tracking-wider text-emerald-950">
                  {lang === 'ko' ? 'In Gel Western Blot (티맥 인겔 혁신 방식: 1시간 이내 완료)' : 'TMAC In Gel Western Blot (Under 1 Hr)'}
                </span>
                <span className="ml-auto bg-emerald-100 text-emerald-800 text-[9px] font-bold py-0.5 px-2 rounded-xl animate-pulse font-mono flex items-center gap-1">
                  <Zap className="w-3 h-3 text-emerald-600" />
                  NO TRANSFER
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-3 rounded border border-emerald-150 flex flex-col items-center shadow-3xs hover:border-emerald-500 transition-colors">
                  <span className="text-[10px] text-emerald-700 font-bold font-mono">1. SDS-PAGE</span>
                  <div className="w-12 h-10 border border-emerald-300 my-2 rounded flex flex-col gap-0.5 p-1 bg-emerald-50">
                    <span className="w-full h-1 bg-emerald-400 opacity-60"></span>
                    <span className="w-full h-1 bg-emerald-400"></span>
                    <span className="w-full h-1 bg-emerald-400 opacity-40"></span>
                    <span className="w-full h-1 bg-emerald-400 opacity-80"></span>
                  </div>
                  <p className="text-[10px] text-emerald-900 leading-snug font-medium">{lang === 'ko' ? '동일 전기영동' : 'Same gel process'}</p>
                </div>

                <div className="bg-white p-3 rounded border border-emerald-150 flex flex-col items-center shadow-3xs hover:border-emerald-500 transition-colors group">
                  <span className="text-[10px] text-emerald-700 font-bold font-mono">2. Capture (UV Expose)</span>
                  <div className="w-12 h-10 border border-purple-300 my-2 rounded flex items-center justify-center bg-purple-50 p-1 relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-1 bg-purple-600 animate-pulse"></div>
                    <svg viewBox="0 0 100 100" className="w-4 h-4 text-purple-600 animate-spin">
                      <polygon points="50,10 60,40 90,50 60,60 50,90 40,60 10,50 40,40" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-[10px] text-emerald-900 leading-snug font-medium">
                    {lang === 'ko' ? '자외선 링커 감광 (단백질 순간 포획)' : 'Covalent link under UV (5 mins)'}
                  </p>
                </div>

                <div className="bg-white p-3 rounded border border-emerald-150 flex flex-col items-center shadow-3xs hover:border-emerald-500 transition-colors">
                  <span className="text-[10px] text-emerald-700 font-bold font-mono">3. Decrosslinking</span>
                  <div className="w-12 h-10 border border-sky-300 my-2 rounded flex items-center justify-center bg-sky-50 p-1">
                    <RefreshCw className="w-4 h-4 text-sky-500 animate-spin" />
                  </div>
                  <p className="text-[10px] text-emerald-900 leading-snug font-medium">
                    {lang === 'ko' ? '1% HCl 워시 (겔 매트릭스 융해 완화)' : 'Acid rinse to expand pores'}
                  </p>
                </div>

                <div className="bg-white p-3 rounded border border-emerald-150 flex flex-col items-center shadow-3xs hover:border-emerald-500 transition-colors">
                  <span className="text-[10px] text-emerald-700 font-bold font-mono">4. Direct Probe</span>
                  <div className="w-12 h-10 border border-emerald-300 my-2 rounded flex flex-col justify-center items-center gap-0.5 p-1 bg-slate-900">
                    <span className="w-6 h-[2.5px] bg-emerald-400"></span>
                    <span className="w-4 h-[2.5px] bg-red-400"></span>
                    <span className="w-7 h-[2.5px] bg-orange-400"></span>
                  </div>
                  <p className="text-[10px] text-emerald-900 leading-snug font-medium">
                    {lang === 'ko' ? '겔 내 직접 형광 하이브리드 검출' : 'Assay directly inside gel'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Benefits summary card */}
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl leading-relaxed text-xs">
          <h5 className="font-bold text-slate-900 flex items-center gap-1.5 mb-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            {lang === 'ko' ? '티맥 인겔 웨스턴 블롯 결론적 특장점' : 'Summarized Economic Benefits'}
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-600 font-medium">
            <div className="p-3 bg-white rounded border border-slate-150">
              <span className="text-emerald-700 font-bold font-mono block text-sm">85% TIME REDUCTION</span>
              <p className="mt-1 leading-normal text-[11px]">
                {lang === 'ko' ? '전용 감광 링커 작용으로 전사와 블로킹에만 하루 이상 걸리던 시간을 단 45분으로 줄입니다.' : 'Bypasses transfer matrices. Reduces standard run times to well below 45 minutes.'}
              </p>
            </div>
            <div className="p-3 bg-white rounded border border-slate-150">
              <span className="text-orange-700 font-bold font-mono block text-sm">70% REAGENT SAVING</span>
              <p className="mt-1 leading-normal text-[11px]">
                {lang === 'ko' ? '기본 10mL 이상 소모되던 1차 항체의 양을 나노 CDR 장비를 연계하여 3mL 이하로 크게 줄입니다.' : 'Our proprietary micro-flow dispensers reduce precious antibody use to less than 3ml.'}
              </p>
            </div>
            <div className="p-3 bg-white rounded border border-slate-150">
              <span className="text-indigo-700 font-bold font-mono block text-sm">NO BLOW-THROUGH</span>
              <p className="mt-1 leading-normal text-[11px]">
                {lang === 'ko' ? '멤브레인 기공을 통과해 저분자량 단백질 밴드가 날아가버리는 실수를 원천 방지해 절대 재현성을 보장합니다.' : 'Eliminating electrostatic membrane passage ensures absolute peptide recoveries.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}