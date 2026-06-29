import React, { useEffect, useState } from 'react';
import { Calendar, User, Mail, CheckCircle, Clock, Send } from 'lucide-react';
import { supabase } from '../lib/supabase'; // 본인 프로젝트의 Supabase 경로 확인

interface InquiriesViewProps {
  lang: 'ko' | 'en';
}

export default function InquiriesView({ lang }: InquiriesViewProps) {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [answerInputs, setAnswerInputs] = useState<{ [key: string]: string }>({});

  // 1. DB에서 문의 내역 데이터 가져오기 (Select)
  // 작성된 답변이 있다면 기존 답변도 함께 바인딩합니다.
  const fetchInquiries = async () => {
    // *주의: Supabase 기본 제공 가상 컬럼인 rowid(ctid)를 조회하여 수정 대상으로 활용합니다.
    const { data, error } = await supabase
      .from('inquiries')
      .select('*, ctid') 
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching inquiries:', error);
    } else {
      setInquiries(data || []);
      
      const existingAnswers: { [key: string]: string } = {};
      data?.forEach(item => {
        if (item.answer) {
          existingAnswers[item.ctid] = item.answer; // 고유 식별자 ctid 사용
        }
      });
      setAnswerInputs(existingAnswers);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleAnswerChange = (ctid: string, value: string) => {
    setAnswerInputs(prev => ({ ...prev, [ctid]: value }));
  };

  // 2. 답변 저장 및 상태 '답변완료'로 표시하기 (Update)
  const handleSaveAnswer = async (ctid: string) => {
    const answerText = answerInputs[ctid];

    if (!answerText || answerText.trim() === '') {
      alert(lang === 'ko' ? '답변 내용을 입력해 주세요.' : 'Please enter an answer content.');
      return;
    }

    // *주의: 기본키(Primary Key)가 없는 테이블 특성을 고려하여 물리적 행 위치인 ctid를 기준으로 업데이트합니다.
    const { error } = await supabase
      .from('inquiries')
      .update({ 
        answer: answerText,
        status: '답변완료' 
      })
      .eq('ctid', ctid);

    if (error) {
      console.error('답변 저장 실패:', error);
      alert(lang === 'ko' ? '답변 저장 중 오류가 발생했습니다.' : 'An error occurred while saving the answer.');
    } else {
      alert(lang === 'ko' ? '답변이 완료 상태로 저장되었습니다.' : 'The answer has been saved as completed.');
      fetchInquiries(); // 목록 새로고침
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans text-slate-800 py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'ko' ? '문의사항 내역 관리' : 'Inquiries Management'}
          </h2>
          <p className="text-xs text-slate-500 font-light">
            {lang === 'ko' 
              ? '고객이 접수한 문의 내역을 확인하고 답변을 작성·관리할 수 있습니다.' 
              : 'Review customer inquiries and manage responses.'}
          </p>
        </div>

        <div className="w-full bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-100/60 text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                  <th className="py-4 px-6 w-16 text-center">No</th>
                  <th className="py-4 px-6 w-40">{lang === 'ko' ? '접수일시' : 'Date'}</th>
                  <th className="py-4 px-6 w-48">{lang === 'ko' ? '작성자 (기관)' : 'Name / Organization'}</th>
                  <th className="py-4 px-6 w-48">{lang === 'ko' ? '연락처메일' : 'Email'}</th>
                  <th className="py-4 px-6 flex-1">{lang === 'ko' ? '문의 내용' : 'Inquiry Message'}</th>
                  <th className="py-4 px-6 w-28 text-center">{lang === 'ko' ? '상태' : 'Status'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[11px]">
                {inquiries && inquiries.length > 0 ? (
                  inquiries.map((inquiry, index) => (
                    <tr key={inquiry.ctid} className="hover:bg-slate-50/40 transition-colors">
                      <td className="py-5 px-6 font-mono font-bold text-slate-400 text-center">
                        {index + 1}
                      </td>

                      <td className="py-5 px-6 text-slate-500 font-light">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-slate-400 flex-shrink-0" />
                          {new Date(inquiry.created_at).toLocaleString('ko-KR', {
                            year: '2-digit',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </td>

                      <td className="py-5 px-6 text-slate-700 font-medium">
                        <div className="flex items-center gap-1.5">
                          <User className="w-3 h-3 text-slate-400 flex-shrink-0" />
                          {inquiry.name}
                        </div>
                      </td>

                      <td className="py-5 px-6 font-mono text-slate-600">
                        <div className="flex items-center gap-1.5">
                          <Mail className="w-3 h-3 text-slate-400 flex-shrink-0" />
                          {inquiry.email}
                        </div>
                      </td>

                      <td className="py-5 px-6 space-y-3">
                        <div>
                          <span className="text-[9px] font-bold tracking-wider uppercase text-slate-400 block mb-0.5">Title</span>
                          <p className="font-bold text-slate-800">{inquiry.title}</p>
                        </div>
                        <div>
                          <span className="text-[9px] font-bold tracking-wider uppercase text-slate-400 block mb-0.5">Message</span>
                          <p className="text-slate-600 font-light leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                            {inquiry.message}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-slate-100 space-y-2">
                          <span className="text-[9px] font-extrabold uppercase tracking-wider text-emerald-600 block">
                            {lang === 'ko' ? '관리자 답변' : 'Admin Response'}
                          </span>
                          <div className="flex gap-2">
                            <textarea
                              rows={2}
                              value={answerInputs[inquiry.ctid] || ''}
                              onChange={(e) => handleAnswerChange(inquiry.ctid, e.target.value)}
                              placeholder={lang === 'ko' ? '답변 내용을 입력하세요.' : 'Enter the answer content.'}
                              className="flex-1 text-[10px] bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-emerald-500 transition-colors resize-none"
                            />
                            <button
                              onClick={() => handleSaveAnswer(inquiry.ctid)}
                              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 rounded-lg flex items-center justify-center cursor-pointer transition-colors shadow-sm flex-shrink-0 outline-none"
                              title={lang === 'ko' ? '답변 저장' : 'Save Answer'}
                            >
                              <Send className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </td>

                      <td className="py-5 px-6 text-center align-middle">
                        {inquiry.status === '답변완료' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-100">
                            <CheckCircle className="w-3 h-3" />
                            {lang === 'ko' ? '답변완료' : 'Completed'}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-extrabold bg-amber-50 text-amber-700 border border-amber-100">
                            <Clock className="w-3 h-3" />
                            {lang === 'ko' ? '답변대기' : 'Pending'}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-16 text-center text-slate-400 font-light">
                      {lang === 'ko' ? '접수된 문의 내역이 없습니다.' : 'No inquiries found.'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}