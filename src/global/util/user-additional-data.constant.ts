export enum companyScaleDict {
  중견기업 = 'mid-sized business',
  대기업 = 'big-sized business',
}

export enum univKindDict {
  대학 = 'university',
  전문대학 = 'community college',
}

export enum univLocDict {
  경기 = 'Gyeonggi-do',
  인천 = 'Incheon',
  서울 = 'Seoul',
  충남 = 'Chungcheongnam-do',
  경남 = 'Gyeongsangnam-do',
  부산 = 'Busan',
  충북 = 'Chungcheongbuk-do',
  대전 = 'Daejeon',
  대구 = 'Daegu',
  전북 = 'Jeollabuk-do',
  경북 = 'Gyeongsangbuk-do',
  광주 = 'Gwangju',
  제주 = 'Jeju',
  강원 = 'Gangwon-do',
  세종 = 'Chungcheongnam-do',
  //  세종시는 생긴지가 얼마되지 않아서 오류를 발생시킬 수 있기에 충청남도에 편입
  전남 = 'Jeollanam-do',
  울산 = 'Ulsan',
}

export enum univMainBranchDict {
  본교 = 'flagship campus',
  분교 = 'satellite campus',
  제2캠퍼스 = 'satellite campus',
  제3캠퍼스 = 'satellite campus',
  제4캠퍼스 = 'satellite campus',
}

export enum univDayBightDict {
  주간 = 'day education',
  야간 = 'night education',
  원격 = 'distance education',
  계절제 = 'day education',
}

export enum majorFieldDict {
  인문ㆍ사회계열 = 'liberal arts',
  공학계열 = 'STEM',
  자연과학계열 = 'STEM',
  예ㆍ체능계열 = 'Fine Arts and Athletics',
  의학계열 = 'Medical field', // drop 예정
}

export enum educationTypeDict {
  석사 = "master's degree",
  학석사통합 = "master's degree",
  학사 = 'bachelor degree',
  전문학사 = 'associate degree',
  전문기술석사 = 'bachelor degree', // 일반적으로 전문대에서 석사를 딴 경우 4년제 학사로 본다.
  박사 = "doctor's degree",
  석박사통합 = "doctor's degree",
}
