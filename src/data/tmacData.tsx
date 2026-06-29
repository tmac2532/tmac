import prosisTpage from '../assets/images/prosis_tpage_1782125788486.jpg';
import gelGloveHand from '../assets/images/gel_glove_hand_1782126175435.jpg';
import prosisMinipage from '../assets/images/miniPAGE-4_1.jpg';
import prosisMinitransfer from '../assets/images/prosis_minitransfer_1782125815384.jpg';
import prosisMinihorizon from '../assets/images/prosis_minihorizon_1782125831224.jpg';
import prosisMidihorizon from '../assets/images/prosis_midihorizon_1782125845562.jpg';
import prosisEps300 from '../assets/images/prosis_eps300_1782125857579.jpg';

export interface Product {
  id: string;
  name: string;
  category: 'Electrophoresis' | 'Blotting' | 'Proteom Analysis' | 'Diagnostics';
  descriptionKo: string;
  descriptionEn: string;
 
  featuresKo: string[];
  featuresEn: string[];
  imageUrl: string;
  productDescriptionImageUrl: string; // 제품 소개란 대표 이미지 속성 추가
  thumbnailImages: string[];
  referenceTopImage?: string;
  referenceBottomImage?: string[];
  specsKo: any[]; // JSX나 컴포넌트를 담을 수 있도록 처리
  specsEn: any[];
}

export interface Paper {
  id: number;
  titleKo: string;
  titleEn: string;
  summaryKo: string;
  summaryEn: string;
  author: string;
  date: string;
  views: number;
  downloadUrl?: string;
  youtubeUrl?: string;
  imageUrl?: string;
}

export interface Notice {
  id: number;
  titleKo: string;
  titleEn: string;
  contentKo: string;
  contentEn: string;
  author: string;
  date: string;
  views: number;
}

