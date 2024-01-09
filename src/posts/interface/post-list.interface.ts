export interface postInList {
  readonly postId: number;
  readonly title: string;
  readonly content: string;
  readonly view: number;
  readonly hit: number;
  readonly postCreateDate: Date;
  readonly postUpdateDate: Date;
  readonly incumbentId: number;
  readonly incumbentName: string;
  readonly incumbentImage: string;
  readonly incumbentCompanyName: string;
  readonly incumbentJobDescription: string;
  readonly studentSchool: string;
  readonly studentMajor: string;
  readonly studentId: number;
  readonly studentName: string;
  readonly studentImage: string;
}
