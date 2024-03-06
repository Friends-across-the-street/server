import { dayAndNight } from 'prisma/generated/mysql';

export interface AddAdditionalInfoForIncumbentArgs {
  jobDescription: string;
  major: string;
  majorDayAndNight: dayAndNight;
  school: string;
  schoolBranch: string;
  companyName: string;
  companyWelfare?: string;
  companyLocation: string;
}

export interface AddAdditionalInfoForStudentArgs {
  major: string;
  majorDayAndNight: dayAndNight;
  school: string;
  schoolBranch: string;
  wishJobDescription: string;
  wishCompanyName: string;
  wishCompanyWelfare?: string;
  wishCompanyLocation: string;
}
