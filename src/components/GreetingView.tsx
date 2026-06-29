import React from 'react';
import { Award, Zap, Users, Compass, Home, ArrowUpRight } from 'lucide-react';
import buildingHeroImage from '../assets/images/building_hero_1782187664127.jpg';
import tmacLogo from '../assets/images/company_logo-1.png';

interface GreetingViewProps {
  lang: 'ko' | 'en';
  setView?: (view: string) => void;
}

export default function GreetingView({ lang, setView }: GreetingViewProps) {
  return (
    <div className="w-full bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. Hero Dynamic Banner */}
      <div className="relative w-full h-[320px] md:h-[380px] flex flex-col justify-center items-center text-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-slate-950/50 z-10" />
        <img
          src={buildingHeroImage}
          alt="TMAC Headquarters Building"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 text-white px-4 pt-16 md:pt-24 select-none">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {lang === 'ko' ? '21세기 바이오 선도기업' : '21st Century Biotech Leader'}
          </h2>
          <div className="h-1 w-24 bg-emerald-500 mx-auto mb-4 rounded-full" />
          <p className="text-xs md:text-base text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            {lang === 'ko'
              ? '면역블롯 기반 단백질 분석 기술과 분석용 항체 콜렉션 기술 개발'
              : 'Developing protein analysis based on immunoblotting and research antibody collections'}
          </p>
        </div>
      </div>

      {/* 2. Sub-Navigation Breadcrumb */}
      <div className="w-full bg-slate-50 border-b border-slate-200 py-3 text-slate-600 select-none">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-4 text-xs font-medium">
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
                {lang === 'ko' ? '회사소개' : 'Company'}
              </span>
            </div>
            <span className="text-slate-300">/</span>
            <div className="relative inline-block">
              <span className="text-emerald-700 font-bold px-2 py-1 rounded bg-white border border-emerald-200 flex items-center gap-1 shadow-3xs">
                {lang === 'ko' ? '인사말' : 'Greeting'}
              </span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono tracking-wider text-slate-400">
            <span className="text-emerald-600 font-bold font-sans">TMAC</span>
            <span>•</span>
            <span>IMMUNOBLOT EXPERT</span>
          </div>
        </div>
      </div>

      {/* 3. Main Narrative Section */}
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="border-b border-slate-200 pb-6 mb-8 text-center md:text-left">
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded">
            {lang === 'ko' ? '회사소개' : 'About Company'}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 mt-3 tracking-tight">
            {lang === 'ko' ? '인사말' : 'President’s Greeting'}
          </h2>
        </div>

        {/* Narrative President Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 mb-16 shadow-3xs">
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 font-sans leading-snug">
            {lang === 'ko'
              ? '주식회사 티맥 방문을 진심으로 환영합니다.'
              : 'We warmly welcome you to TMAC Co., Ltd.'}
          </h3>
          
          <div className="text-xs md:text-[13px] text-slate-600 space-y-4 leading-relaxed">
            {lang === 'ko' ? (
              <>
                <p>
                  단백질 분석의 핵심 기술인 면역블롯(Immunoblot) 및 항체 포획 분석 분야는 생명과학 연구와 정밀 진단의 기반입니다. 그러나 기존 실험실의 수동 방식은 과도한 시간 소비와 세밀한 수작업 조건, 그리고 값비싼 시약의 낭비를 수반하는 기술적 제약이 있었습니다.
                </p>
                <p>
                  이를 혁신하고자 당사는 <strong>한국생명공학연구원(KRIBB)</strong>으로부터 원천 기술을 공인 이전 받아 탄탄한 기초 공학 토대를 확보하였으며, <strong>주식회사 씨맥</strong>의 정밀 하드웨어 제조 노하우와 유체 액추에이션 노하우를 접목하여 웨스턴블롯 시약 대량 절감 플랫폼 양산화에 성공하였습니다.
                </p>
                <p>
                  앞으로도 티맥은 한 방울의 시료, 1 마이크로리터의 값비싼 항체까지 소중히 절약하는 실용적이고 우수한 플랫폼 기술을 제공함으로써 전 세계 바이오 연구의 경제성과 정확도를 비약적으로 향상시키고, 더 나아가 인류의 건강한 행복에 공헌하도록 연구개발에 매진하겠습니다.
                </p>
                <p className="text-right font-bold text-slate-900 mt-6">- 주식회사 티맥 임직원 일동 -</p>
              </>
            ) : (
              <>
                <p>
                  The fields of Immunoblot and antibody capture analysis, which are core technologies of protein diagnostics, form the cornerstone of biochemistry and molecular biology. However, conventional protocols require tedious labor-intensive hours and highly expensive reagent waste.
                </p>
                <p>
                  In order to innovate, TMAC successfully translated biotechnology authorized by the <strong>Korea Research Institute of Bioscience and Biotechnology (KRIBB)</strong>, integrating it with the precision design and manufacturing capabilities of <strong>CMAC Inc.</strong>
                </p>
                <p>
                  We strive to reduce experimental time constraints and reagent volumes. By engineering pristine microfluidic mechanics, we empower laboratories worldwide. We remain committed to continuous innovation for human flourishing and state-of-the-art bioscience.
                </p>
                <p className="text-right font-bold text-slate-900 mt-6">- Team TMAC Co., Ltd. -</p>
              </>
            )}
          </div>
        </div>

        {/* 4. Joint Venture Framework (Direct Image Visual Layout matching the second user picture) */}
        <div className="mb-16">
          
          {/* Header Title strictly matching: "(주)티맥은 한국생명공학연구원(KRIBB) 과 (주)씨맥이 공동 설립한 연구소기업입니다." */}
          <div className="text-center mb-12 px-2">
            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 text-[10px] md:text-xs font-bold rounded-full border border-emerald-100 mb-3 uppercase tracking-wider font-mono">
              Cooperative Venture Model
            </span>
            <h4 className="text-base md:text-xl font-bold text-[#1e3a8a] tracking-tight leading-snug">
              {lang === 'ko' 
                ? '(주)티맥은 한국생명공학연구원(KRIBB) 과 (주)씨맥이 공동 설립한 연구소기업입니다.'
                : '(株)TMAC is a government-designated Research Enterprise jointly established by KRIBB and CMAC.'}
            </h4>
          </div>

          {/* Interactive and high-fidelity representation of the second diagram */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm relative overflow-hidden">
            
            {/* Elegant faint grid background lines for futuristic/scientific vibe */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-50/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.25] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 font-sans">
              
              {/* Left Side: 씨맥 (CMAC) Info Card */}
              <div className="lg:col-span-3 space-y-4">
                <div className="bg-slate-50/80 backdrop-blur-xs border border-slate-200/60 p-5 rounded-2xl relative overflow-hidden transition-all hover:bg-white hover:shadow-md hover:border-sky-300 group duration-300">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0ea5e9]" />
                  <div className="flex items-center gap-2 mb-3 pl-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9] group-hover:scale-110 duration-300" />
                    <h5 className="text-[15px] font-black text-slate-800 tracking-tight">
                      {lang === 'ko' ? '씨맥 (CMAC)' : 'CMAC Inc.'}
                    </h5>
                  </div>
                  <ul className="text-[12.5px] text-slate-600 space-y-3 pl-1">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0ea5e9] font-bold shrink-0">·</span>
                      <span>{lang === 'ko' ? '자본 및 첨단 인프라 출자' : 'Capital & high-tech infrastructure input'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0ea5e9] font-bold shrink-0">·</span>
                      <span>{lang === 'ko' ? 'ET (환경기술) 부문 독자 기술' : 'Proprietary Environmental/Handling tech'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0ea5e9] font-bold shrink-0">·</span>
                      <span>{lang === 'ko' ? '메카트로닉스 시스템 엔지니어링' : 'Mechatronics hardware prototyping'}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Center Column: Interactive Closed Loop Vector Diagram */}
              <div className="lg:col-span-6 flex flex-col items-center">
                <div className="relative w-full max-w-[460px] aspect-[1.1] flex items-center justify-center">
                  
                  {/* Clean scaling SVG structure representing the exact second image setup */}
                  <svg 
                    className="w-full h-full select-none overflow-visible" 
                    viewBox="0 0 400 400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      {/* Premium gradients mapping precisely */}
                      <linearGradient id="vector-grad-left" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#84cc16" />
                      </linearGradient>
                      <linearGradient id="vector-grad-right" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#0f766e" />
                        <stop offset="100%" stopColor="#84cc16" />
                      </linearGradient>
                      <linearGradient id="vector-grad-bottom" x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#0f766e" />
                      </linearGradient>

                      {/* Drop shadows */}
                      <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#0f172a" floodOpacity="0.1" />
                      </filter>
                      <filter id="center-shadow" x="-15%" y="-15%" width="130%" height="130%">
                        <feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="#0f172a" floodOpacity="0.12" />
                      </filter>
                    </defs>

                    {/* Triangle loop link connectors ("▲") */}
                    <g opacity="0.95">
                      {/* Left Edge: MGMT -> MKT */}
                      <line x1="110" y1="280" x2="200" y2="120" stroke="url(#vector-grad-left)" strokeWidth="12" strokeLinecap="round" />
                      {/* Right Edge: R&D -> MKT */}
                      <line x1="290" y1="280" x2="200" y2="120" stroke="url(#vector-grad-right)" strokeWidth="12" strokeLinecap="round" />
                      {/* Bottom Edge: MGMT -> R&D */}
                      <line x1="110" y1="280" x2="290" y2="280" stroke="url(#vector-grad-bottom)" strokeWidth="12" strokeLinecap="round" />
                    </g>

                    {/* Scientific Orbital Rings with Nodes */}
                    <g fill="none" opacity="0.8">
                      {/* MKT (Top) Orbit */}
                      <path d="M 160,85 A 46,46 0 0,1 216,76" stroke="#84cc16" strokeWidth="2" strokeDasharray="3 1" />
                      <circle cx="216" cy="76" r="3.5" fill="#84cc16" />

                      {/* MGMT (Bottom Left) Orbit */}
                      <path d="M 60,280 A 46,46 0 0,1 110,230" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="3 1" />
                      <circle cx="110" cy="230" r="3.5" fill="#0ea5e9" />

                      {/* R&D (Bottom Right) Orbit */}
                      <path d="M 290,330 A 46,46 0 0,1 336,280" stroke="#0f766e" strokeWidth="2" strokeDasharray="3 1" />
                      <circle cx="336" cy="280" r="3.5" fill="#0f766e" />
                    </g>

                    {/* Nodes overlay */}
                    {/* Top Node: 사업화 (MKT) */}
                    <g transform="translate(200, 120)" filter="url(#soft-shadow)" className="cursor-pointer">
                      <circle cx="0" cy="0" r="38" fill="#84cc16" stroke="#ffffff" strokeWidth="3" />
                      <text x="0" y="-2" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="system-ui, sans-serif">
                        사업화
                      </text>
                      <text x="0" y="11" fill="#ffffff" fontSize="8" fontWeight="600" opacity="0.9" textAnchor="middle" fontFamily="monospace">
                        MKT
                      </text>
                    </g>

                    {/* Bottom-Left Node: 사업지원 (MGMT) */}
                    <g transform="translate(110, 280)" filter="url(#soft-shadow)" className="cursor-pointer">
                      <circle cx="0" cy="0" r="38" fill="#0ea5e9" stroke="#ffffff" strokeWidth="3" />
                      <text x="0" y="-2" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="system-ui, sans-serif">
                        사업지원
                      </text>
                      <text x="0" y="11" fill="#ffffff" fontSize="8" fontWeight="600" opacity="0.9" textAnchor="middle" fontFamily="monospace">
                        MGMT
                      </text>
                    </g>

                    {/* Bottom-Right Node: 원천기술 (R&D) */}
                    <g transform="translate(290, 280)" filter="url(#soft-shadow)" className="cursor-pointer">
                      <circle cx="0" cy="0" r="38" fill="#0f766e" stroke="#ffffff" strokeWidth="3" />
                      <text x="0" y="-2" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="system-ui, sans-serif">
                        원천기술
                      </text>
                      <text x="0" y="11" fill="#ffffff" fontSize="8" fontWeight="600" opacity="0.9" textAnchor="middle" fontFamily="monospace">
                        R&D
                      </text>
                    </g>

                    {/* Central Premium TMAC White Badge */}
                    <g transform="translate(200, 215)" filter="url(#center-shadow)">
                      <circle cx="0" cy="0" r="48" fill="#ffffff" stroke="#f1f5f9" strokeWidth="2" />
                      
                      <foreignObject x="-36" y="-36" width="72" height="72">
                        <div className="w-full h-full flex items-center justify-center p-1">
                          <img
                            src={tmacLogo}
                            alt="TMAC Logo"
                            className="w-full h-auto object-contain rounded-full"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </foreignObject>
                    </g>
                  </svg>

                </div>
              </div>

              {/* Right Side: 티맥 (TMAC) & 한국생명공학연구원 (KRIBB) Cards */}
              <div className="lg:col-span-3 space-y-4">
                
                {/* TMAC */}
                <div className="bg-slate-50/80 backdrop-blur-xs border border-slate-200/60 p-5 rounded-2xl relative overflow-hidden transition-all hover:bg-white hover:shadow-md hover:border-lime-400 group duration-300">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#84cc16]" />
                  <div className="flex items-center gap-2 mb-3 pl-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#84cc16]" />
                    <h5 className="text-[15px] font-black text-slate-800 tracking-tight">
                      {lang === 'ko' ? '티맥 (TMAC)' : 'TMAC Co.'}
                    </h5>
                  </div>
                  <ul className="text-[12.5px] text-slate-600 space-y-3 pl-1">
                    <li className="flex items-start gap-2">
                      <span className="text-[#84cc16] font-bold shrink-0">·</span>
                      <span>{lang === 'ko' ? '국가 지정 과학기술 주동형 연구소기업' : 'Government-certified enterprise'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#84cc16] font-bold shrink-0">·</span>
                      <span>{lang === 'ko' ? 'BT 고부가가치 이전 핵심 기술 사업화' : 'BT core technology translation loop'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#84cc16] font-bold shrink-0">·</span>
                      <span>{lang === 'ko' ? '산학연 공동 혁신 신약 개발 거점' : 'Consortium center for new drug R&D'}</span>
                    </li>
                  </ul>
                </div>

                {/* KRIBB */}
                <div className="bg-slate-50/80 backdrop-blur-xs border border-slate-200/60 p-5 rounded-2xl relative overflow-hidden transition-all hover:bg-white hover:shadow-md hover:border-teal-400 group duration-300">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0f766e]" />
                  <div className="flex items-center gap-2 mb-3 pl-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0f766e]" />
                    <h5 className="text-[14px] font-black text-slate-800 tracking-tight leading-none">
                      {lang === 'ko' ? '한국생명공학연구원' : 'KRIBB'}
                    </h5>
                  </div>
                  <ul className="text-[12.5px] text-slate-600 space-y-3 pl-1">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0f766e] font-bold shrink-0">·</span>
                      <span>{lang === 'ko' ? '바이오 원천 핵심 특허 및 기술 사업화 이전' : 'Licensing of state key patents'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0f766e] font-bold shrink-0">·</span>
                      <span>{lang === 'ko' ? '국가 바이오테크 연구 성과 기술 지원' : 'BT infrastructure & development sourcing'}</span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 5. Highlight Statement Section (The middle horizontal dividers from the image) */}
        <div className="border-y border-slate-200 py-10 mb-16 text-center relative px-2">
          <div className="max-w-2xl mx-auto space-y-6">
            <h4 className="text-[14px] md:text-lg font-bold leading-relaxed text-slate-800">
              {lang === 'ko' ? (
                <>
                  <span className="text-[#ea580c] font-extrabold pb-0.5 border-b-2 border-orange-500/20">면역블롯 기반 단백질 분석 기술</span>과{' '}
                  <span className="text-[#ea580c] font-extrabold pb-0.5 border-b-2 border-orange-500/20">분석용 항체 콜렉션 기술</span>을 개발하고 있습니다.
                </>
              ) : (
                'We are developing precision immunoblotting-based protein diagnostics alongside highly validated research antibodies.'
              )}
            </h4>
            <h5 className="text-base md:text-xl font-extrabold leading-snug">
              {lang === 'ko' ? (
                <>
                  <span className="text-emerald-600">지속적인 연구개발과 고객 만족</span>을 바탕으로{' '}
                  <span className="text-emerald-800">바이오 분야의 선도기업</span>이 되도록 노력하겠습니다.
                </>
              ) : (
                <>
                  Based on <span className="text-emerald-600">Continuous R&D & Customer Satisfaction</span>, we strive to be a top pioneer in global life sciences.
                </>
              )}
            </h5>
          </div>
        </div>

        {/* 6. Slogans and Rising Ribbon Arrow Path (Recreating the dynamic bottom panel from source image) */}
        <div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div className="text-center md:text-left">
              <span className="text-[9px] uppercase font-mono bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded font-bold border border-emerald-100">
                Corporate Core Slogan
              </span>
              <h4 className="text-xl md:text-2xl font-extrabold text-slate-900 mt-2 tracking-tight">
                {lang === 'ko' ? '“인류의 행복한 삶을 위한 기업”' : '“An Enterprise for the Happy and Healthy Life of Mankind”'}
              </h4>
            </div>
            
            <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-xs font-semibold text-xs tracking-wide flex items-center gap-1 select-none">
              <Award className="w-4 h-4" />
              <span>{lang === 'ko' ? '21세기 바이오 선도기업' : '21st Century Biotech Pioneer'}</span>
            </div>
          </div>

          {/* Ascending curved green 3D ribbon path matching the upward trend on the uploaded image */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 md:p-12 text-white relative overflow-hidden shadow-md">
            
            {/* Embedded Grid containing circles overlaid alongside the path */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-end pt-8 pb-4">
              
              {/* Bubble 1: 연구개발 / 가치창출 */}
              <div className="relative bg-slate-900/90 border border-slate-800 hover:border-teal-400 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] md:translate-y-4">
                
                {/* Speech bubble indicator / arrow under */}
                <div className="absolute -bottom-2.5 left-1/2 -ml-2.5 w-5 h-5 bg-inherit border-b border-r border-slate-800 rotate-45 hidden md:block" />
                
                {/* Pointer / Badge */}
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-teal-600 text-white font-extrabold text-xs flex items-center justify-center font-mono shadow-md border border-slate-900">
                  CR1
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-teal-950 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-3 shadow-inner">
                    <Zap className="w-5 h-5" />
                  </div>
                  
                  <h6 className="font-extrabold text-slate-100 text-sm md:text-base tracking-tight mb-2">
                    {lang === 'ko' ? '연구개발 가치창출' : 'R&D Value Creation'}
                  </h6>
                  
                  <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                    {lang === 'ko'
                      ? '한국생명공학연구원 원천 기술 상업화로 독보적 연구 효율을 정립합니다.'
                      : 'Commercializing research-proven patents to attain unprecedented analytic efficiency.'}
                  </p>
                </div>

              </div>

              {/* Bubble 2: 고객만족 / 성장동력 */}
              <div className="relative bg-slate-900/90 border border-slate-800 hover:border-emerald-400 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] md:translate-y-[-12px]">
                
                <div className="absolute -bottom-2.5 left-1/2 -ml-2.5 w-5 h-5 bg-inherit border-b border-r border-slate-800 rotate-45 hidden md:block" />
                
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center font-mono shadow-md border border-slate-900">
                  CR2
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3 shadow-inner">
                    <Users className="w-5 h-5" />
                  </div>
                  
                  <h6 className="font-extrabold text-slate-100 text-sm md:text-base tracking-tight mb-2">
                    {lang === 'ko' ? '고객만족 성장동력' : 'Customer Satisfaction'}
                  </h6>
                  
                  <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                    {lang === 'ko'
                      ? '실질적인 시약 대량 절감을 성취하여 연구자 편익과 실험실 비용 혁신을 이끕니다.'
                      : 'Fostering long-term customer empowerment through ultimate reagent cost breakthroughs.'}
                  </p>
                </div>

              </div>

              {/* Bubble 3: 사회공헌 / 지속성장 */}
              <div className="relative bg-slate-900/90 border border-slate-800 hover:border-sky-450 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] md:translate-y-[-28px]">
                
                <div className="absolute -bottom-2.5 left-1/2 -ml-2.5 w-5 h-5 bg-inherit border-b border-r border-slate-800 rotate-45 hidden md:block" />
                
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-sky-600 text-white font-extrabold text-xs flex items-center justify-center font-mono shadow-md border border-slate-900">
                  CR3
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-sky-950 border border-sky-500/20 flex items-center justify-center text-sky-450 mb-3 shadow-inner">
                    <Compass className="w-5 h-5" />
                  </div>
                  
                  <h6 className="font-extrabold text-slate-100 text-sm md:text-base tracking-tight mb-2">
                    {lang === 'ko' ? '사회공헌 지속성장' : 'Sustainable Growth'}
                  </h6>
                  
                  <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                    {lang === 'ko'
                      ? '바이오 자동화 분석 장치 보편화로 인권 보건 향상과 사회 공익 가치를 수호합니다.'
                      : 'Crystallizing global bioscience democratization to establish medical progress and human values.'}
                  </p>
                </div>

              </div>

            </div>

            {/* Simulated 3D Ribbon dynamic arrow overlay at the card very bottom */}
            <div className="absolute bottom-4 left-8 right-8 h-4 bg-gradient-to-r from-teal-500/5 via-emerald-500/30 to-sky-500/40 rounded-full select-none hidden md:flex items-center justify-end pr-2">
              <span className="w-3 h-3 border-t-2 border-r-2 border-emerald-400 rotate-45 transform -translate-y-0.5" />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
