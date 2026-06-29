import React, { useState, useRef, useEffect } from 'react';
import { PAPERS, Paper } from '../data/tmacData';
import { Eye, Download, Play, X, Check, FileText, Home } from 'lucide-react';
import microscopeHeroImage from '../assets/images/microscope_lenses_1782188765192.jpg'; // 참조한 이미지

interface PapersViewProps {
  lang: 'ko' | 'en';
  selectedPaperId?: number | null;
  onClearSelectedPaper?: () => void;
  setView?: (view: string) => void;
}

export default function PapersView({ lang, selectedPaperId, onClearSelectedPaper, setView }: PapersViewProps) {
  const [activePaper, setActivePaper] = useState<Paper | null>(null);
  const [downloading, setDownloading] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // 드롭다운 메뉴 상태
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 페이지 이동 함수
  const handleNavigation = (viewName: string) => {
    if (setView) setView(viewName);
    setIsMenuOpen(false);
  };

  // 외부(홈 위젯 등)에서 선택된 논문이 있을 경우 모달 열기
  useEffect(() => {
    if (selectedPaperId) {
      const p = PAPERS.find(item => item.id === selectedPaperId);
      if (p) {
        setActivePaper(p);
        setIsPlayingVideo(false);
      }
    }
  }, [selectedPaperId]);

  const handleClose = () => {
    setActivePaper(null);
    setIsPlayingVideo(false);
    onClearSelectedPaper?.();
  };

  const triggerDownload = (id: string) => {
    setDownloading(id);
    setDownloadProgress(0);
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloading(null);
            setDownloadSuccess(true);
            setTimeout(() => setDownloadSuccess(false), 3000);
          }, 350);
          return 100;
        }
        return prev + 25;
      });
    }, 200);
  };

  return (
    <div className="w-full bg-white font-sans">
      
      {/* [참조: InGelTechView] 상단 히어로 배너 섹션 */}
      <div className="relative w-full h-[320px] md:h-[400px] flex flex-col justify-center items-center text-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-slate-950/60 z-10" />
        <img
          src={microscopeHeroImage}
          alt="Technical Research"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 text-white px-4 pt-16 md:pt-24 select-none">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {lang === 'ko' ? '기술연구 및 학술성과' : 'Exceptional Research & Results'}
          </h2>
          <div className="h-1 w-24 bg-emerald-500 mx-auto mb-4 rounded-full" />
          <p className="text-xs md:text-base text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            {lang === 'ko'
              ? '검증된 논문과 기술 자료를 통해 티맥의 독보적인 분석 정밀도를 입증합니다.'
              : 'Proving our superior analytical precision through validated publications and technical references.'}
          </p>
        </div>
      </div>

      {/* [참조: InGelTechView] 서브 내비게이션 브레드크럼 */}
      <div className="w-full bg-slate-50 border-b border-slate-200 py-3 text-slate-600 select-none">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-4 text-xs font-medium">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavigation('home')}
              className="p-1 rounded-sm text-slate-500 hover:text-emerald-600 transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4" />
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700 font-semibold px-2 py-1 rounded bg-white border border-slate-200">
              {lang === 'ko' ? '기술연구' : 'Research'}
            </span>
            <span className="text-slate-300">/</span>

            {/* 드롭다운 메뉴 */}
            <div 
              ref={dropdownRef}
              className="relative inline-block"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <span className="text-emerald-700 font-bold px-2 py-1 rounded bg-white border border-emerald-200 shadow-3xs cursor-pointer">
                {lang === 'ko' ? '관련논문보기' : 'Related Papers'}
              </span>
              
              {isMenuOpen && (
                <div className="absolute left-0 top-full pt-2 w-44 z-50">
                  <div className="bg-white border border-slate-200 rounded shadow-md py-1 flex flex-col">
                    <button onClick={() => handleNavigation('overview')} className="text-left px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-emerald-600 cursor-pointer">{lang === 'ko' ? '개요' : 'Overview'}</button>
                    <button onClick={() => handleNavigation('ingel')} className="text-left px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-emerald-600 cursor-pointer">{lang === 'ko' ? '인겔 웨스턴 블롯' : 'In-Gel Western'}</button>
                    <button onClick={() => handleNavigation('immunoblot')} className="text-left px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-emerald-600 cursor-pointer">{lang === 'ko' ? '면역블롯소개' : 'Immunoblot Intro'}</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 본문 콘텐츠 */}
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-6 lg:px-8">
        <div className="border-b border-slate-100 pb-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 tracking-tight">
            {lang === 'ko' ? '관련 논문 및 홍보 동영상' : 'Research Publications & Videos'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAPERS.map((paper) => (
            <div 
              key={paper.id} 
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs hover:shadow-lg hover:border-emerald-500 transition-all cursor-pointer flex flex-col justify-between group" 
              onClick={() => { setActivePaper(paper); setIsPlayingVideo(false); }}
            >
              <div className="h-44 bg-slate-100 overflow-hidden relative border-b border-slate-100">
                {paper.imageUrl ? (
                  <img src={paper.imageUrl} alt="Paper" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FileText className="w-12 h-12 text-slate-300" />
                  </div>
                )}
                {paper.youtubeUrl && (
                  <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
                    <span>{paper.author || 'Tmac Research'}</span>
                    <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{paper.views?.toLocaleString() || 0}</span>
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-950 line-clamp-2 group-hover:text-emerald-700 transition-colors mb-2">
                    {lang === 'ko' ? paper.titleKo : paper.titleEn}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {lang === 'ko' ? paper.summaryKo : paper.summaryEn}
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 mt-4 flex items-center justify-between text-xs font-bold text-emerald-600">
                  <span className="text-slate-400 font-mono">{paper.date}</span>
                  <span>
                    {paper.youtubeUrl ? (lang === 'ko' ? '영상 보기' : 'Watch') : (lang === 'ko' ? '초록 보기' : 'Abstract')} &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 논문 상세 / 동영상 모달 */}
      {activePaper && (
        <div className="fixed inset-0 bg-slate-950/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden relative shadow-2xl animate-fade-in border border-slate-200">
            <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="font-extrabold text-sm text-slate-900 pr-8">
                {lang === 'ko' ? activePaper.titleKo : activePaper.titleEn}
              </h3>
              <button onClick={handleClose} className="p-1.5 rounded-lg hover:bg-slate-200 transition-colors absolute right-4">
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>
            <div className="p-6 space-y-5">
              {activePaper.youtubeUrl ? (
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-950 shadow-inner">
                  <iframe 
                    width="100%" height="100%" 
                    src={`https://www.youtube.com/embed/${activePaper.youtubeUrl.includes('v=') ? activePaper.youtubeUrl.split('v=')[1] : activePaper.youtubeUrl.split('/').pop()}`} 
                    title="YouTube player" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 text-slate-600 text-[13px] leading-relaxed max-h-72 overflow-y-auto">
                  <span className="block font-bold text-emerald-700 mb-2">[ABSTRACT]</span>
                  {/* abstractKo가 없을 경우 summaryKo로 대체 출력하여 에러 방지 */}
                  {lang === 'ko' 
                    ? (activePaper.abstractKo || activePaper.summaryKo) 
                    : (activePaper.abstractEn || activePaper.summaryEn)}
                </div>
              )}
              
              {!activePaper.youtubeUrl && (
                <button 
                  onClick={() => triggerDownload(`paper-${activePaper.id}`)} 
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-extrabold text-xs transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  {downloading ? (
                    <><span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span><span>{downloadProgress}% Downloading...</span></>
                  ) : (
                    <><Download className="w-4 h-4" /><span>{lang === 'ko' ? 'PDF 학술자료 다운로드' : 'Download Scientific PDF'}</span></>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 다운로드 토스트 알림 */}
      {downloadSuccess && (
        <div className="fixed bottom-8 right-8 bg-slate-900 border border-slate-800 p-4 rounded-xl text-white shadow-2xl z-50 animate-bounce flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold">{lang === 'ko' ? '다운로드 완료!' : 'Download Finished!'}</p>
            <p className="text-[10px] text-slate-400 mt-0.5">TMAC_Scientific_Data.pdf</p>
          </div>
        </div>
      )}

    </div>
  );
}