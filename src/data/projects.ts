export interface FeaturedProject {
  id: string;
  title: string;
  tag: string;
  thumbnail: string;
  description: string;
  impact: string;
  techStack: string[];
  deepDive: {
    problem: string;
    methodology: string;
    challenges: string;
    results: string;
    future: string;
  };
}

export interface AdditionalProject {
  id: string;
  title: string;
  description: string;
  impact: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "churn-analysis",
    title: "Customer Churn Analysis",
    tag: "Featured",
    thumbnail: "/projects/churn-analysis.svg",
    description:
      "Analyzed customer data to identify key churn drivers using SQL & Python. Built an interactive Power BI dashboard to track metrics and provide actionable insights.",
    impact: "Reduced churn risk by 15-20%",
    techStack: ["SQL", "Python", "Power BI"],
    deepDive: {
      problem:
        "The organization was experiencing a steady increase in customer churn, losing approximately 20% of its subscriber base annually. Leadership lacked visibility into which customer segments were most at risk and what factors were driving attrition. Existing reports were static, outdated, and failed to provide actionable intelligence for retention teams.",
      methodology:
        "Conducted a full-cycle analytics engagement: extracted 2+ years of transactional and behavioral data from MySQL databases, performed extensive EDA in Python (pandas, matplotlib, seaborn), engineered 30+ features including usage frequency, support ticket ratios, billing patterns, and engagement scores. Applied logistic regression and random forest classifiers to predict churn probability per customer. Validated models using cross-validation with AUC-ROC metrics.",
      challenges:
        "Data quality was a significant hurdle — multiple source systems had inconsistent customer IDs, requiring fuzzy matching and deduplication. The class imbalance (only ~18% churners) necessitated SMOTE oversampling. Stakeholder alignment was also critical: translating model outputs into business-friendly language for non-technical teams required iterative dashboard design sessions.",
      results:
        "Delivered a Power BI dashboard with real-time churn risk scoring across 5 customer segments. The retention team used the insights to launch targeted campaigns, reducing churn risk by 15-20% within the first quarter. The dashboard became a weekly review tool for the VP of Customer Success.",
      future:
        "Plan to integrate real-time streaming data via Azure Event Hubs for live churn scoring, add a recommendation engine for personalized retention offers, and expand the model to predict customer lifetime value (CLV) alongside churn probability.",
    },
  },
  {
    id: "conjoint-analysis",
    title: "Conjoint Analysis",
    tag: "Featured",
    thumbnail: "/projects/conjoint-analysis.svg",
    description:
      "Performed Conjoint Analysis to understand consumer preferences for product features. Generated utility scores and identified optimal product mix.",
    impact: "Identified key drivers of preference and optimal product mix",
    techStack: ["Python", "Excel", "Power BI"],
    deepDive: {
      problem:
        "The product team needed to understand which combination of features, pricing tiers, and packaging options would maximize customer willingness to pay and market share. Traditional survey methods were yielding inconclusive results because respondents couldn't articulate trade-offs between features.",
      methodology:
        "Designed a choice-based conjoint (CBC) study with 12 product attributes across 3-4 levels each. Fielded the survey to 500+ respondents using Confirmit. Analyzed part-worth utilities and relative importance scores using hierarchical Bayesian estimation in Python (pymc3). Simulated market share scenarios for 8 product configurations.",
      challenges:
        "Designing the conjoint exercise required careful attribute selection to avoid cognitive overload — initial designs with 15 attributes caused respondent fatigue. Reduced to 12 attributes through stakeholder workshops. HB estimation was computationally intensive, requiring GPU-accelerated processing. Communicating utility scores to non-technical product managers required custom visualizations.",
      results:
        "Identified that pricing and core feature set drove 62% of consumer preference, while premium add-ons contributed only 11%. Recommended an optimal product configuration that was projected to increase market share by 8%. The product team adopted the findings for their Q3 launch strategy.",
      future:
        "Extend the analysis with adaptive conjoint for real-time preference learning, integrate with CRM data to segment preferences by customer lifecycle stage, and build an interactive simulator for the product team to test configurations on-demand.",
    },
  },
  {
    id: "business-dashboard",
    title: "Business Performance Dashboard",
    tag: "Featured",
    thumbnail: "/projects/business-dashboard.svg",
    description:
      "Developed a KPI dashboard to track revenue, profit, and growth across regions and products. Automated data refresh and improved reporting efficiency.",
    impact: "Improved decision-making speed and KPI visibility",
    techStack: ["SQL", "Power BI", "DAX"],
    deepDive: {
      problem:
        "Executive leadership relied on weekly Excel reports compiled manually by 3 analysts, consuming 15+ hours per week. Reports were frequently delayed, contained inconsistencies across regions, and lacked drill-down capability. Decision-making was hampered by stale data and inability to compare performance across business units in real-time.",
      methodology:
        "Built an end-to-end BI solution: designed a star-schema data model in Power BI with fact tables for revenue, costs, and headcount, and dimension tables for products, regions, and time. Wrote complex DAX measures for YoY growth, rolling averages, margin analysis, and dynamic KPI thresholds. Implemented row-level security (RLS) for regional access control. Automated data refresh via scheduled gateway connections to SQL Server.",
      challenges:
        "The biggest challenge was data unification — revenue data came from SAP, cost data from Oracle, and headcount from an HR system. Built SQL-based ETL pipelines to normalize and merge data into a unified staging layer. DAX performance optimization was critical for the executive summary page, which aggregated data across 500K+ rows with 15 complex measures. Achieved sub-2-second load times through query folding and aggregation tables.",
      results:
        "Eliminated 15+ hours/week of manual reporting. Executives now access real-time KPIs via a mobile-optimized Power BI app. Regional managers use drill-through pages to identify underperforming products. The dashboard has become the single source of truth for monthly business reviews, used by 50+ stakeholders across 4 regions.",
      future:
        "Planning to add predictive revenue forecasting using Python ML models embedded in Power BI, implement anomaly detection alerts for KPI deviations, and extend the dashboard to include customer satisfaction and NPS metrics from survey data.",
    },
  },
  {
    id: "automated-etl",
    title: "Automated ETL Reporting",
    tag: "Featured",
    thumbnail: "/projects/automated-etl.svg",
    description:
      "Designed and deployed end-to-end automated ETL pipelines using SQL and Python, replacing manual Excel workflows and significantly reducing reporting turnaround time.",
    impact: "Reduced manual processing by 35%",
    techStack: ["SQL", "Python", "Power BI", "Excel"],
    deepDive: {
      problem:
        "Analysts were spending 10–12 hours per week manually extracting, transforming, and loading data from multiple source systems into Excel before any reporting could begin. This created bottlenecks, frequent human errors, and delayed delivery of critical business insights to stakeholders.",
      methodology:
        "Designed a modular ETL architecture using Python (pandas, SQLAlchemy) for data extraction and transformation, with SQL Server as the staging layer. Built parameterized stored procedures for incremental data loads, reducing processing time. Integrated automated email delivery and Power BI data refresh triggers on pipeline completion.",
      challenges:
        "Legacy source systems had no API support, requiring web scraping and ODBC connections for extraction. Handling schema drift across quarterly data dumps required dynamic column mapping logic. Ensuring zero data loss during pipeline failures necessitated a robust error logging and retry mechanism.",
      results:
        "Eliminated 35% of manual reporting effort across the analytics team. Reporting turnaround improved from 2 days to under 4 hours. Pipeline now runs unattended on a daily schedule with automated error alerts, freeing analysts to focus on insight generation rather than data wrangling.",
      future:
        "Plan to migrate the pipeline to a cloud-native architecture using Azure Data Factory, introduce dbt for transformation layer documentation, and add a data lineage tracker for governance compliance.",
    },
  },
  {
    id: "enterprise-analytics",
    title: "Enterprise Analytics Platform",
    tag: "Featured",
    thumbnail: "/projects/enterprise-analytics.svg",
    description:
      "Built a centralised enterprise analytics platform integrating SQL and Python-based ETL pipelines with multi-source data, enabling unified reporting across departments.",
    impact: "Reduced TAT by 30% across reporting cycles",
    techStack: ["SQL", "Python", "Tableau", "Power BI"],
    deepDive: {
      problem:
        "The organisation operated in data silos — each department maintained separate Excel trackers and reporting tools, with no unified view of business performance. Cross-functional reporting required manual consolidation across 6+ data sources, making company-wide analytics near-impossible within weekly reporting cycles.",
      methodology:
        "Architected a centralised data warehouse using SQL Server with a star-schema model. Built Python-based ETL pipelines to ingest data from CRM, ERP, HR, and finance systems into unified fact and dimension tables. Developed a Tableau-based self-service analytics layer and a Power BI executive dashboard for C-suite KPI visibility.",
      challenges:
        "Data governance was the primary challenge — different teams used inconsistent naming conventions, date formats, and KPI definitions. Establishing a data dictionary and enforcing schema contracts required cross-team alignment sessions. Performance tuning SQL queries across 1M+ row tables was critical to achieving sub-5-second dashboard load times.",
      results:
        "Reduced average reporting TAT by 30% across all departments. The platform now serves 80+ users across finance, operations, and product teams. Monthly business reviews shifted from static PowerPoint decks to live interactive dashboards, significantly improving data-driven decision-making velocity.",
      future:
        "Planning to extend the platform with a ML-powered anomaly detection layer for KPI deviations, integrate NLP-based query interface for business users, and migrate to a Lakehouse architecture using Azure Synapse for real-time analytics capability.",
    },
  },
];

export const additionalProjects: AdditionalProject[] = [
  {
    id: "exec-bi",
    title: "Executive BI Dashboards",
    description: "Real-time KPI monitoring for leadership teams.",
    impact: "Real-time visibility",
  },

  {
    id: "sentiment-model",
    title: "Sentiment Analysis Model",
    description: "87% ML accuracy using NLP techniques for customer feedback.",
    impact: "87% accuracy",
  },
  {
    id: "product-dashboards",
    title: "Product Performance Dashboards",
    description: "KPI tracking & executive reporting.",
    impact: "Executive insights",
  },
  {
    id: "user-sentiment",
    title: "User Sentiment Analytics",
    description: "NLP model for customer feedback insights.",
    impact: "Feedback intelligence",
  },
];