export const PRODUCTS: Product[] = [
  {
    id: 'prosis-tpage',
    name: 'Prosis tPAGE',
    category: 'Electrophoresis',
    descriptionKo: '단백질 SDS-PAGE 분석을 위한 Precast Tris-Glycine Polyacrylamide 젤입니다. 기존의 전기영동 방식과 호환되며 경제적입니다. Bio-Rad사의 전기영동 장비와 함께 사용할 수 있습니다.',
    descriptionEn: 'Precast Tris-Glycine Polyacrylamide gel for protein SDS-PAGE analysis. Compatible with existing systems and highly economical. Ready to use with Bio-Rad tank modules.',
   
    // ⭐️ 중요: JSX가 포함되므로 `tmacData.tsx` 파일 내에 있어야 하며 문법이 올바른지 확인
    specsKo: [
      "농도: 7.5% | 10 well / 30 uL: TP087103G | 10 well / 50 uL: TP087105G | 12 well / 20 uL: TP087122G | 15 well / 15 uL: TP087151G",
      "농도: 10%  | 10 well / 30 uL: TP010103G | 10 well / 50 uL: TP010105G | 12 well / 20 uL: TP010122G | 15 well / 15 uL: TP010151G",
      "농도: 12%  | 10 well / 30 uL: TP012103G | 10 well / 50 uL: TP012105G | 12 well / 20 uL: TP012122G | 15 well / 15 uL: TP012151G",
      "농도: 4-15%| 10 well / 30 uL: TP415103G | 10 well / 50 uL: TP415105G | 12 well / 20 uL: TP415122G | 15 well / 15 uL: TP415151G"
    ],
    specsEn: [
      "Conc: 7.5% | 10 well / 30 uL: TP087103G | 10 well / 50 uL: TP087105G | 12 well / 20 uL: TP087122G | 15 well / 15 uL: TP087151G",
      "Conc: 10%  | 10 well / 30 uL: TP010103G | 10 well / 50 uL: TP010105G | 12 well / 20 uL: TP010122G | 15 well / 15 uL: TP010151G",
      "Conc: 12%  | 10 well / 30 uL: TP012103G | 10 well / 50 uL: TP012105G | 12 well / 20 uL: TP012122G | 15 well / 15 uL: TP012151G",
      "Conc: 4-15%| 10 well / 30 uL: TP415103G | 10 well / 50 uL: TP415105G | 12 well / 20 uL: TP415122G | 15 well / 15 uL: TP415151G"
    ],
    featuresKo: [
      '표준 running buffer 사용 가능',
      '다양한 농도의 겔 (7.5, 10, 12, 15, 4-15, 4-20%), 주문제작 시 농도 선택가능',
      'Well의 개수 선택 가능',
      'BIO-RAD 사의 mini-PROTEAN Electrophoresis system과 호환',
      '개별 포장되어 있어 장기 보관 가능'
    ],
    featuresEn: [
      'Standard running buffer compatible',
      'Various gel percentages (7.5, 10, 12, 15, 4-15, 4-20%) / Custom available',
      'Flexible well number selection available',
      'Fully compatible with BIO-RAD mini-PROTEAN Electrophoresis systems',
      'Individually sealed packaging for extended shelf-life storage'
    ],
    imageUrl: prosisTpage,
    productDescriptionImageUrl: prosisTpage,
    thumbnailImages: [prosisTpage, gelGloveHand],
    referenceTopImage: gelGloveHand,
    referenceBottomImage: [prosisTpage, gelGloveHand]
  },
  {
    id: 'prosis-minipage',
    name: 'Prosis miniPAGE kit',
    category: 'Electrophoresis',
    descriptionKo: 'Prosis miniPAGE-4 수직 전기영동 시스템은 프리캐스팅 겔 또는 직접 만든 겔을 사용할 수 있으며, 한 번에 최대 4개의 겔을 독립적으로 또는 동시에 영동할 수 있도록 설계된 고효율 시스템입니다.',
    descriptionEn: 'The Prosis miniPAGE-4 vertical electrophoresis system accommodates both precast and hand-cast gels, allowing independent or simultaneous running of up to 4 gels with high efficiency.',
    specsKo: [
      '전기영동 용량: 1 ~ 4개 겔 동시 구동',
      '호환 카세트 두께: 1.0mm, 1.5mm 플레이트 완벽 지지',
      '소재: 강력한 내화학성의 투명 폴리카보네이트 사출 성형형 바디',
      '누수 방지 댐 및 실리콘 가스켓 일체형 구조'
    ],
    specsEn: [
      'Gel Capacity: Runs 1 to 4 gels simultaneously',
      'Compatible Thicknesses: Supported for 1.0mm and 1.5mm plates',
      'Material: Injection-molded clear polycarbonate for durability',
      'Leakproof sealing setup with integrated silicone gaskets'
    ],
    featuresKo: [
      '원형 클램프 인서트 방식으로 빠르고 쉬운 조립 및 락킹 가능',
      '안전 연동 덮개 장치 탑재로 고전압 상태에서의 감전 유해 차단',
      '동급 대비 우수한 냉각 격벽 디자인으로 줄 발열 현상 최소화'
    ],
    featuresEn: [
      'Circular clamp insert approach for ultra-easy assembly and locking',
      'Safety lid interlock prevents electrical hazard during high-voltage runs',
      'Excellent cooling frame structure minimizes heat and localized band smiling'
    ],
    imageUrl: prosisMinipage,
    productDescriptionImageUrl: prosisMinipage,
    thumbnailImages: [prosisMinipage],
    referenceBottomImage: [prosisTpage, gelGloveHand]
  },
  {
    id: 'prosis-minitransfer',
    name: 'Prosis miniTRANSFER kit',
    category: 'Blotting',
    descriptionKo: 'Prosis miniTRANSFER는 Western Blot 전사 과정을 빠르고 완벽하게 수행하기 위한 탱크 타입 젖은식(Wet) 전사 장치입니다. 2개의 Gel holder cassette를 동시에 안정적으로 구동할 수 있습니다.',
    descriptionEn: 'Prosis miniTRANSFER is a wet tank transfer system optimized for fast, uniform Western blot transfers. Safely processes 2 gel holder cassettes simultaneously.',
    specsKo: [
      '전사 가능 수량: 최대 2개의 겔 홀더 카세트 동시 전사',
      '수조 전극: 고품질 백금 양극 및 카본 음극 플레이트 최적 배정',
      '냉각 구조: 효율적 구동을 위한 전용 쿨링 아이스 버디 블록 동봉',
      '전사 시간: 100V 정전압에서 45분~1시간 이내 완료 용이'
    ],
    specsEn: [
      'Blot Capacity: Up to 2 gel holder cassettes simultaneously',
      'Electrodes: High-grade platinum anodes and secure carbon cathodes',
      'Cooling Aspect: Includes dedicated cooling block to maintain ambient buffer temp',
      'Transfer Time: Fully accomplished within 45 to 60 mins under 100V'
    ],
    featuresKo: [
      '컬러 식별 힌지형 카세트로 전극 방향 매칭 실수(블랙-레드) 원천 방지',
      '균일한 전기장 형성을 위한 평행 전극 플레이트 구조 설계',
      '안정적인 완충액 흐름을 지원하는 격자형 개방 프레임 도어'
    ],
    featuresEn: [
      'Color-coded hinged cassettes ensure error-free layout matching (Black-Red)',
      'Parallel electrode grids form highly uniform magnetic and electric fields',
      'Open grid style door supports optimal buffer passage'
    ],
    imageUrl: prosisMinitransfer,
    productDescriptionImageUrl: prosisMinitransfer,
    thumbnailImages: [prosisMinitransfer],
    referenceBottomImage: [prosisTpage, gelGloveHand]
  },
  {
    id: 'prosis-minihorizon',
    name: 'Prosis miniHORIZON kit',
    category: 'Electrophoresis',
    descriptionKo: 'Prosis miniHORIZON 수평 전기영동기는 DNA 및 RNA의 Agarose 겔 전기영동 분석에 최적화된 컴팩트 디자인 솔루션입니다. 겔 캐스팅 슬래브 및 컴 홀더 세트가 동봉되어 직접 제조가 쉽습니다.',
    descriptionEn: 'The Prosis miniHORIZON horizontal system is a compact, space-saving design optimized for DNA and RNA agarose gel electrophoresis. Complete with accessories for self-casting.',
    specsKo: [
      '겔 가로 세로 규격: mini 가스 캐스팅 플레이트 7cm x 10cm, 7cm x 7cm 지원',
      '최대 웰 샘플링: 단일 열에서 최대 12개 채널 영동 가능',
      '수조 규격: 콤팩트 플로우 인 체임버형 구조'
    ],
    specsEn: [
      'Gel Format: Accommodates 7cm x 10cm and 7cm x 7cm mini gel sizes',
      'Comb Profiles: Up to 12 channels per band line available',
      'Chamber Capacity: Ultra-compact, reduced buffer volume layout'
    ],
    featuresKo: [
      '전기영동 중 시료 이동을 선명히 모니터링할 수 있는 완전 투명 상부 덮개',
      'UV 투명 플라스틱 트레이 탑재로 겔 분리 없이 겔 독 데이터 촬영 가능',
      '분리형 단자 및 극성 고정형 커넥터 설계로 사용 안전 극대화'
    ],
    featuresEn: [
      'Full transparency top cover enables direct monitoring of tracking dyes',
      'UV-transmissible gel tray allows hassle-free visual transillumination',
      'Detachable terminals with single-polarity inserts ensure user safety'
    ],
    imageUrl: prosisMinihorizon,
    productDescriptionImageUrl: prosisMinihorizon,
    thumbnailImages: [prosisMinihorizon],
    referenceBottomImage: [prosisTpage, gelGloveHand]
  },
  {
    id: 'prosis-midihorizon',
    name: 'Prosis midiHORIZON kit',
    category: 'Electrophoresis',
    descriptionKo: 'Prosis midiHORIZON 수평 전기영동기는 대용량 분리 분석용으로, DNA 및 RNA의 장거리 일관 전기영동에 사용됩니다. 겔 성형 프레임과 콤 세트가 기본 동봉됩니다.',
    descriptionEn: 'Prosis midiHORIZON horizontal system is built for higher throughput and high-resolution separation of DNA and RNA. Includes standard casting frame and combs.',
    specsKo: [
      '겔 가로 세로 규격: 15cm x 10cm 또는 15cm x 15cm 지원형 와이드 트레이',
      '최대 웰 샘플링: 다채널 멀티채널 피펫 전용 콤 적용 가능 (최대 30샘플)',
      '안전 인증: 안정 전기 흐름에 맞춘 수평 레벨링 수평계 일체 탑재'
    ],
    specsEn: [
      'Gel Format: Generous 15cm x 10cm or 15cm x 15cm wide trays supported',
      'Comb Profiles: Multi-channel pipette compatible combs (up to 30 samples)',
      'Safeguards: Built-in leveling bubble indicator and adjustable legs'
    ],
    featuresKo: [
      '대용량 분석에 특화되어 플라스미드 정제 및 세그먼트 스크리닝 대폭 간소화',
      '이중 열 배치를 통한 60개 시료 동시 전개 속도 및 효율 확대',
      '고화질 전사 분석에 최적인 균일 아크릴 가림막 장치'
    ],
    featuresEn: [
      'Optimized for rapid screening of PCR fragments or restriction map analyses',
      'Dual-rack option facilitates runs containing up to 60 samples in parallel',
      'Robust acrylic construction ensures outstanding chemical resistance'
    ],
    imageUrl: prosisMidihorizon,
    productDescriptionImageUrl: prosisMidihorizon,
    thumbnailImages: [prosisMidihorizon],
    referenceBottomImage: [prosisTpage, gelGloveHand]
  },
  {
    id: 'prosis-eps300',
    name: 'Prosis ePS300',
    category: 'Electrophoresis',
    descriptionKo: 'Prosis ePS-300은 전기영동 및 트랜스퍼 분석을 위한 정전압/정전류 다기능 전원 공급 장치(Power Supply)입니다. 기존의 아날로그 전원 장치보다 훨씬 정밀하고 안전합니다.',
    descriptionEn: 'Advanced polyvalent direct current power supply for electrophoresis and gel blotting. Highly reliable, safe, and precise compared to traditional power supplies.',
    specsKo: [
      '출력 전압: 5V ~ 300V (1V 단거리 미세 튜닝 지원)',
      '출력 전류: 10mA ~ 400mA (1mA 마이크로 제어)',
      '최대 전력: 80W 복합 안전 회로',
      '출력 단자: 3세트 병렬 리드 접속 단자 지원'
    ],
    specsEn: [
      'Voltage output: 5V - 300V (adjustable by 1V increments)',
      'Current output: 10mA - 400mA (adjustable by 1mA increments)',
      'Max Power: 80W with smart over-circuit guard',
      'Terminals: 3 parallel jack output lines'
    ],
    featuresKo: [
      '고정밀 백라이트 LCD 패널 탑재로 실시간 전압, 전류, 잔여 타이머 일괄 모니터링',
      '무부하 감지, 과전류 보호, 단락 및 급격한 부하 변동 자동 차단 스마트 안전 기능',
      '간소한 버튼 인터페이스로 원터치 파라미터 세팅 및 런(Run)/스톱(Stop) 가능'
    ],
    featuresEn: [
      'High-contrast backlight LCD display shows voltage, current, and runtime simultaneously',
      'Smart sensor cuts output on sudden load changes, short-circuits, or no-load status',
      'Simplified intuitive panel enables quick setup of parameters with minimal clicks'
    ],
    imageUrl: prosisEps300,
    productDescriptionImageUrl: prosisEps300,
    thumbnailImages: [prosisEps300],
    referenceBottomImage: [prosisTpage, gelGloveHand]
  }
];

