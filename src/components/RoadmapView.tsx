import React from 'react';
import { FlaskConical, Server, Network } from 'lucide-react';

// 상단 배너에 사용될 이미지 import (NoticeView와 동일한 service.png 사용)
import roadmap_image from '../assets/images/roadmap.png';

interface RoadmapViewProps {
  lang: 'ko' | 'en';
}

export default function RoadmapView({ lang }: RoadmapViewProps) {
  // Roadmap milestones list
  const milestones = [
    {
      phase: 'Phase 1',
      titleKo: 'MiRIA 시스템 및 전용 소모품 완성',
      titleEn: 'MiRIA Core & Consumables Packaging',
      period: '2018 - 2021',
      icon: <FlaskConical className="w-5 h-5" />,
      itemsKo: [
        'MIRIA 전용 10-well/15-well Precast tPAGE 완제품 양산 유치',
        '순환식 하이드로 압력 CDR BINDER 기구 개발 완료 및 특허 출원',
        '항체 세척 fluidic 교차 유로 연동 성능 공인 60% 절감 통계 입증'
      ],
      itemsEn: [
        'Constructed standard 10-well/15-well Precast tPAGE lines',
        'Pioneered automated fluid-replacements with patent-granted CDR loops',
        'Certified critical fluidic wash cycles displaying 60%+ dilution cuts'
      ],
      current: false
    },
    {
      phase: 'Phase 2',
      titleKo: '수장식 자동 밸브 장비 및 다중 어레이 양산',
      titleEn: 'Multi-Array & Automatic Valve Scale',
      period: '2022 - 2025',
      icon: <Server className="w-5 h-5" />,
      itemsKo: [
        '수장식 밸브 유로 다중화 어레이 장비(MiRIA-6X) 시제품 출원',
        '단백체 동시 추출 멀티 프로브 팁 카트리지 결합 구조 완성',
        '다중 블롯 분석 모듈 공정 안정성 99.8% 수율 확보'
      ],
      itemsEn: [
        'Filed patent for multi-channel valve array instrument (MiRIA-6X)',
        'Completed integration of multi-probe tip cartridge for proteome extraction',
        'Secured 99.8% production yield for multi-blot analysis modules'
      ],
      current: true
    },
    {
      phase: 'Phase 3',
      titleKo: '진단 플랫폼 허브 구축 및 상용화',
      titleEn: 'Diagnostic Platform Hub & Commercialization',
      period: '2026 -',
      icon: <Network className="w-5 h-5" />,
      itemsKo: [
        '병원 현장 진단(POCT)용 면역블롯 자동화 스캐너 규격 확정',
        '클라우드 기반 바이오 마커 정량 판독 알고리즘 소프트웨어 연동',
        '글로벌 체외진단 의료기기(IVD) 시장 인증 및 상용화 진행'
      ],
      itemsEn: [
        'Finalized specifications for immunoblot automated scanner for POCT',
        'Integrated cloud-based biomarker quantitative reading algorithm software',
        'Proceeding with global IVD market certification and commercialization'
      ],
      current: false
    }
  ];

  const bioMarkets = [
    {
      nameKo: '글로벌 프로테옴 분석 장비',
      nameEn: 'Global Proteome Analysis Instruments',
      percentage: '+ 32%',
      descKo: '면역 블로팅 및 단백체 분석 시장의 자동화 및 고속화를 주도합니다.',
      descEn: 'Leading the automation and acceleration of the immunoblotting and proteomics market.'
    },
    {
      nameKo: '현장진단(POCT) 면역진단',
      nameEn: 'POCT Immunodiagnostics',
      percentage: '+ 45%',
      descKo: '병원 및 연구실 현장에서 즉시 다중 분석이 가능한 시스템을 제공합니다.',
      descEn: 'Providing systems for immediate multi-analysis in hospitals and laboratories.'
    },
    {
      nameKo: '맞춤형 진단 소모품',
      nameEn: 'Custom Diagnostic Consumables',
      percentage: '+ 28%',
      descKo: '고정밀 분석을 위한 전용 프리캐스트 겔 및 카트리지 공급을 확대합니다.',
      descEn: 'Expanding the supply of dedicated precast gels and cartridges for high-precision analysis.'
    }
  ];

  return (
    <div className="w-full bg-white font-sans text-slate-800 min-h-screen">
      
      {/* Hero Dynamic Banner (상단 이미지 적용) */}
      <div className="relative w-full h-[320px] md:h-[380px] flex flex-col justify-center items-center text-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-slate-950/60 z-10" />
        <img
          src={roadmap_image}
          alt="TMAC Developmental Roadmap"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 text-white px-4 pt-16 md:pt-24 select-none max-w-4xl space-y-4 mx-auto w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {lang === 'ko' ? '21세기 바이오 선도기업' : 'TMAC Roadmap'}
          </h2>
          <div className="h-1 w-24 bg-emerald-500 mx-auto rounded-full" />
          <p className="text-xs md:text-base text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            {lang === 'ko'
              ? '면역블롯 기반 단백체 분석 기술과 분석용 항체 콜렉션 기술 개발'
              : 'Discover TMAC\'s innovative technology development and global commercialization plans.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 md:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono tracking-widest uppercase bg-emerald-50 text-emerald-600 border border-emerald-200 px-3 py-1 rounded-full font-bold">
            {lang === 'ko' ? '연구개발 여정' : 'R&D Journey'}
          </span>
          <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-6 mb-4">
            {lang === 'ko' ? '기술 혁신 및 사업화 계획' : 'Technology Innovation & Business Plan'}
          </h3>
          <p className="text-xs md:text-sm text-slate-600 font-light leading-relaxed">
            {lang === 'ko'
              ? '기초 원천 기술 연구부터 시스템 자동화, 그리고 글로벌 진단 플랫폼 완성까지 이어지는 티맥의 로드맵입니다.'
              : 'This is TMAC\'s roadmap, spanning from basic source technology research to system automation and the completion of a global diagnostic platform.'}
          </p>
        </div>

        {/* Roadmap milestones vertical line flow (배경 흰색에 맞춰 테두리 및 텍스트 톤 조정) */}
        <div className="relative max-w-4xl mx-auto border-l-2 border-slate-200 ml-6 md:ml-36 space-y-12 pb-16">
          
          {milestones.map((step, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Circle Marker / Icon */}
              <div className={`absolute -left-6 top-0 w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                step.current 
                  ? 'bg-emerald-600 border-emerald-200 text-white scale-110 shadow-lg shadow-emerald-600/20' 
                  : 'bg-white border-slate-200 text-slate-500 group-hover:border-emerald-600 group-hover:text-emerald-600'
              }`}>
                {step.icon}
              </div>

              {/* Main milestone card box */}
              <div className={`p-6 md:p-8 rounded-2xl border transition-all ${
                step.current 
                  ? 'bg-emerald-50/30 border-emerald-500/40 shadow-xl shadow-emerald-50/50' 
                  : 'bg-white border-slate-100 shadow-sm hover:border-slate-200'
              }`}>
                
                {/* Header Phase indicator */}
                <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                  <div>
                    <span className={`text-[10px] font-mono tracking-wider uppercase font-extrabold px-2.5 py-0.5 rounded ${
                      step.current ? 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/20' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {step.phase}
                    </span>
                    <h4 className="text-base md:text-lg font-bold tracking-tight text-slate-900 mt-2">
                      {lang === 'ko' ? step.titleKo : step.titleEn}
                    </h4>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg font-extrabold tracking-wide">
                    {step.period}
                  </span>
                </div>

                {/* Sub-items bullet list */}
                <ul className="space-y-2.5 text-xs md:text-sm font-light text-slate-650">
                  {(lang === 'ko' ? step.itemsKo : step.itemsEn).map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-emerald-600 mt-0.5 flex-shrink-0">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Status active badge */}
                {step.current && (
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[10px] font-mono text-emerald-700 uppercase tracking-widest animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    {lang === 'ko' ? '현재 진행 중인 프로젝트 단계' : 'Currently Active Phase'}
                  </div>
                )}
              </div>

            </div>
          ))}

        </div>

        {/* Bio market index cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {bioMarkets.map((market, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between h-full shadow-sm hover:shadow transition-all">
              <div>
                <div className="flex justify-between items-center gap-4">
                  <h5 className="font-bold text-[11px] md:text-xs text-slate-800 leading-tight">
                    {lang === 'ko' ? market.nameKo : market.nameEn}
                  </h5>
                  <span className="font-mono text-emerald-700 font-extrabold text-xs md:text-sm bg-emerald-50 px-2 py-0.5 rounded leading-none border border-emerald-100">
                    {market.percentage}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                  {lang === 'ko' ? market.descKo : market.descEn}
                </p>
              </div>
              <span className="text-[9px] uppercase tracking-wider font-mono text-slate-400 text-left mt-4 leading-none block">
                Bio-Market Index
              </span>
            </div>
          ))}
        </div>

        {/* Core capability summary statement */}
        <div className="border-t border-slate-100 pt-6 mt-8 text-center text-xs leading-relaxed text-slate-500">
          <p>
            💡 {lang === 'ko'
              ? '(주)티맥은 소량 단백질 세척용 소모품의 꾸준한 B2B 공급 회전을 발판으로 삼아, 2026년부터는 자동 병원 종합 면역진단 가동 사업 영역으로 본격 확장을 목표합니다.'
              : 'TMAC aims to establish continuous recurring software & scanner deployments within hospitals beginning in 2026, building upon our B2B consumables revenue.'}
          </p>
        </div>

      </div>
    </div>
  );
}