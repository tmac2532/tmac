import React, { useState, useEffect } from 'react';
import { Search, ChevronRight, FileText, Calendar, User, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import service_image from '../assets/images/service.png';

interface NoticeViewProps {
  lang: 'ko' | 'en';
  selectedNoticeId: number | null;
  onClearSelectedNoticeId: (id: number | null) => void;
  onClearSelectedNotice: () => void;
  setView: (view: string) => void;
}

export default function NoticeView({ 
  lang, 
  selectedNoticeId, 
  onClearSelectedNoticeId,
  onClearSelectedNotice,
  setView
}: NoticeViewProps) {
  // 탭 상태: 'notices'(공지사항) 또는 'inquiries'(문의사항)
  const [activeTab, setActiveTab] = useState<'notices' | 'inquiries'>('notices');

  // 상세 페이지 진입 시 서브 메뉴 탭 초기화 설정
  useEffect(() => {
    if (selectedNoticeId !== null) {
      setActiveTab('notices');
    }
  }, [selectedNoticeId]);

  // Notice board dummy list
  const notices = [
    {
      id: 1,
      titleKo: '[IR/PR] (주)티맥, 프로테옴 분석 장비 MiRIA-6X 출시 간담회 개최',
      titleEn: '[IR/PR] TMAC Hosts Press Conference for MiRIA-6X Proteome Analyzer Launch',
      date: '2025-10-15',
      author: '홍보팀',
      contentKo: `(주)티맥이 오는 11월 차세대 프로테옴 분석 장비 'MiRIA-6X'의 공식 출시를 앞두고 기자 간담회를 개최합니다.\n\n` +
                 `이번 간담회에서는 기존 수장식 밸브 유로 다중화 어레이 기술의 상용화 버전 시연 및\n` +
                 `글로벌 체외진단 의료기기(IVD) 시장 진출 로드맵이 상세히 소개될 예정입니다.\n\n` +
                 `- 일시: 2025년 11월 5일 (수) 14:00 ~\n` +
                 `- 장소: 서울 바이오허브 컨퍼런스홀\n` +
                 `- 문의: 홍보팀 (pr@tmac.co.kr)\n\n` +
                 `많은 관심과 참석 부탁드립니다.`,
      contentEn: `TMAC is hosting a press conference ahead of the official launch of the next-generation proteome analyzer 'MiRIA-6X' in November.\n\n` +
                 `This conference will feature a demonstration of the commercialized version of the multi-channel valve array technology\n` +
                 `and a detailed roadmap for entering the global IVD (In-Vitro Diagnostics) medical device market.\n\n` +
                 `- Date & Time: Nov 5, 2025 (Wed) 14:00 ~\n` +
                 `- Location: Seoul Bio Hub Conference Hall\n` +
                 `- Contact: PR Team (pr@tmac.co.kr)\n\n` +
                 `We look forward to your attendance and interest.`
    },
    {
      id: 2,
      titleKo: '[학술/연구] 수장식 하이드로 압력 CDR BINDER 관련 특허 등록 완료',
      titleEn: '[R&D] Patent Registration Completed for Submerged Hydro-Pressure CDR BINDER',
      date: '2025-08-22',
      author: '연구개발부',
      contentKo: `(주)티맥의 핵심 기술인 '순환식 하이드로 압력 CDR BINDER' 기구 구조에 대한 국내 특허 등록이 완료되었습니다.\n\n` +
                 `본 특허 기술은 항체 세척 과정에서 fluidic 교차 유로 연동 성능을 공인 60% 이상 절감시키는 통계적 입증을 마쳤으며,\n` +
                 `향후 당사 주력 소모품(Precast tPAGE) 결합 라인업의 안정성을 크게 높일 것으로 기대됩니다.\n\n` +
                 `자세한 특허 내용은 관련 논문 및 기술소개 페이지를 참조해 주시기 바랍니다.`,
      contentEn: `Domestic patent registration for TMAC's core technology, the 'Circulating Hydro-Pressure CDR BINDER' mechanism, has been completed.\n\n` +
                 `This patented technology has statistically proven to reduce fluidic cross-channel linkage performance by over 60% in antibody washing processes,\n` +
                 `and is expected to significantly enhance the stability of our flagship consumable (Precast tPAGE) binding lineup.\n\n` +
                 `For detailed patent information, please refer to the research papers and technology section.`
    },
    {
      id: 3,
      titleKo: '[기업] 2025년 하반기 신입 및 경력 공개 채용',
      titleEn: '[Corporate] 2025 H2 Open Recruitment for New and Experienced Professionals',
      date: '2025-07-10',
      author: '경영지원본부',
      contentKo: `글로벌 진단 플랫폼 허브 구축 및 사업 확장에 따른 2025년 하반기 공개 채용을 진행합니다.\n\n` +
                 `모집 분야:\n` +
                 `1. 연구개발부 (단백체 추출 및 자동화 장비 펌웨어 개발)\n` +
                 `2. 해외영업부 (체외진단 의료기기 글로벌 마케팅 및 영업)\n` +
                 `3. 품질관리부 (생산 공정 검증 및 규격 관리)\n\n` +
                 `- 지원 기간: 2025년 7월 15일 ~ 7월 31일 18:00 마감\n` +
                 `- 지원 방법: 자사 양식 이메일 접수 (recruit@tmac.co.kr)\n\n` +
                 `혁신적인 바이오 여정을 함께할 인재들의 많은 지원 바랍니다.`,
      contentEn: `We are conducting open recruitment for the second half of 2025 following the establishment of a global diagnostic platform hub and business expansion.\n\n` +
                 `Recruitment Areas:\n` +
                 `1. R&D Dept. (Proteome extraction and automation equipment firmware development)\n` +
                 `2. Overseas Sales Dept. (Global marketing and sales of IVD medical devices)\n` +
                 `3. QA/QC Dept. (Production process verification and specification management)\n\n` +
                 `- Application Period: July 15, 2025 ~ July 31, 2025 18:00 KST\n` +
                 `- How to Apply: Submit via email using company form (recruit@tmac.co.kr)\n\n` +
                 `We look forward to applications from talented individuals who will join us on our innovative bio-journey.`
    }
  ];

  // 선택된 공지사항 찾기
  const selectedNotice = selectedNoticeId 
    ? notices.find(n => n.id === selectedNoticeId) 
    : null;

  return (
    <div className="w-full bg-white font-sans text-slate-800">
      
      {/* Hero Dynamic Banner */}
      <div className="relative w-full h-[320px] md:h-[380px] flex flex-col justify-center items-center text-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-slate-950/60 z-10" />
        <img
          src={service_image}
          alt="Support & Notices Banner"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 text-white px-4 pt-16 md:pt-24 select-none max-w-4xl space-y-4 mx-auto w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {lang === 'ko' ? '고객지원' : 'Support'}
          </h2>
          <div className="h-1 w-24 bg-emerald-500 mx-auto rounded-full" />
          <p className="text-xs md:text-base text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            {lang === 'ko'
              ? '티맥의 최신 소식과 궁금하신 점을 확인하고 문의하실 수 있습니다.'
              : 'Stay updated with TMAC\'s latest news and easily reach out for any inquiries.'}
          </p>
        </div>
      </div>

      {/* 서브 메뉴바 추가 (공지사항 / 문의사항 탭 전환 UI) */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 border-b border-slate-100 flex items-center gap-8 text-xs font-bold tracking-tight">
        <button
          onClick={() => { setActiveTab('notices'); onClearSelectedNoticeId(null); }}
          className={`pb-3 cursor-pointer transition-colors ${
            activeTab === 'notices' && selectedNoticeId === null
              ? 'text-emerald-600 border-b-2 border-emerald-600'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          {lang === 'ko' ? '공지사항' : 'Notice Board'}
        </button>
        <button
          onClick={() => { setActiveTab('inquiries'); onClearSelectedNoticeId(null); }}
          className={`pb-3 cursor-pointer transition-colors ${
            activeTab === 'inquiries'
              ? 'text-emerald-600 border-b-2 border-emerald-600'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          {lang === 'ko' ? '문의사항' : 'Inquiries'}
        </button>
      </div>

      {/* 메인 컨텐츠 영역: 탭 또는 상세페이지 조건부 렌더링 */}
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-6 lg:px-8">
        
        {/* 공지사항 상세 화면 */}
        {selectedNotice && activeTab === 'notices' ? (
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-10">
            <button
              onClick={onClearSelectedNotice}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-emerald-600 mb-8 cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {lang === 'ko' ? '목록으로 돌아가기' : 'Back to list'}
            </button>

            <span className="text-[10px] font-mono tracking-wider uppercase font-extrabold bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded">
              Notice
            </span>
            <h3 className="text-xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-4 mb-6 leading-tight">
              {lang === 'ko' ? selectedNotice.titleKo : selectedNotice.titleEn}
            </h3>

            <div className="flex items-center gap-6 border-y border-slate-100 py-3.5 mb-8 text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" /> {selectedNotice.date}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" /> {selectedNotice.author}
              </span>
            </div>

            <div className="text-xs md:text-sm font-light text-slate-650 leading-relaxed whitespace-pre-line">
              {lang === 'ko' ? selectedNotice.contentKo : selectedNotice.contentEn}
            </div>
          </div>

        /* 문의사항(Inquiries) 탭 화면 */
        ) : activeTab === 'inquiries' ? (
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight mb-4">
                {lang === 'ko' ? '연락처 및 위치 안내' : 'Contact & Location'}
              </h3>
              <p className="text-xs text-slate-500 font-light leading-relaxed mb-8">
                {lang === 'ko' 
                  ? '당사의 제품, 기술 협력, 서비스 관련 문의 사항이 있으시면 언제든지 편하신 방법으로 연락해 주시기 바랍니다.' 
                  : 'Please feel free to contact us through your preferred method for any inquiries regarding our products, technical cooperation, or services.'}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase font-extrabold text-slate-400 block mb-1">
                      Office Address
                    </span>
                    <h4 className="text-xs font-bold text-slate-800">
                      {lang === 'ko' ? '본사 및 연구소' : 'Headquarters & R&D Center'}
                    </h4>
                    <p className="text-[11px] font-light text-slate-500 mt-1 leading-relaxed">
                      {lang === 'ko' 
                        ? '(34141) 대전광역시 유성구 대학로 291 (구성동, KAIST 문지캠퍼스)' 
                        : '291 Daehak-ro, Yuseong-gu, Daejeon (Munji Campus, KAIST)'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase font-extrabold text-slate-400 block mb-1">
                      Telephone
                    </span>
                    <h4 className="text-xs font-bold text-slate-800">
                      {lang === 'ko' ? '대표 전화' : 'Main Phone'}
                    </h4>
                    <p className="text-xs font-medium text-slate-600 mt-1">
                      042-861-1234
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase font-extrabold text-slate-400 block mb-1">
                      Email Address
                    </span>
                    <h4 className="text-xs font-bold text-slate-800">
                      {lang === 'ko' ? '대표 이메일' : 'General Inquiries'}
                    </h4>
                    <p className="text-xs font-medium text-emerald-600 mt-1 hover:underline cursor-pointer">
                      contact@tmac.co.kr
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 문의 양식 카드 */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-base font-bold text-slate-800 tracking-tight mb-1">
                {lang === 'ko' ? '온라인 문의 작성' : 'Online Inquiry'}
              </h3>
              <p className="text-[10px] text-slate-500 font-light mb-6">
                {lang === 'ko' ? '아래 이메일로 직접 문의 내용을 남겨주시면 담당자가 신속하게 답변해 드립니다.' : 'Leave your inquiry directly via the email below and our representative will respond promptly.'}
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1.5">
                    {lang === 'ko' ? '성함 / 기관명' : 'Name / Organization'}
                  </label>
                  <input 
                    type="text" 
                    placeholder={lang === 'ko' ? '홍길동 / (주)OO바이오' : 'Your Name / Company'}
                    className="w-full text-xs bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-slate-700 outline-none focus:border-emerald-500 transition-colors" 
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1.5">
                    {lang === 'ko' ? '연락 받으실 이메일' : 'Email Address'}
                  </label>
                  <input 
                    type="email" 
                    placeholder="example@email.com"
                    className="w-full text-xs bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-slate-700 outline-none focus:border-emerald-500 transition-colors" 
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1.5">
                    {lang === 'ko' ? '문의 내용' : 'Message'}
                  </label>
                  <textarea 
                    rows={4}
                    placeholder={lang === 'ko' ? '문의하실 내용을 상세히 적어주세요.' : 'Please write your inquiry details here.'}
                    className="w-full text-xs bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-slate-700 outline-none focus:border-emerald-500 transition-colors resize-none" 
                  />
                </div>
                <button 
                  type="button" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg py-3.5 transition-colors cursor-pointer outline-none shadow-sm"
                >
                  {lang === 'ko' ? '문의 메일 전송하기' : 'Send Inquiry Email'}
                </button>
              </div>
            </div>
          </div>

        /* 공지사항 목록 화면 */
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {notices.map((notice) => (
              <div 
                key={notice.id} 
                onClick={() => setView(`notice_detail_${notice.id}`)}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:border-slate-200 transition-all cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group"
              >
                <div className="space-y-2 flex-1 w-full">
                  <div className="flex items-center gap-3 text-[9px] font-mono text-slate-400">
                    <span className="px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-slate-500 font-bold uppercase tracking-widest">
                      Notice
                    </span>
                    <span>{notice.date}</span>
                    <span>{notice.author}</span>
                  </div>
                  <h4 className="text-xs md:text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight">
                    {lang === 'ko' ? notice.titleKo : notice.titleEn}
                  </h4>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all self-center flex-shrink-0" />
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}