export const PAPERS: Paper[] = [
  {
    id: 6,
    titleKo: 'Horizontal Electrophoresis를 이용한 인겔 단백질 고분자 멤브레인 전개 및 결합 특성 분석',
    titleEn: 'Analysis of In-Gel Protein Polymeric Membrane Separation and Binding Kinetics using Horizontal Electrophoresis',
    summaryKo: '본 연구에서는 수평형 전기영동 시스템을 응용하여 아크릴아마이드 겔 속에서의 단백질 포획 효율을 높이고, 신호 검출 민감도를 획기적으로 개선하는 조건을 화학계 마커로 증명하였습니다.',
    summaryEn: 'This study demonstrates horizontal-pattern electrophoresis protocols in raising protein entrapment within acrylamide grids, significantly multiplying structural signal detection sensitivity.',
    author: 'Tmac Research Team',
    date: '11-08',
    views: 3335,
    downloadUrl: '#download-paper-6',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 5,
    titleKo: 'Prosis CDR BINDER A 스마트 자동 항체 반응기 홍보 및 시약 반응 시뮬레이션 동영상',
    titleEn: 'Prosis CDR BINDER A Intelligent Automated Hybridization System Promotional & Simulation Video',
    summaryKo: '순환식 세척 및 배수 원리(CDR)를 통합 기구 설계에 접목하여 타겟 블롯 멤브레인 대비 항체 접촉률을 5배 향상 시키는 하이브리드 미세 유로 채널의 가변 유속 테스트 비디오 가이드입니다.',
    summaryEn: 'Video manual showing the adjustable flow physics inside the hybrid channels of CDR BINDER A, showing how the cyclic draining mechanism increases antibody capture kinetics by 500%.',
    author: 'Tmac Marketing',
    date: '12-24',
    views: 4463,
    youtubeUrl: 'https://youtu.be/-zoENIsrMyk',
    imageUrl: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 4,
    titleKo: 'Prosis CDR BINDER 플러스 시스템: 대유량 벤치탑 자동화 장비 성능 홍보 동영상',
    titleEn: 'Prosis CDR BINDER + System: Large Capacity Benchtop Automation Utility Performance Video',
    summaryKo: '실험실 전자동 면역 항체 반응 장비인 Prosis CDR BINDER+의 다중 어레이 하우징 조작, 용매 자동 치환 연동, 신호 수집 단계까지의 세밀한 동영상 소개 자료입니다.',
    summaryEn: 'Detailed promo movie profiling high-density cell structures, automated wash exchange cycles, and signal collection routines using the fully enclosed Prosis CDR BINDER+ system.',
    author: 'Tmac Marketing',
    date: '12-24',
    views: 4322,
    youtubeUrl: 'https://youtu.be/DDa9-m_I2rY',
    imageUrl: 'https://images.unsplash.com/photo-1628863012283-709fffe24a82?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 3,
    titleKo: 'Spreader-CDR system을 적용한 고정화 항체 어레이의 균일 다중 스크리닝 효과',
    titleEn: 'Uniform Multiplexed Screening Capabilities of Immobilized Antibody Arrays via Spreader-CDR System',
    summaryKo: '티맥의 특허인 Spreader 판넬과 CDR 유로 기술을 적용해 여러 샘플을 균일하게 크로스오버 오차 없이 고속으로 형광 프로브에 전개시켜 동시 다발적 20종 이상의 단백질 복잡 분석 결과를 수치화했습니다.',
    summaryEn: 'Evaluates TMAC\'s proprietary Spreader tech in unison with CDR networks, reducing crosstalk noise by 95% and allowing flawless simultaneous screen of 20+ micro-arrayed analytes.',
    author: 'Tmac Tech Lab',
    date: '05-04',
    views: 7953,
    downloadUrl: '#download-paper-3',
    imageUrl: 'https://images.unsplash.com/photo-1579684389803-0443469a476a?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 2,
    titleKo: 'Prosis CDR BINDER B 초소형 실험실용 면역 블롯 디스펜서 동작 동영상',
    titleEn: 'Prosis CDR BINDER B Ultra-Compact Laboratory Immunoblot dispenser Operational Guide Video',
    summaryKo: '대학원생 및 개인 연구자의 좁은 흄후드 공간이나 랩 벤치에서도 부담 없는 공간 효율 대비 빠른 프로토콜 가동을 지원하는 CDR 펌프 기구 작동 홍보 동영상에 관한 설명입니다.',
    summaryEn: 'Shows off the small-footprint mechanics of the portable model B, bringing down initial antibody solution volume to an extreme 3ml per blot without compromising chemiluminescent output.',
    author: 'Tmac Media',
    date: '01-28',
    views: 17090,
    youtubeUrl: 'https://youtu.be/_yghk8MjLg4',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 1,
    titleKo: 'Rapid and efficient western blot method via direct matrix adsorption and gel capture mechanics (Electrophoresis 2018)',
    titleEn: 'Rapid and efficient western blot method via direct matrix adsorption and gel capture mechanics (Electrophoresis 2018)',
    summaryKo: '멤브레인 이동이 전혀 불필요한 인겔(In-gel) 웨스턴 블롯팅 기반 기술 논문입니다. 아가로스 물리적 교차 결합 상태에서 결합 단백질을 UV-감광성 링커로 즉시 결합 제어하여 회수 및 분리와 전극 반응 속도를 대폭 줄였습니다.',
    summaryEn: 'Anchor scientific literature detailing direct matrix gel capture. Skips membrane transfer steps completely by deploying photo-activatable linkers, reducing standard protocols under 60-mins.',
    author: 'J. Park, et al.',
    date: '12-09',
    views: 6872,
    downloadUrl: '#download-paper-1',
    imageUrl: 'https://images.unsplash.com/photo-1511113647235-fa3184135b15?auto=format&fit=crop&q=80&w=300'
  }
];

