export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  cgpa: string;
}

export interface Certification {
  name: string;
  platform: string;
}

export const education: EducationEntry[] = [
  {
    degree: "MBA",
    field: "Business Analytics",
    institution: "Jaipuria Institute of Management",
    cgpa: "7.8",
  },
  {
    degree: "B.Tech",
    field: "Mechanical Engineering",
    institution: "Bharath Institute of Higher Education and Research",
    cgpa: "7.0",
  },
];

export const certifications: Certification[] = [
  { name: "Generative AI for Data Analysts", platform: "Udemy" },
  { name: "Data Visualization with Power BI", platform: "Great Learning" },
  { name: "Python for Machine Learning", platform: "Udemy" },
  { name: "SQL Fundamentals", platform: "Simplilearn" },
  { name: "Generative AI", platform: "10X" },
];
