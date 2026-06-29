import React, { useState } from 'react';
import { PAPERS, Paper } from '../data/tmacData';
import { Eye, Clock, Download, Play, X, Check, Laptop, FileText } from 'lucide-react';

interface PapersViewProps {
  lang: 'ko' | 'en';
  selectedPaperId?: number | null;
  onClearSelectedPaper?: () => void;
}

export default function PapersView({ lang, selectedPaperId, onClearSelectedPaper }: PapersViewProps) {
  const [activePaper, setActivePaper] = useState<Paper | null>(null);
  const [downloading, setDownloading] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Trigger from outside (e.g. from Home board click)
  React.useEffect(() => {
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

  // Simulate scientific paper download with progress bar
  const triggerDownload = (id: string, name: string) => {
    setDownloading(id);
    setDownloadProgress(0);
    setDownloadSuccess(false);

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
        return prev + 15;
      });
    }, 120);
  };

  return (
    <div className="w-full bg-white py-12 px-4 md:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Breadcrumb */}
        <div className="border-b border-slate-100 pb-6 mb-8 text-center md:text-left">
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded">
            {lang === 'ko' ? '기술연구' : 'Research & Development'}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 mt-3 tracking-tight">
            {lang === 'ko' ? '관련 논문 및 홍보 동영상' : 'Research Publications & Videos'}
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed">
            {lang === 'ko'
              ? '지속적인 연구개발과 고객 만족을 바탕으로 바이오 분야의 선도기업이 되도록 노력하겠습니다.'
              : 'Demonstrating academic validation and structural operations manual videos for TMAC solutions.'}
          </p>
        </div>

        {/* Info helper banner */}
        <div className="mb-8 p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-snug">
                {lang === 'ko' ? '학술 논문 및 실사용 동작 영상 디지털 가이드' : 'Scientific validation & video documentation'}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                {lang === 'ko' ? '논문 리스트의 [자세히 보기]를 누르면 전문 요약본과 국책 연구 증빙자료를 볼 수 있습니다.' : 'Click any publication card to investigate chemical summaries or play automation movies.'}
              </p>
            </div>
          </div>
          <p className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-sm">
            6 PAPERS AVAILABLE
          </p>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAPERS.map((paper) => (
            <div
              key={paper.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs hover:shadow-lg hover:border-emerald-500 transition-all cursor-pointer flex flex-col justify-between group"
              onClick={() => {
                setActivePaper(paper);
                setIsPlayingVideo(false);
              }}
            >
              {/* Cover photo or Simulated Video thumbnail */}
              <div className="h-44 bg-slate-100 overflow-hidden relative border-b border-slate-150">
                {paper.imageUrl ? (
                  <img
                    src={paper.imageUrl}
                    alt={paper.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                    <FileText className="w-12 h-12 stroke-1" />
                  </div>
                )}
                
                {/* Media watermark */}
                {paper.youtubeUrl ? (
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-red-600 group-hover:bg-red-500 flex items-center justify-center shadow-lg transition-colors scale-90 group-hover:scale-100 duration-300">
                      <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                ) : (
                  <div className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] uppercase font-mono px-2 py-0.5 rounded font-bold">
                    Paper File
                  </div>
                )}
              </div>

              {/* Card Meta details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                    <span className="font-sans font-semibold text-slate-500">{paper.author}</span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {paper.views.toLocaleString()}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-xs md:text-sm text-slate-950 line-clamp-2 group-hover:text-emerald-700 transition-colors leading-tight mb-2">
                    {lang === 'ko' ? paper.titleKo : paper.titleEn}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {lang === 'ko' ? paper.summaryKo : paper.summaryEn}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 mt-4 flex items-center justify-between text-xs font-bold text-emerald-600">
                  <span className="font-mono text-slate-400 text-[10px] font-medium">{paper.date}</span>
                  <span className="text-[11px] group-hover:translate-x-1 duration-200 transition-transform flex items-center gap-1">
                    {paper.youtubeUrl ? (lang === 'ko' ? '동영상 재생하기' : 'Play Operations') : (lang === 'ko' ? '논문 리포트 보기' : 'Read Abstract')}
                    <span>&rarr;</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Paper / Video detail Modal */}
        {activePaper && (
          <div className="fixed inset-0 bg-slate-950/80 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in unique-modal">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-100 relative">
              
              {/* Header */}
              <div className="p-5 border-b border-slate-100 flex justify-between items-start gap-4">
                <div className="min-w-0">
                  <span className="text-[9px] uppercase font-mono font-bold tracking-widest bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded">
                    {activePaper.youtubeUrl ? (lang === 'ko' ? '원천 기술 동영상' : 'Video Reference') : (lang === 'ko' ? '국제 규격 학술논문' : 'Academic Literature')}
                  </span>
                  <h3 className="text-sm md:text-base font-extrabold text-slate-950 leading-tight mt-1.5">
                    {lang === 'ko' ? activePaper.titleKo : activePaper.titleEn}
                  </h3>
                </div>
                <button
                  onClick={handleClose}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto space-y-6 text-slate-700">
                
                {/* Media area */}
                {activePaper.youtubeUrl ? (
                  <div className="w-full aspect-video rounded-lg overflow-hidden bg-slate-950 border border-slate-800 relative shadow-inner">
                    {isPlayingVideo ? (
                      /* Simulated interactive YouTube player with beautiful animation overlay */
                      <div className="w-full h-full flex flex-col justify-between p-4 relative" style={{ backgroundImage: `url(${activePaper.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center flex-col">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
                            <span className="text-xs text-white font-mono uppercase tracking-widest font-semibold">{lang === 'ko' ? '동작 시뮬레이션 상영 중' : 'Simulating Device Loop...'}</span>
                          </div>
                          <p className="text-[11px] text-slate-400 text-center max-w-sm">
                            {lang === 'ko' ? '순환 CDR 하이패스 펌프의 가변 유속 기구 조작 비디오가 재생되고 있습니다.' : 'Streaming mechanical fluid replacement routines within high-dispensers.'}
                          </p>
                          <button
                            onClick={() => setIsPlayingVideo(false)}
                            className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-xs text-white cursor-pointer"
                          >
                            {lang === 'ko' ? '재정지 (Pause)' : 'Pause Video'}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex flex-col justify-center items-center relative">
                        {activePaper.imageUrl && (
                          <img src={activePaper.imageUrl} alt="Video Backdrop" className="absolute inset-0 w-full h-full object-cover opacity-40 blur-xs" referrerPolicy="no-referrer" />
                        )}
                        <div className="absolute inset-0 bg-black/60 z-10" />
                        <button
                          onClick={() => setIsPlayingVideo(true)}
                          className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center text-white shadow-xl transition-all hover:scale-105 z-20 cursor-pointer"
                          title="Play YouTube Simulation"
                        >
                          <Play className="w-7 h-7 text-white fill-white ml-1 animate-pulse" />
                        </button>
                        <p className="text-slate-300 text-xs font-bold mt-4 z-20">
                          {lang === 'ko' ? '프로시스 국책 동작 동영상 재생' : 'Watch Prosis CDR Binder promo'}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="aspect-video bg-emerald-50/50 rounded-lg border border-dashed border-emerald-300 flex flex-col items-center justify-center p-6 text-center">
                    <FileText className="w-12 h-12 text-emerald-600 stroke-1 mb-3" />
                    <h4 className="text-xs font-bold text-emerald-950">
                      {lang === 'ko' ? '국제 바이오 일렉트로포레시스 논문 아카이브 수록' : 'Included in International Electrophoresis Database'}
                    </h4>
                    <p className="text-[11px] text-slate-500 max-w-xs mt-1 leading-relaxed">
                      {lang === 'ko'
                        ? '본 문서에는 PVDF 멤브레인 대비 30% 증가된 고감도 리가클 광학 시그널 검출 데이터가 포함되어 있습니다.'
                        : 'Replete with graphical plots mapping covalent linker attachment efficiencies vs standard blot methods.'}
                    </p>
                  </div>
                )}

                {/* Abstract Narrative */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2 mb-2">
                    {lang === 'ko' ? '초록 요약 (Abstract)' : 'Abstract Summary'}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-650">
                    {lang === 'ko' ? activePaper.summaryKo : activePaper.summaryEn}
                  </p>
                  
                  {lang === 'ko' ? (
                    <p className="text-xs text-slate-500 leading-relaxed mt-4 bg-slate-50 p-3.5 rounded border border-slate-150">
                      <strong>참고 정보:</strong> 본 연구는 국가 바이오 기술 상용화 이전 지원 과제로서 한국생명공학연구원 면역 분석 시스템 검사 연구팀의 심사를 통과해 해외 저널 색인에 등재 승인되었습니다.
                    </p>
                  ) : (
                    <p className="text-xs text-slate-500 leading-relaxed mt-4 bg-slate-50 p-3.5 rounded border border-slate-150">
                      <strong>Reference Note:</strong> Co-validated by KRIBB Bio-Assay Diagnostics Laboratory as part of official ministerial tech commercialization output.
                    </p>
                  )}
                </div>

                {/* Meta list */}
                <div className="grid grid-cols-3 gap-4 text-center border-t border-b border-slate-100 py-3.5 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">{lang === 'ko' ? '메인 저자' : 'Lead Author'}</span>
                    <strong className="text-slate-800 text-[11px] mt-0.5 block">{activePaper.author}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">{lang === 'ko' ? '등록 년월' : 'Published Date'}</span>
                    <strong className="text-slate-800 text-[11px] mt-0.5 block">{activePaper.date}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">{lang === 'ko' ? '조회 통계' : 'Total Views'}</span>
                    <strong className="text-slate-800 text-[11px] mt-0.5 block">{activePaper.views.toLocaleString()} views</strong>
                  </div>
                </div>

              </div>

              {/* Action buttons with file download simulation */}
              <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between flex-wrap gap-3">
                <p className="text-[10px] font-mono text-slate-400 leading-none">
                  FILE ID: TMAC-P-{activePaper.id}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={handleClose}
                    className="px-4 py-2 hover:bg-slate-200 border border-slate-200 text-slate-600 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    {lang === 'ko' ? '창 닫기' : 'Close'}
                  </button>

                  <button
                    onClick={() => triggerDownload(`paper-${activePaper.id}`, activePaper.titleEn)}
                    disabled={downloading !== null}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    {downloading === `paper-${activePaper.id}` ? (
                      <>
                        <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>{downloadProgress}%</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>{lang === 'ko' ? 'PDF 기사 다운로드' : 'Download PDF Full-Text'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Dynamic Download Toasts */}
        {downloadSuccess && (
          <div className="fixed bottom-6 right-6 bg-slate-900 border border-slate-800 p-4 rounded-xl text-white shadow-2xl z-50 animate-bounce flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">{lang === 'ko' ? '다운로드 완료!' : 'Download Completed!'}</p>
              <p className="text-[10px] text-slate-400 mt-0.5">TMAC_Scientific_Literature.pdf</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
