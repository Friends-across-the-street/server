export interface RecommendRate {
  univRate: Rate;
  companyRate: Rate;
  jobRate: Rate;
}

export type Rate = 1 | 2 | 3;
