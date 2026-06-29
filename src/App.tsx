import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import GreetingView from './components/GreetingView';
import Overview from './components/Overview';
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
  
  const [selectedNoticeId, setSelectedNoticeId] = useState<number | null>(null);
  const [selectedPaperId, setSelectedPaperId] = useState<number | null>(null);

  const handleSelectNoticeOnHome = (id: number) => {
    setSelectedNoticeId(id);
    setView('notices');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const handleViewChange = (viewId: string) => {
    const viewMapping: Record<string, string> = {
      company: 'greeting',
      tech: 'overview',
      ingel: 'ingel',
      immunoblot: 'immunoblot',
      papers: 'papers',
      products: 'products_menu',
      rnd: 'roadmap',
      support: 'notices',
    };

    const targetView = viewMapping[viewId] || viewId;
    setView(targetView);
    
    setSelectedNoticeId(null);
    setSelectedPaperId(null);
    window.scrollTo({ top: 0 });
  };

  const renderActiveView = () => {
    switch (currentView) {
      case 'greeting':
        return <GreetingView lang={lang} setView={handleViewChange} />;
      case 'overview': 
        return <Overview lang={lang} setView={handleViewChange} />; // 👈 setView 프롭스 추가 완료
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
            setView={handleViewChange} // 👈 setView 프롭스 추가 완료
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
            setView={handleViewChange}
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
      <Header
        currentView={currentView}
        setView={handleViewChange}
        lang={lang}
        setLang={setLang}
      />
      <main className="flex-1 w-full relative">
        <div className="animate-fade-in duration-300">
          {renderActiveView()}
        </div>
      </main>
      <Footer
        setView={handleViewChange}
        lang={lang}
      />
    </div>
  );
}