export interface Tool {
  name: string;
  icon: string;
  learning?: boolean;
}

export interface SkillArea {
  name: string;
}

export const tools: Tool[] = [
  { name: "SQL", icon: "database" },
  { name: "Python", icon: "code-2" },
  { name: "Power BI", icon: "bar-chart-3" },
  { name: "Tableau", icon: "pie-chart" },
  { name: "Excel", icon: "table-2" },
  { name: "R", icon: "sigma" },
  { name: "Alteryx", icon: "workflow" },
  { name: "Confirmit", icon: "clipboard-check" },
  { name: "AWS", icon: "cloud", learning: true },
];

export const skillAreas: SkillArea[] = [
  { name: "Data Warehousing" },
  { name: "KPI Design" },
  { name: "Funnel Analysis" },
  { name: "A/B Testing" },
  { name: "User Insights" },
  { name: "NLP Modeling" },
  { name: "Sentiment Analysis" },
];

export const keyStrengths = [
  {
    title: "Data Visualization & BI Architecture",
    description:
      "Designing interactive dashboards and BI solutions using Power BI, Tableau, and custom visualization frameworks that transform raw data into actionable executive insights.",
  },
  {
    title: "DAX Calculations & Data Modeling",
    description:
      "Building complex DAX measures, star-schema data models, and calculated tables for enterprise-grade reporting with optimized query performance.",
  },
  {
    title: "Scalable Reporting & KPI Frameworks",
    description:
      "Architecting KPI hierarchies, automated reporting pipelines, and executive scorecards that scale across regions and business units.",
  },
  {
    title: "Advanced SQL & ETL Pipeline Development",
    description:
      "Writing complex SQL queries, building ETL pipelines for data transformation, and ensuring 99%+ data accuracy across multiple source systems.",
  },
  {
    title: "Product Analytics (A/B Testing, User Journey Mapping)",
    description:
      "Designing and analyzing A/B experiments, mapping user journeys, funnel analysis, and deriving product insights that drive feature prioritization and growth.",
  },
  {
    title: "Stakeholder Collaboration",
    description:
      "Translating complex analytical findings into clear, actionable narratives for non-technical stakeholders, from VPs to cross-functional teams across global offices.",
  },
];
