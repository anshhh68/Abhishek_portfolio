export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "acuity-pm",
    role: "Project Manager – Market Research & Analytics",
    company: "Acuity Analytics",
    period: "Feb 2025 – Present",
    current: true,
    bullets: [
      "Led multi-region analytics programs, improving workflow efficiency by 20%",
      "Designed BI dashboards and KPI frameworks for executive decision-making",
      "Coordinated global vendor panels including CInt and Prime Panels",
      "Implemented data governance and validation frameworks improving data reliability by ~30%",
      "Delivered executive dashboards and insight presentations for stakeholders",
    ],
  },
  {
    id: "acuity-da",
    role: "Business Data Analyst",
    company: "Acuity Knowledge Partners",
    period: "May 2022 – Feb 2025",
    current: false,
    bullets: [
      "Built Power BI and Tableau dashboards used by leadership teams for market intelligence",
      "Developed SQL-based ETL pipelines improving reporting efficiency by ~40%",
      "Performed statistical analysis using Python and R for investment research insights",
      "Automated reporting and validation processes reducing manual effort by ~35%",
      "Ensured 99% reporting accuracy by resolving complex data quality issues",
    ],
  },
];
