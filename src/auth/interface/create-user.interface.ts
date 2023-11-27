export interface CreateIncumbentUserArgs {
  email: string;
  password: string;
  name: string;
  age: number;
  gender: string;
  image: string;
  major: string;
  school: string;
  job_description: string;
  company_name: string;
  company_welfare: string;
  company_location: string;
}

export interface CreateStudentUserArgs {
  email: string;
  password: string;
  name: string;
  age: number;
  gender: string;
  image: string;
  total_grade: number;
  major: string;
  school: string;
  wish_job_description: string;
  wish_company_name: string;
  wish_company_welfare: string;
  wish_company_location: string;
}
