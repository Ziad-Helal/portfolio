export interface CourseDemo {
  id: string;
  name: string;
  institution: string;
  description?: string;
  hours?: number;
  enrolledAt?: Date;
  completedAt?: Date;
}
