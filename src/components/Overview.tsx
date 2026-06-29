import React, { useState, useRef, useEffect } from 'react';
import { Home } from 'lucide-react';
import microscopeHeroImage from '../assets/images/microscope_lenses_1782188765192.jpg';

interface OverviewProps {
  lang: 'ko' | 'en';
  setView?: (view: string) => void;
}

export default function Overview({ lang, setView }: OverviewProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // 드롭다운 메뉴 클릭 시 이동 경로 수정 적용
  const handleNavigation = (viewName: string) => {
    if (setView) {
      setView(viewName);
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full bg-white font-sans text-slate-800 pb-20">
      
      {/* 상단 풀스크린 히어로 배너 */}
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
            {lang === 'ko' ? '기술소개 개요' : 'Technology Overview'}
          </h2>
          <div className="h-1 w-24 bg-emerald-500 mx-auto mb-4 rounded-full" />
          <p className="text-xs md:text-base text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            {lang === 'ko'
              ? '지속적인 연구개발과 과학 혁신을 바탕으로 바이오 분야의 선도 기업이 되도록 노력하겠습니다.'
              : 'We strive to be a leading company in the bio-industry based on continuous R&D and scientific innovation.'}
          </p>
        </div>
      </div>

      {/* 서브 내비게이션바 */}
      <div className="w-full bg-slate-50 border-b border-slate-200 py-3 text-slate-600 select-none">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-4 text-xs font-medium">
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

            {/* 드롭다운 메뉴 (마우스 오버 제어) */}
            <div 
              ref={dropdownRef} 
              className="relative inline-block group"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <span className="text-emerald-700 font-bold px-2 py-1 rounded bg-white border border-emerald-200 flex items-center gap-1 shadow-3xs cursor-pointer">
                {lang === 'ko' ? '개요' : 'Overview'}
              </span>
              
              {isMenuOpen && (
                <div className="absolute left-0 top-full pt-2 w-44 z-50">
                  <div className="bg-white border border-slate-200 rounded shadow-md py-1 flex flex-col">
                    <button 
                      onClick={() => handleNavigation('ingel')} 
                      className="text-left px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-emerald-600 cursor-pointer"
                    >
                      {lang === 'ko' ? '인겔 웨스턴 블롯' : 'In-Gel Western'}
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
        </div>
      </div>

      {/* 본문 컨텐츠 */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="border-b border-slate-200 pb-6 mb-12">
          <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">{lang === 'ko' ? '개요' : 'Overview'}</h2>
        </div>

        <section className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 text-center mb-4">{lang === 'ko' ? '포스트 유전체 시대의 헬스케어' : 'Healthcare in the Post-Genome Era'}</h3>
          <p className="text-sm text-slate-600 text-center max-w-4xl mx-auto leading-relaxed mb-10">
            {lang === 'ko' 
              ? '유전체 프로젝트는 인간과 여러 생명체의 유전체 정보를 제공하였고 단백체학은 포스트 게놈 시대의 주요 연구 분야이며, 질병의 진단 및 신규 치료제 개발 등 헬스케어 분야 발전의 새로운 패러다임을 만들고 있습니다.' 
              : 'The genome project provided genomic information of humans and various living organisms...'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="bg-emerald-50 border-2 border-emerald-500 rounded-3xl p-6 text-center shadow-sm">
              <div className="text-base font-extrabold text-emerald-800 mb-4">{lang === 'ko' ? '유전체' : 'Genome'}</div>
              <ul className="text-xs text-slate-600 space-y-1"><li>인간 유전체 프로젝트</li><li>20,000개 유전체</li></ul>
            </div>
            <div className="bg-green-50 border-2 border-green-500 rounded-3xl p-6 text-center shadow-sm">
              <div className="text-base font-extrabold text-green-800 mb-4">{lang === 'ko' ? '단백체' : 'Proteome'}</div>
              <ul className="text-xs text-slate-600 space-y-1"><li>82,000개 단백체</li><li>High Dynamic Range</li></ul>
            </div>
            <div className="bg-cyan-50 border-2 border-cyan-500 rounded-3xl p-6 text-center shadow-sm">
              <div className="text-base font-extrabold text-cyan-800 mb-4">{lang === 'ko' ? '항체' : 'Antibody'}</div>
              <ul className="text-xs text-slate-600 space-y-1"><li>신규 항체 개발</li><li>항체 기반 분석</li></ul>
            </div>
            <div className="bg-indigo-50 border-2 border-indigo-500 rounded-3xl p-6 text-center shadow-sm">
              <div className="text-base font-extrabold text-indigo-800 mb-4">{lang === 'ko' ? '헬스케어' : 'Healthcare'}</div>
              <ul className="text-xs text-slate-600 space-y-1"><li>현장진단 / POCT</li><li>바이오마커</li></ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mb-16">
          <h3 className="text-lg font-bold text-slate-900 mb-4">{lang === 'ko' ? '항체 기반 단백체 분석의 배경' : 'Background of Antibody-Based Proteome Analysis'}</h3>
          <p className="text-xs text-slate-600 leading-relaxed space-y-4">
            {lang === 'ko' ? (
              <>
                <span>단백체학은 다양한 분석 기술을 기반으로 하며, 단백체의 정량적 분석, 전사 후 수식 분석(Post translational modification), 단백간의 상호 작용 단백체들의 구조적인 특성까지 연구하는 분야로 그 영역이 확장되고 있다.</span>
                <span>그러나 단백체학의 복잡성(Complexity)과 생물 내에 존재하는 단백체 농도의 광범위함(wide dynamic range in cellular concentration) 때문에 기존의 겔 기반 단백체 분석법(gel based proteomic methods) 혹은 질량 분석 기반 단백체 분석법(mass spectrometry based proteomic methods)으로는 전체 단백체들의 모습을 보는 데 한계가 있다.</span>
                <span>항체 기반 단백체 분석법은 완전 항체 반응의 특이性和 민감도를 이용하여 원하는 단백체를 분석하는 방법이다. 생체 내 단백체에 대응하는 대용량 항체 콜렉션을 확보할 경우 분석을 원하는 단백체를 선별 분석하기 위한 가장 효율적인 방법이 될 수 있다.</span>
              </>
            ) : (
              'Proteomics is expanding its area to quantitative analysis of proteomes...'
            )}
          </p>
        </section>

        <section className="text-center">
          <div className="inline-block bg-emerald-950 text-white font-bold py-3 px-8 rounded-xl shadow-md text-sm">
            {lang === 'ko' ? '항체 개발 및 MiRIA를 통한 질병 진단 및 신약 스크리닝 서비스 가능' : 'Antibody collection and new drug screening services available'}
          </div>
        </section>
      </div>
    </div>
  );
}