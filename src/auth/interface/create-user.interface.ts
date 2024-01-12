export interface CreateIncumbentUserArgs {
  email: string;
  password: string;
  name: string;
  age: number;
  gender: string;
  image: string;
  major: string;
  school: string;
  jobDescription: string;
  companyName: string;
  companyWelfare: string;
  companyLocation: string;
}

export interface CreateStudentUserArgs {
  email: string;
  password: string;
  name: string;
  age: number;
  gender: string;
  image: string;
  totalGrade: number;
  major: string;
  school: string;
  wishJobDescription: string;
  wishCompanyName: string;
  wishCompanyWelfare: string;
  wishCompanyLocation: string;
}
