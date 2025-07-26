export type EducationalDegree = "Bachelor";

export interface EducationDemo {
  id: string;
  university: string;
  college: string;
  degree: EducationalDegree;
  major: string;
  graduatedAt?: Date;
}
