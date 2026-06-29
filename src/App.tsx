import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import GreetingView from './components/GreetingView';
import InGelTechView from './components/InGelTechView';
import ImmunoblotIntroView from './components/ImmunoblotIntroView';
import PapersView from './components/PapersView';
import ProductsView  from './components/ProductsView';
import RoadmapView from './components/RoadmapView';
import NoticeView from './components/NoticeView';
import InquiriesView from './components/InquiriesView';

export default function App() {
  const [currentView, setView] = useState<string>('home');
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  
  // Track deep notification triggers from the homepage widget
  const [selectedNoticeId, setSelectedNoticeId] = useState<number | null>(null);
  const [selectedPaperId, setSelectedPaperId] = useState<number | null>(null);

  // Deep route handler for notices
  const handleSelectNoticeOnHome = (id: number) => {
    setSelectedNoticeId(id);
    setView('notices');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Deep route handler for papers
  const handleSelectPaperOnHome = (id: number) => {
    setSelectedPaperId(id);
    setView('papers');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearSelectedNotice = () => {
    setSelectedNoticeId(null);
  };

  const handleClearSelectedPaper = () => {
    setSelectedPaperId(null);
  };

  // 뷰 전환 라우팅 함수 (메인 메뉴 자체 클릭 시 대표 하위 뷰로 자동 연결)
  const handleViewChange = (viewId: string) => {
    // 메인 카테고리 클릭 시 각 카테고리의 첫 번째 하위 페이지(기본 뷰)로 연결
    const viewMapping: Record<string, string> = {
      company: 'greeting',    // 회사소개 -> 인사말
      technology: 'ingel',    // 기술소개 -> 인겔 웨스턴 블롯
      products: 'products_menu', // 제품소개 -> 제품 카탈로그
      rnd: 'roadmap',         // 연구개발 -> 개발로드맵
      support: 'notices',     // 고객지원 -> 공지사항
    };

    const targetView = viewMapping[viewId] || viewId;
    setView(targetView);
    
    // 기존 상세 페이지 닫기 상태 초기화
    setSelectedNoticeId(null);
    setSelectedPaperId(null);
    window.scrollTo({ top: 0 });
  };

  // 활성화된 뷰 렌더링 스위치
  const renderActiveView = () => {
    switch (currentView) {
      case 'greeting':
        return <GreetingView lang={lang} setView={handleViewChange} />;
      case 'ingel':
        return <InGelTechView lang={lang} setView={handleViewChange} />;
      case 'immunoblot':
        return <ImmunoblotIntroView lang={lang} setView={handleViewChange} />;
      case 'papers':
        return (
          <PapersView 
            lang={lang} 
            selectedPaperId={selectedPaperId}
            onClearSelectedPaper={handleClearSelectedPaper}
          />
        );
      case 'products_menu':
        return <ProductsView lang={lang} setView={handleViewChange} />;
      case 'roadmap':
        return <RoadmapView lang={lang} />;
      case 'notices':
        return (
          <NoticeView 
            lang={lang} 
            selectedNoticeId={selectedNoticeId}
            onClearSelectedNoticeId={setSelectedNoticeId}
            onClearSelectedNotice={handleClearSelectedNotice}
          />
        );
      case 'inquiries':
        return <InquiriesView lang={lang} />;
      default:
        return (
          <HomeView
            setView={handleViewChange}
            lang={lang}
            onSelectNotice={handleSelectNoticeOnHome}
            onSelectPaper={handleSelectPaperOnHome}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col justify-between selection:bg-emerald-600 selection:text-white">
      {/* Header element featuring multilingual and navigation controls */}
      <Header
        currentView={currentView}
        setView={handleViewChange}
        lang={lang}
        setLang={setLang}
      />

      {/* Main viewport frame */}
      <main className="flex-1 w-full relative">
        <div className="animate-fade-in duration-300">
          {renderActiveView()}
        </div>
      </main>

      {/* Dynamic footer element containing bio venture address listings */}
      <Footer
        setView={handleViewChange}
        lang={lang}
      />
    </div>
  );
}