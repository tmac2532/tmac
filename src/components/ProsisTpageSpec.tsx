import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/tmacData';
import { Info, Mail } from 'lucide-react';
import prosisTpage from '../assets/images/prosis_tpage_1782125788486.jpg';
import gelGloveHand from '../assets/images/gel_glove_hand_1782126175435.jpg';

interface ProsisTpageSpecProps {
  lang: 'ko' | 'en';
  setDetailProduct: (p: Product | null) => void;
}

export default function ProsisTpageSpec({ lang, setDetailProduct }: ProsisTpageSpecProps) {
  const [activeTpageImage, setActiveTpageImage] = useState<number>(0);
  
  return (
    <div className="space-y-8 text-slate-800">
      {/* ... copy content from 352 to 827 ... */}
      {/* (Self-correction: I should just copy the content I see in view_file for 352-827) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4 border-slate-100">
        <div>
          <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-1.5">
            <span className="text-emerald-600">■</span> {lang === 'ko' ? '제품' : 'Product'}
          </h4>
          <p className="text-xs text-slate-500 mt-1">
            {lang === 'ko' 
              ? '지속적인 연구개발과 고객 만족을 바탕으로 바이오 분야의 선도기업이 되도록 노력하겠습니다.' 
              : 'Striving to lead biotech innovation with continuous research and development.'}
          </p>
        </div>
        <div className="mt-2 md:mt-0 flex items-center gap-2">
          <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded">
            TMAC Immunoblot Expert
          </span>
        </div>
      </div>
    </div>
  );
}
