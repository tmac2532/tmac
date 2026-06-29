import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Flame, Cpu, ArrowRight, Zap, RefreshCw, Layers, Home } from 'lucide-react';
import microscopeHeroImage from '../assets/images/microscope_lenses_1782188765192.jpg';

interface InGelTechViewProps {
  lang: 'ko' | 'en';
  setView?: (view: string) => void;
}

export default function InGelTechView({ lang, setView }: InGelTechViewProps) {
  const [activeTab, setActiveTab] = useState<'convenience' | 'reproducible' | 'automation'>('convenience');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigation = (viewName: string) => {
    if (setView) setView(viewName);
    setIsMenuOpen(false);
  };

  const tabsInfo = {
    convenience: {
      titleKo: '분석 편리성 증대 (Enhanced convenience)',
      titleEn: 'Enhanced Analysis Convenience',
      p1Ko: '복잡하고 손이 많이 가던 멤브레인 전사(Transfer) 과정이 100% 생략됩니다. 겔 자체를 특수 고체상과 반응시켜 바로 타겟을 포집하는 원리입니다.',
      p1En: 'The traditional, manual membrane transfer (Blotting) step is entirely eliminated. The target protein is securely immobilized within the native gel matrix.',
      bulletsKo: ['전사 장치 조립 및 밤새 소모되던 대량의 트랜스퍼 완충액 완전 불필요', '필름 감광 가이드 없이 즉시 형광 영상 획득 용이', '수작업 로딩 단계 감소에 따른 안전 사고 위험 차단'],
      bulletsEn: ['No need to assemble transfer cassettes or spend liters of transfer buffers overnight', 'Quick fluorescent signaling allows imaging directly from the gel', 'Fewer manual stages prevent accidental sample drops or physical damage']
    },
    reproducible: {
      titleKo: '높은 재현성 (Maximum reproducibility)',
      titleEn: 'Maximum Analytical Reproducibility',
      p1Ko: '고분자 단백질이나 소분자 펩타이드 전개 시, 멤브레인 기공 크기 제한 및 트랜스퍼 불균일도 때문에 발생하던 "밴드 유실(Blow-through)" 현상이 원천 방지됩니다.',
      p1En: 'Eliminating the blotting step completely resolves blow-through or incomplete transfers typical of small peptides or larger macromolecular proteins.',
      bulletsKo: ['격자 단위 정량 포획으로 시료 로딩 전 구간에 동일 편차 적용', '겔 속 천연 구조 배합 상태에서의 균일 시약 접촉 가능', '실험자 편차(Operator Bias)에 따른 오차 범위를 3.5% 이내로 제어'],
      bulletsEn: ['Intergradient capture anchors protein molecules evenly across all lanes', 'Avoids background hot-spots or membrane-related speckling', 'Constrains operator-bias deviation under an impressive 3.5% coefficient']
    },
    automation: {
      titleKo: '분석 자동화 (Full process automation)',
      titleEn: 'Seamless Workflow Automation',
      p1Ko: '티맥의 특허인 순환 제어방식 CDR 원자 동작 기계와 간편히 연동하여, 로딩 완료된 겔만 장비에 장착하면 워싱부터 타겟 발색까지 프로그램 제어가 가능합니다.',
      p1En: 'Configures seamlessly with TMAC\'s proprietary automated dispensers. Simply place the activated gel in the chamber, select your protocol, and let the device handle it.',
      bulletsKo: ['CDR 제어 솔브 펌프로 초소량 항체 용맥(3ml) 자동 투입 및 순환 회수', '단계별 세척 및 2차 항체 노출 조건 디지털 커스텀 타이머 저장', '다중 어레이 모듈 조합으로 하루 최대 10개 겔 병렬 무인 가동'],
      bulletsEn: ['CDR fluidic valve continuously pumps and retrieves primary antibodies safely', 'Automated digital profile controls wash interchanges throughout the runs', 'Arrayed modules allow unmanned parallel operation of up to 10 gels daily']
    }
  };

  return (
    <div className="w-full bg-white font-sans">
      <div className="relative w-full h-[320px] md:h-[400px] flex flex-col justify-center items-center text-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-slate-950/60 z-10" />
        <img src={microscopeHeroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover transform scale-105" />
        <div className="relative z-20 text-white px-4 pt-16 md:pt-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">{lang === 'ko' ? '혁신적인 분석 정밀도 연출' : 'Exceptional Analytical Precision'}</h2>
          <div className="h-1 w-24 bg-emerald-500 mx-auto mb-4 rounded-full" />
          <p className="text-xs md:text-base text-slate-200 max-w-3xl mx-auto font-light">{lang === 'ko' ? '멤브레인 전사가 필요 없는 독보적 인겔 테크놀로지로 실험 편차를 원천 차단합니다.' : 'Our revolutionary transfer-free In-Gel technology completely avoids standard blotting errors'}</p>
        </div>
      </div>

      <div className="w-full bg-slate-50 border-b border-slate-200 py-3 text-slate-600 select-none">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 flex items-center gap-4 text-xs font-medium">
          <div className="flex items-center gap-2">
            <button onClick={() => setView && setView('home')} className="p-1 hover:text-emerald-600 transition-colors cursor-pointer"><Home className="w-4 h-4" /></button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700 font-semibold px-2 py-1 rounded bg-white border border-slate-200">{lang === 'ko' ? '기술소개' : 'Technology'}</span>
            <span className="text-slate-300">/</span>
            
            {/* 드롭다운 영역 */}
            <div 
              ref={dropdownRef} 
              className="relative inline-block group"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <span className="text-emerald-700 font-bold px-2 py-1 rounded bg-white border border-emerald-200 shadow-3xs cursor-default">
                {lang === 'ko' ? '인겔 웨스턴 블롯' : 'In-Gel Western'}
              </span>
              <div className={`absolute left-0 top-full pt-2 w-44 z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="bg-white border border-slate-200 rounded shadow-md py-1 flex flex-col">
                  <button onClick={() => handleNavigation('overview')} className="text-left px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-emerald-600 cursor-pointer">{lang === 'ko' ? '개요' : 'Overview'}</button>
                  <button onClick={() => handleNavigation('immunoblot')} className="text-left px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-emerald-600 cursor-pointer">{lang === 'ko' ? '면역블롯소개' : 'Immunoblot Intro'}</button>
                  <button onClick={() => handleNavigation('papers')} className="text-left px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-emerald-600 cursor-pointer">{lang === 'ko' ? '관련논문보기' : 'Related Papers'}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 본문 생략 (기존 코드와 동일) */}
      <div className="max-w-5xl mx-auto py-12 px-4 md:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-6 mb-8">
          <span className="text-[10px] font-mono uppercase text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded">{lang === 'ko' ? '기술소개' : 'Technology'}</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 mt-3">{lang === 'ko' ? '인겔 웨스턴 블롯 시스템' : 'In-Gel Western Blot System'}</h2>
        </div>

        <div className="bg-slate-950 text-white rounded-xl p-6 md:p-8 mb-10 shadow-md">
          <p className="text-emerald-400 font-mono text-[11px] font-semibold tracking-wider uppercase">In-Gel Western Blot System</p>
          <h3 className="text-lg md:text-2xl font-extrabold mt-1">{lang === 'ko' ? '멤브레인 전사과정이 필요 없는 웨스턴 블롯' : 'Western Blotting with absolutely zero membrane transfer requirements'}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
            {['convenience', 'reproducible', 'automation'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`p-3 rounded-lg text-center font-bold text-xs transition-all cursor-pointer ${activeTab === tab ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
              >
                {tab === 'convenience' ? '🚀 분석 편리성 증대' : tab === 'reproducible' ? '🛡️ 높은 재현성' : '🤖 분석 자동화'}
              </button>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800">
            <h4 className="text-sm md:text-base font-bold text-slate-100">{lang === 'ko' ? tabsInfo[activeTab].titleKo : tabsInfo[activeTab].titleEn}</h4>
            <p className="text-xs md:text-sm text-slate-300 mt-2 leading-relaxed">{lang === 'ko' ? tabsInfo[activeTab].p1Ko : tabsInfo[activeTab].p1En}</p>
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {(lang === 'ko' ? tabsInfo[activeTab].bulletsKo : tabsInfo[activeTab].bulletsEn).map((bullet, idx) => (
                <li key={idx} className="bg-slate-900/60 p-3 rounded border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
                  <span className="text-emerald-500 font-extrabold">✓</span><span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}