export const NOTICES: Notice[] = [
  {
    id: 1,
    titleKo: '단백질 분석 효율 높이고 비용 낮춘 산학연 공동 연구소기업 "(주)티맥" 공식 출범 및 기술 언론 보도',
    titleEn: 'Joint Public-Private Biotech Laboratory Enterprise "TMAC Co., Ltd." Officially Launched and Featured in Biotech Media',
    contentKo: '(주)티맥은 멤브레인 전사 과정 없이 아크릴아마이드 미세 겔 내에서 단백질 포획 및 반응을 완결 짓는 독자적인 "인겔 웨스턴 블롯(In-Gel Western Blot) 키트" 및 "순환 세척식 CDR 바인더" 장비의 시판에 들어갔습니다.\n\n이번 성과는 한국생명공학연구원(KRIBB)과의 긴밀한 원천 기술 이전을 성사 시킨 뒤, (주)씨맥과의 협력으로 메카트로닉스 유체 제어 엔지니어링을 결합함으로써 완성되었습니다. 연구원들의 소중한 시료 및 한 튜브에 수십 만 원에 달하는 고가 일차 항체(1st antibody) 용액 소모량을 최대 70% 이상 절감 시킬 것으로 기대됩니다.\n\n앞으로도 전세계 분자 생물학 연구자들의 더 편리하고 자동화된 내일을 약속하는 대표 글로벌 면역 블롯 브랜드가 되도록 노력하겠습니다. 많은 관심 부탁 드립니다.',
    contentEn: 'TMAC Co., Ltd. has initiated the full-market rollout of its patented "In-Gel Western Blot Kits" and "Cyclic Draining (CDR) Automated Binders" that secure macromolecular immobilization inside native gels, omitting transfer sheets.\n\nThis core breakthrough represents a technology transfer from the Korea Research Institute of Bioscience and Biotech (KRIBB) in tandem with precision fluidic engineering by CMAC. It minimizes primary antibody dilution volumes by 70%, boosting productivity for laboratories worldwide.\n\nWe commit to delivering smart automation solutions to molecular biologists globally. Thank you for your continued support.',
    author: 'Tmac Administrator',
    date: '07-18',
    views: 7258
  }
];