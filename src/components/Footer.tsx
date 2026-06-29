import React from 'react';
import tmacLogo from '../assets/images/company_logo-1.png';

interface FooterProps {
  setView: (view: string) => void;
  lang: 'ko' | 'en';
}

export default function Footer({ setView, lang }: FooterProps) {
  // Navigation shortcuts
  const footerLinks = [
    { id: 'greeting', nameKo: '회사소개', nameEn: 'About us' },
    { id: 'ingel', nameKo: '기술소개', nameEn: 'Technology' },
    { id: 'products', nameKo: '제품소개', nameEn: 'Products' },
    { id: 'roadmap', nameKo: '연구개발', nameEn: 'R&D' },
    { id: 'notices', nameKo: '고객지원', nameEn: 'Notice Board' }
  ];

  return (
    <footer className="w-full bg-slate-900 text-slate-400 py-12 px-4 md:px-6 lg:px-8 border-t-4 border-emerald-600 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-slate-800 pb-8 mb-8">
        
        {/* Left Side Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[14px]">
          <button
            onClick={() => setView('home')}
            className="hover:text-emerald-400 transition-colors cursor-pointer font-bold text-slate-300"
          >
            HOME
          </button>
          <span>/</span>
          {footerLinks.map((link) => (
            <React.Fragment key={link.id}>
              <button
                onClick={() => setView(link.id)}
                className="hover:text-emerald-400 transition-colors cursor-pointer"
              >
                {lang === 'ko' ? link.nameKo : link.nameEn}
              </button>
              {link.id !== 'notices' && <span className="text-slate-700">/</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Brand statement / mini logo */}
        <div className="flex items-center">
          <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-200/50 flex items-center justify-center">
            <img
              src={tmacLogo}
              alt="TMAC Logo"
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Main Details & Registration Credentials */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="text-xs leading-relaxed max-w-3xl space-y-2">
          {lang === 'ko' ? (
            <>
              <p>
                <strong className="text-slate-300">주소 :</strong> 34141 대전광역시 유성구 과학로 125, BVC 214호 (한국생명공학연구원 바이오벤처센터)
              </p>
              <p>
                <strong className="text-slate-300">대표 :</strong> 박종택 <span className="mx-2 text-slate-700">|</span> 
                <strong className="text-slate-300">전화번호 :</strong> +82 70-7543-2532 <span className="mx-2 text-slate-700">|</span> 
                <strong className="text-slate-300">팩스 :</strong> +82 70-7543-2533
              </p>
              <p className="text-[11px] text-slate-500 mt-4 leading-none">
                (주)티맥은 한국생명공학연구원(KRIBB) 연구원 창업 제도 및 (주)씨맥과의 협동으로 설립된 우수 벤처기업 연구소 기업입니다.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong className="text-slate-300">Address :</strong> Room 214, Bio-Venture Center (BVC), 125 Gwahak-ro, Yuseong-gu, Daejeon, Republic of Korea, 34141
              </p>
              <p>
                <strong className="text-slate-300">CEO :</strong> J.T. Park <span className="mx-2 text-slate-700">|</span> 
                <strong className="text-slate-300">TEL :</strong> +82 70-7543-2532 <span className="mx-2 text-slate-700">|</span> 
                <strong className="text-slate-300">FAX :</strong> +82 70-7543-2533
              </p>
              <p className="text-[11px] text-slate-500 mt-4 leading-none">
                TMAC is a designated Ministry Research Institute Spin-off enterprise co-founded with KRIBB and CMAC Inc.
              </p>
            </>
          )}

          <p className="text-[11px] text-slate-600 font-mono mt-2">
            copyright &copy; 2018 (주)티맥. all rights reserved.
          </p>
        </div>

        {/* Corporate Certification Badges */}
        <div className="flex gap-4">
          <div className="border border-slate-800 bg-slate-950 p-2 rounded flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
            <div className="text-[10px] font-mono leading-none">
              <p className="text-slate-400 font-semibold uppercase">KRIBB Partner</p>
              <p className="text-slate-600 mt-1">Spin-off Firm</p>
            </div>
          </div>
          <div className="border border-slate-800 bg-slate-950 p-2 rounded flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
            <div className="text-[10px] font-mono leading-none">
              <p className="text-slate-400 font-semibold uppercase">CMAC Engineering</p>
              <p className="text-slate-600 mt-1">Cooperation Patent</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
