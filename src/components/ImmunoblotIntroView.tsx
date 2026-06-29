import React, { useState } from 'react';
import { HelpCircle, Layers, Settings, CheckCircle2, TrendingDown, BookOpen, Clock, DollarSign, Home } from 'lucide-react';
import microscopeHeroImage from '../assets/images/microscope_lenses_1782188765192.jpg';

interface ImmunoblotIntroViewProps {
  lang: 'ko' | 'en';
  setView?: (view: string) => void;
}

export default function ImmunoblotIntroView({ lang, setView }: ImmunoblotIntroViewProps) {
  const [activeTab, setActiveTab] = useState<'basics' | 'steps' | 'cdr'>('basics');

  // Southern, Northern, Western data
  const blotTechnologies = [
    {
      type: 'Southern Blotting',
      target: 'DNA',
      probe: 'Complementary DNA / RNA sequence',
      descKo: '1975년 에드윈 서던(Edwin Southern)에 의해 고안된 기술로, 제한 효소로 절단된 DNA 파편을 겔 상에서 분리 후 멤브레인에 옮겨 특정 특정 유전자 서열을 검출합니다.',
      descEn: 'Developed by Edwin Southern in 1975, DNA fragments parsed by restriction enzymes are blotted into membrane layers to analyze targeted gene profiles.',
      color: 'border-blue-500 bg-blue-50/20 text-blue-700'
    },
    {
      type: 'Northern Blotting',
      target: 'RNA',
      probe: 'Labeled Oligonucleotides / Probe',
      descKo: '서던 블롯의 원리를 응용해 특정 세포나 조직 내의 mRNA 발현 패턴 및 전사량을 분석하여, 특정 조건에서의 유전자 활성도 조작을 정량 분석하는데 쓰입니다.',
      descEn: 'An adaptation of DNA hybridization, RNA patterns are investigated to map gene expression velocities, transcript sizes, and cellular reaction states.',
      color: 'border-purple-500 bg-purple-50/20 text-purple-700'
    },
    {
      type: 'Western Blotting',
      target: 'Protein (단백질)',
      probe: 'Monoclonal / Polyclonal Antibody',
      descKo: '겔 상에 분리 정체된 전개 단백질을 전사 후, 1차 및 2차 면역글로불린 항체의 특이적 결합력을 이용하여 특정 단백질 분자의 정밀 기공 검출 및 크기를 추론합니다.',
      descEn: 'Proteins on SDS-PAGE grids are blotted and visualized via primary/secondary high-affinity antigen-antibody linkages, tracking specific molecular weights.',
      color: 'border-emerald-500 bg-emerald-50/20 text-emerald-700 font-bold'
    }
  ];

  const standardSteps = [
    {
      step: '01',
      titleKo: '전기영동 (Electrophoresis)',
      titleEn: 'Gel Separation',
      descKo: '전류를 가해 전하를 띤 단백질 혼합 분자를 분자량 분포에 맞추어 겔 격자 내에서 분주합니다.',
      descEn: 'Applies voltage grid to drive molecular distribution inside polymeric acrylamide matrix nodes.'
    },
    {
      step: '02',
      titleKo: '멤브레인 샌드위치 전사 (Transfer)',
      titleEn: 'Membrane Transfer',
      descKo: '겔 내부의 단백질 분자를 지지체 멤브레인(Nitrocellulose 또는 PVDF) 표면층으로 습식 강제 유도합니다.',
      descEn: 'Forces protein species outward from gel locks to PVDF/NC support sheets electro-statically.'
    },
    {
      step: '03',
      titleKo: '항체 결합 희석 반응 (Antibody Incubation)',
      titleEn: 'Antibody Incubation',
      descKo: '기공을 소량 단백질 세척 완충액(BSA 등)으로 브로킹한 뒤 타겟 단백질에 밀착하는 특이 항체반응을 가동합니다.',
      descEn: 'Blocks unreacted membrane spaces, then applies targeted primary/secondary antibody dilutions.'
    },
    {
      step: '04',
      titleKo: '화학 발광 이미징 분석 (Imaging Detection)',
      titleEn: 'Fluorescent Detection',
      descKo: '효소 연동 반응(ECL)이나 형광 광학을 사용해 특정 표식 파장대의 검출 시그널을 비디오 밴드 이미지로 획득합니다.',
      descEn: 'Triggers ECL chemiluminescence or laser scan to record luminous band signals.'
    }
  ];

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
            {lang === 'ko' ? '지속 가능한 생명공학 혁신' : 'Sustainable Biotech Innovations'}
          </h2>
          <div className="h-1 w-24 bg-emerald-500 mx-auto mb-4 rounded-full" />
          <p className="text-xs md:text-base text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            {lang === 'ko'
              ? '전통 분석 프로토콜의 한계를 극복하고 연구 효용 가치를 혁신하는 면역블롯 솔루션'
              : 'Empowering core biochemistry workflows by shattering limits of traditional protocols'}
          </p>
        </div>
      </div>

      {/* Sub-Navigation Breadcrumb (Consistent Design under Banner) */}
      <div className="w-full bg-slate-50 border-b border-slate-200 py-3 text-slate-600 select-none">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-4 text-xs font-medium">
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

            <div className="relative inline-block">
              <span className="text-emerald-700 font-bold px-2 py-1 rounded bg-white border border-emerald-200 flex items-center gap-1 shadow-3xs">
                {lang === 'ko' ? '면역 블롯 소개' : 'Blotting Intro'}
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

      <div className="max-w-4xl mx-auto py-12 px-4 md:px-6 lg:px-8">
        
        {/* Header Title Grid */}
        <div className="border-b border-slate-200 pb-6 mb-8 text-center md:text-left">
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded">
            {lang === 'ko' ? '기술소개' : 'Technology'}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 mt-3 tracking-tight">
            {lang === 'ko' ? '면역 블롯 소개' : 'Introduction to Immunoblotting'}
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed">
            {lang === 'ko'
              ? '생명공학 연구의 핵심, 단백질 및 유전자 분석 기술의 기본 메커니즘과 그 한계를 공유합니다.'
              : 'Understanding basic molecular analysis principles, core pitfalls, and TMAC’s high-velocity solutions.'}
          </p>
        </div>

        {/* Dynamic Nav Tabs */}
        <div className="flex border-b border-slate-200 mb-8 overflow-x-auto space-x-6">
          <button
            onClick={() => setActiveTab('basics')}
            className={`pb-3 font-bold text-xs md:text-sm whitespace-nowrap cursor-pointer transition-colors relative ${
              activeTab === 'basics' ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {lang === 'ko' ? '1. 블로팅 기술의 기초' : '1. Blotting Essentials'}
            {activeTab === 'basics' && <span className="absolute bottom-0 left-0 w-full h-[3px] bg-emerald-600 rounded"></span>}
          </button>
          
          <button
            onClick={() => setActiveTab('steps')}
            className={`pb-3 font-bold text-xs md:text-sm whitespace-nowrap cursor-pointer transition-colors relative ${
              activeTab === 'steps' ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {lang === 'ko' ? '2. 전통 수작업 프로토콜' : '2. Classical Protocol'}
            {activeTab === 'steps' && <span className="absolute bottom-0 left-0 w-full h-[3px] bg-emerald-600 rounded"></span>}
          </button>

          <button
            onClick={() => setActiveTab('cdr')}
            className={`pb-3 font-bold text-xs md:text-sm whitespace-nowrap cursor-pointer transition-colors relative ${
              activeTab === 'cdr' ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {lang === 'ko' ? '3. CDR 원리를 통한 혁신 일괄' : '3. CDR Microfluidics'}
            {activeTab === 'cdr' && <span className="absolute bottom-0 left-0 w-full h-[3px] bg-emerald-600 rounded"></span>}
          </button>
        </div>

        {/* Tab 1: Blotting Basics */}
        {activeTab === 'basics' && (
          <div className="space-y-8 animate-fade-in">
            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100 flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-950 leading-relaxed font-semibold">
                {lang === 'ko'
                  ? '블로팅(Blotting) 공정이란 배양 추출물에서 원하는 표적 뉴클레오타이드나 아미노산 체인을 검출 지지체 표면에 분리 고정시켜, 가시 측정하는 물리화학 프로덕션 연구과정입니다.'
                  : 'Blotting immobilizes gel-disposed nucleic acid sequences or protein arrays onto highly stable matrix membranes for fluorescent diagnostic analysis.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blotTechnologies.map((blot, idx) => (
                <div key={idx} className={`border-t-4 rounded-b-xl p-5 border shadow-3xs flex flex-col justify-between ${blot.color}`}>
                  <div>
                    <h4 className="font-extrabold text-sm font-mono">{blot.type}</h4>
                    <div className="my-2.5 space-y-1 text-[11px] text-slate-500 font-medium">
                      <p>🧬 Target: <span className="text-slate-800 font-bold">{blot.target}</span></p>
                      <p>🧪 Probe: <span className="text-slate-800 font-bold font-mono">{blot.probe}</span></p>
                    </div>
                    <p className="text-xs text-slate-650 leading-relaxed pt-2 border-t border-slate-100">
                      {lang === 'ko' ? blot.descKo : blot.descEn}
                    </p>
                  </div>
                  <span className="text-[9px] uppercase tracking-wider font-mono text-slate-400 text-right mt-4 leading-none block">
                    Diagnostic Standard
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Classical Steps and Problems */}
        {activeTab === 'steps' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {standardSteps.map((step, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-150 p-4 rounded-lg relative shadow-3xs text-center md:text-left">
                  <span className="text-2xl font-mono font-extrabold text-slate-300 absolute top-2 right-3">
                    {step.step}
                  </span>
                  <h4 className="font-bold text-xs text-slate-900 border-b border-slate-100 pb-2 mb-2 pr-6 leading-tight">
                    {lang === 'ko' ? step.titleKo : step.titleEn}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    {lang === 'ko' ? step.descKo : step.descEn}
                  </p>
                </div>
              ))}
            </div>

            {/* Classical Problems Block (Recreates Traditional blotting pitfalls of Image 8) */}
            <div className="border border-red-200 bg-red-50/15 p-6 rounded-xl">
              <h4 className="text-sm font-extrabold text-red-950 flex items-center gap-1.5 border-b border-red-50 pb-3 mb-4">
                <TrendingDown className="w-5 h-5 text-red-600 animate-pulse" />
                {lang === 'ko' ? '전통적인 면역 블롯의 치명적 문제점' : 'Critical Bottlenecks of Classical Blotting Protocols'}
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-650 leading-relaxed leading-snug">
                <div className="bg-white p-3.5 rounded border border-red-100 shadow-3xs">
                  <span className="font-bold text-red-700 block mb-1">• {lang === 'ko' ? '수작업 위주 설계' : 'Manual Intensity'}</span>
                  <p className="text-slate-500 leading-normal text-[11px]">
                    {lang === 'ko' ? '세척액 갈아주기, 진탕 세이킹 동작을 12회 이상 직원이 손수 교대 처리하여 분석 효율 극도로 낮음' : 'Operators must perform 12+ manual fluid changes and shaking rotations, lowering labs throughput.'}
                  </p>
                </div>
                <div className="bg-white p-3.5 rounded border border-red-100 shadow-3xs">
                  <span className="font-bold text-red-700 block mb-1">• {lang === 'ko' ? '장시간 소요 (24h+)' : 'Extremely Long Steps'}</span>
                  <p className="text-slate-500 leading-normal text-[11px]">
                    {lang === 'ko' ? '일차 항체 희석액의 느린 결합력 탓에 통상 4°C 리프리저레이터 냉장 보관 상태로 밤새 가동이 기본' : 'Sluggish primary antibody binding forces overnight refrigeration cycles, prolonging results.'}</p>
                </div>
                <div className="bg-white p-3.5 rounded border border-red-100 shadow-3xs">
                  <span className="font-bold text-red-700 block mb-1">• {lang === 'ko' ? '고가 항체 대량 낭비' : 'Expensive Reagents Waste'}</span>
                  <p className="text-slate-500 leading-normal text-[11px]">
                    {lang === 'ko' ? '멤브레인 트레이 전구간 침지를 위해 1회당 10ml 이상의 값비싼 바이오 항체 시약액 투입 낭비 봉착' : 'Tray immersion requires at least 10ml of primary antibody solution, inflating project budgets.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: CDR Innovation (Recreates the CDR mechanical resolution of Image 8) */}
        {activeTab === 'cdr' && (
          <div className="space-y-8 animate-fade-in text-slate-800">
            
            {/* Slogan and details */}
            <div className="bg-emerald-950 text-white rounded-xl p-6 md:p-8 relative overflow-hidden">
              <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 bg-emerald-900/60 px-2 py-0.5 rounded font-bold">
                TMAC Patented Mechanism
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold mt-3 tracking-tight">
                {lang === 'ko' ? 'CDR (Cyclic Draining and Replenishing) 가속 기구 원리' : 'Cyclic Draining and Replenishing (CDR) Microfluidics'}
              </h3>
              <p className="text-xs md:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
                {lang === 'ko'
                  ? '티맥이 독자 발명한 CDR 기술은 소량의 유체를 겔/카세트 표면에 가변 고속 압력 노즐로 지속적으로 노출 및 회수 순환 시켜, 시약 소모를 70% 줄이고 워싱 효율을 극대화합니다.'
                  : 'The patented CDR mechanism dynamically pumps small liquid segments over the gel matrix using negative-pressure loops, accelerating antibody capture rates while saving valuable reagents.'}
              </p>
            </div>

            {/* CDR Metrics vs Traditional Grid (Infographic) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Traditional Metrics Card */}
              <div className="border border-slate-200 p-5 rounded-xl bg-slate-50">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-650 flex items-center gap-1.5 mb-4">
                  <Clock className="w-4 h-4 text-slate-400" />
                  {lang === 'ko' ? '기존 수작업 위주 프로토콜 소모량' : 'Conventional Manual Costing'}
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-xs font-semibold text-slate-600">{lang === 'ko' ? '필요 항체 완충용량' : 'Primary Buffer Volume'}</span>
                    <span className="text-sm font-extrabold text-slate-900 font-mono">~ 10.0 mL</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-xs font-semibold text-slate-600">{lang === 'ko' ? '세척용 세이킹 완충액' : 'Sufficient wash fluids'}</span>
                    <span className="text-sm font-extrabold text-slate-900 font-mono">~ 120.0 mL</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-xs font-semibold text-slate-600">{lang === 'ko' ? '평균 소요 반응시간' : 'Average Binding Duration'}</span>
                    <span className="text-sm font-extrabold text-red-650 font-mono">16.5 Hrs (Overnight)</span>
                  </div>
                </div>
              </div>

              {/* TMAC CDR Optimizer Card */}
              <div className="border border-emerald-300 p-5 rounded-xl bg-emerald-50/50">
                <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {lang === 'ko' ? '티맥 CDR 자동화 원리 접목 시' : 'TMAC CDR Savings Calculator'}
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
                    <span className="text-xs font-bold text-emerald-900">{lang === 'ko' ? '필요 항체 완충용량' : 'Primary Buffer Volume'}</span>
                    <span className="text-sm font-extrabold text-emerald-700 font-mono flex items-center gap-1.5">
                      ~ 3.0 mL
                      <span className="text-[10px] font-bold text-emerald-600 font-sans">(- 70%)</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
                    <span className="text-xs font-bold text-emerald-900">{lang === 'ko' ? '세척용 세이킹 완충액' : 'Sufficient wash fluids'}</span>
                    <span className="text-sm font-extrabold text-emerald-700 font-mono flex items-center gap-1.5">
                      ~ 20.0 mL
                      <span className="text-[10px] font-bold text-emerald-600 font-sans">(- 83%)</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
                    <span className="text-xs font-bold text-emerald-900">{lang === 'ko' ? '평균 소요 반응시간' : 'Average Binding Duration'}</span>
                    <span className="text-sm font-extrabold text-emerald-700 font-mono flex items-center gap-1.5">
                      ~ 45 Mins
                      <span className="text-[10px] font-bold text-emerald-600 font-sans">(- 95%)</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* CDR Visual explanation */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs text-xs md:text-sm text-slate-650 flex flex-col md:flex-row gap-4 items-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-700 text-lg font-bold font-mono">
                CDR
              </div>
              <div>
                <h5 className="font-bold text-slate-900 font-sans leading-snug">
                  {lang === 'ko' ? '가변 밀착 제어압에 가동하는 전용 미세 노즐 헤드' : 'Continuous fluid replacement with smart microfluidic pumps'}
                </h5>
                <p className="text-[11px] text-slate-500 leading-relaxed mt-1.5">
                  {lang === 'ko'
                    ? '용기 바닥에서 항체가 정체해 일어나는 결합 속도 침강 현상을 가동 순환 펌프가 완전 해결해 줍니다. 일정한 교반 압력 흐름이 단백질 타겟 시그널을 입체적으로 가공합니다.'
                    : 'Solves static antibody stagnation inside normal containers via constant physical replenshments. Active pumping maximizes dynamic molecular interface collisions, raising band signals.'}
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
