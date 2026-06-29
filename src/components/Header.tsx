import React, { useState } from 'react';
import { Home, ChevronDown, Globe, Menu, X } from 'lucide-react';
import tmacLogo from '../assets/images/company_logo-1.png';

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
  lang: 'ko' | 'en';
  setLang: (lang: 'ko' | 'en') => void;
}

export default function Header({ currentView, setView, lang, setLang }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Main menu structure (고객지원 하위에 공지사항 및 문의사항 연결)
  const menus = [
    {
      id: 'company',
      nameKo: '회사소개',
      nameEn: 'Company',
      submenus: [
        { id: 'greeting', nameKo: '인사말', nameEn: 'Greeting' }
      ]
    },
    {
      id: 'tech',
      nameKo: '기술소개',
      nameEn: 'Technology',
      submenus: [
        // '개요' 서브메뉴 추가
        { id: 'overview', nameKo: '개요', nameEn: 'Overview' },
        { id: 'ingel', nameKo: '인겔 웨스턴 블롯 시스템', nameEn: 'In-Gel Western Blot' },
        { id: 'immunoblot', nameKo: '면역 블롯 소개', nameEn: 'Immunoblot Intro' },
        { id: 'papers', nameKo: '관련 논문 보기', nameEn: 'Research Papers' }
      ]
    },
    {
      id: 'products_menu',
      nameKo: '제품소개',
      nameEn: 'Products',
      submenus: [
        { id: 'products_menu', nameKo: '제품군', nameEn: 'Products ' }
      ]
    },
    {
      id: 'rnd',
      nameKo: '연구개발',
      nameEn: 'R&D',
      submenus: [
        { id: 'roadmap', nameKo: '개발로드맵', nameEn: 'R&D Roadmap' }
      ]
    },
    {
      id: 'support',
      nameKo: '고객지원',
      nameEn: 'Support',
      submenus: [
        { id: 'notices', nameKo: '공지사항', nameEn: 'Notice Board' },
        { id: 'inquiries', nameKo: '문의사항', nameEn: 'Inquiries' }
      ]
    }
  ];

  const handleSubMenuClick = (subId: string) => {
    setView(subId);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0 });
  };

  return (
    <header className="w-full bg-white text-slate-800 font-sans relative z-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-4 md:px-6 flex justify-between items-center">
        
        {/* Logo */}
        <button 
          onClick={() => { setView('home'); window.scrollTo({ top: 0 }); }} 
          className="flex items-center cursor-pointer outline-none"
        >
          <img src={tmacLogo} alt="TMAC Logo" className="h-8 w-auto object-contain" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center h-full space-x-1">
          {menus.map((menu) => (
            <div
              key={menu.id}
              className="relative h-full flex items-center px-4 group"
              onMouseEnter={() => setActiveDropdown(menu.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {/* 메인 메뉴 텍스트 */}
              <button className="h-full flex items-center text-xs font-bold tracking-tight transition-colors duration-200 cursor-pointer text-slate-700 group-hover:text-emerald-700 outline-none">
                {lang === 'ko' ? menu.nameKo : menu.nameEn}
                {menu.submenus && menu.submenus.length > 0 && (
                  <ChevronDown className={`w-3.5 h-3.5 ml-1.5 transition-transform duration-200 text-slate-400 group-hover:text-emerald-700 ${activeDropdown === menu.id ? 'rotate-180' : ''}`} />
                )}
              </button>

              {/* 활성화 시 나타나는 하단 바 */}
              <div 
                className={`absolute bottom-0 left-0 h-1 bg-emerald-700 transition-all duration-300 pointer-events-none ${
                  activeDropdown === menu.id ? 'w-full' : 'w-0'
                }`} 
              />

              {/* 서브 메뉴 드롭다운 박스 */}
              {menu.submenus && menu.submenus.length > 0 && (
                <div 
                  className={`absolute top-20 left-0 w-56 pt-2 flex flex-col transition-all duration-200 origin-top z-50 ${
                    activeDropdown === menu.id 
                      ? 'opacity-100 scale-y-100 visible' 
                      : 'opacity-0 scale-y-0 invisible'
                  }`}
                >
                  <div className="w-full bg-white/95 backdrop-blur-sm border border-slate-100 shadow-lg rounded-xl py-2 flex flex-col">
                    {menu.submenus.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleSubMenuClick(sub.id)}
                        className="px-5 py-3 text-[11px] font-bold text-left text-slate-600 hover:text-emerald-700 hover:bg-slate-50 transition-colors cursor-pointer outline-none block w-full"
                      >
                        {lang === 'ko' ? sub.nameKo : sub.nameEn}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Language & Utilities */}
        <div className="flex items-center gap-4">
          {/* Lang Toggle */}
          <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200 text-[10px] font-bold">
            <button
              onClick={() => setLang('ko')}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer outline-none ${
                lang === 'ko' ? 'bg-white text-slate-800 shadow-xs' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              한글
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer outline-none ${
                lang === 'en' ? 'bg-white text-slate-800 shadow-xs' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Eng
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden text-slate-600 cursor-pointer outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-4 shadow-md">
          {menus.map((menu) => (
            <div key={menu.id} className="space-y-1.5 border-b border-slate-50 pb-2">
              <div className="text-xs font-bold text-emerald-700 px-2 py-1">
                {lang === 'ko' ? menu.nameKo : menu.nameEn}
              </div>
              <div className="pl-4 flex flex-col space-y-1">
                {menu.submenus.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => handleSubMenuClick(sub.id)}
                    className="text-[11px] text-left py-1.5 text-slate-500 hover:text-emerald-700 cursor-pointer outline-none font-medium"
                  >
                    {lang === 'ko' ? sub.nameKo : sub.nameEn}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}