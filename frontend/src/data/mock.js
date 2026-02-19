// Mock data for Davidson Okpeta's Data Analyst Portfolio

export const personalInfo = {
  name: "Davidson Okpeta",
  title: "Senior Data Analyst",
  tagline: "Transforming Raw Data into Actionable Stories",
  description: "With years of experience in tech, I transform raw data into actionable stories that move teams from 'what happened?' to 'what's next?' I specialise in predictive modelling, SQL optimisation, and building dashboards that even non-technical stakeholders can love. Whether I'm uncovering hidden customer trends or streamlining processes to save 20+ hours weekly, my superpower is making data feel less like a puzzle and more like a roadmap.",
  email: "Davidsonokpeta@gmail.com",
  linkedin: "https://linkedin.com/in/davidsonokpeta",
  github: "https://github.com/davidsonokpeta",
  phone: "+447907052077",
  medium: "https://medium.com/@okpetaikhazuangbe",
  location: "London, UK",
  profileImage: "/executive-dave.jpeg"
};

export const stats = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Hours Saved Weekly", value: 20, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" }
];

export const services = [
  {
    id: 1,
    title: "Unlock Market Value with Data-Driven Insights",
    description: "As a Senior Data Analyst, I help organizations like yours unlock hidden value in your market. I work with you to transform complex data into actionable intelligence that informs strategic decisions, drives revenue growth, and optimizes market positioning. Let's uncover opportunities to boost your market value and propel your business forward.",
    icon: "TrendingUp"
  },
  {
    id: 2,
    title: "Balance Growth with Data Insights",
    description: "As a Senior Data Analyst, I help organizations like yours navigate the challenges of growth while maintaining balance. I work with you to harness data insights that inform strategic decisions, drive efficiency, and optimize resources, identify opportunities to streamline processes and reduce complexity and provide clarity on performance metrics, forecasting, and risk management.",
    icon: "Scale"
  },
  {
    id: 3,
    title: "Unlock Growth with Data-Driven Insights",
    description: "As a seasoned Data Analyst, I've helped companies like yours uncover hidden opportunities and drive business growth. Let's partner to transform your data into actionable insights that inform strategic decisions, optimize processes, and fuel your expansion.",
    icon: "Rocket"
  },
  {
    id: 4,
    title: "Echoing the Beat",
    description: "I've been decoding trend-signals alongside seasoned Data Analysts like yourself, and I'm excited to share how my expertise can amplify your organization's data narrative. With a proven track record of uncovering hidden patterns and driving business outcomes, I'm ready to dive into your most pressing challenges.",
    icon: "Target"
  }
];

export const skills = [
  {
    id: 1,
    name: "SQL",
    category: "Database",
    proficiency: 95,
    description: "Advanced SQL optimization and complex query design"
  },
  {
    id: 2,
    name: "Tableau",
    category: "Visualization",
    proficiency: 90,
    description: "Interactive dashboards and data storytelling"
  },
  {
    id: 3,
    name: "Power BI",
    category: "Visualization",
    proficiency: 92,
    description: "Business intelligence and reporting solutions"
  },
  {
    id: 4,
    name: "Excel",
    category: "Analysis",
    proficiency: 95,
    description: "Advanced analytics, pivot tables, and automation"
  }
];

export const projects = [
  {
    id: 1,
    title: "Estimated Christmas Spending",
    category: "Dashboard",
    tools: ["Power BI", "SQL"],
    description: "This dashboard provides an interactive analysis of estimated Christmas spending from 2020 to 2024. It highlights key performance indicators, including total spending and discounts, with year-on-year comparisons. Monthly time-series charts reveal trends, seasonality, and spending fluctuations. Segmented visuals compare spending and discounts by region, category, and age group. Dynamic filters enable drill-down analysis to support data-driven decision-making.",
    image: "https://davidsonokpeta-source.github.io/Dave-s-Portfolio/images/Sales.jpg",
    metrics: {
      impact: "15% cost reduction",
      timeframe: "2020-2024"
    }
  },
  {
    id: 2,
    title: "Churn Analysis",
    category: "Analysis",
    tools: ["Tableau", "SQL"],
    description: "This churn dashboard presents an overall snapshot of customer attrition, financial performance, and salary behavior. It highlights key indicators such as a 36% churn rate, total salary of £43M, and a balance of £31.4M for quick assessment. The visualizations explore relationships between customer churn score, gender, and geography to identify high-risk segments.",
    image: "https://davidsonokpeta-source.github.io/Dave-s-Portfolio/images/Screenshot%202025-12-25%20210759.png",
    metrics: {
      impact: "36% churn rate identified",
      timeframe: "Ongoing"
    }
  },
  {
    id: 3,
    title: "Interactive Dashboard",
    category: "Dashboard",
    tools: ["Excel"],
    description: "This interactive Excel dashboard summarizes key performance indicators including total sales, total quantity, and average discount for high-level monitoring. It uses time-series analysis to track sales trends across order dates and comparative bar charts to evaluate regional performance. Dimensional slicing by region, customer, and salesperson enables drill-down analysis and segmentation.",
    image: "https://davidsonokpeta-source.github.io/Dave-s-Portfolio/images/Screenshot%202025-10-05%20100911.png",
    metrics: {
      impact: "Real-time insights",
      timeframe: "Q1-Q4 2024"
    }
  },
  {
    id: 4,
    title: "Superstore Dashboard",
    category: "Dashboard",
    tools: ["Tableau", "SQL"],
    description: "This dashboard provides a high-level overview of a sample superstore's analysis. It displays total sales of $2,297,200.86 and a total profit of $286,397.02. The dashboard also shows sales broken down by category (Technology, Furniture, Office Supplies), segment (Consumer, Corporate, Home Office), order dates, and region (West, East, Central, South). Key performance indicators include a total quantity of 3787 and an average discount of $0.16.",
    image: "https://davidsonokpeta-source.github.io/Dave-s-Portfolio/images/Screenshot%202025-07-09%20195351.png",
    metrics: {
      impact: "$2.3M sales tracked",
      timeframe: "2024"
    }
  },
  {
    id: 5,
    title: "End of Year Sales",
    category: "Analysis",
    tools: ["Power BI", "Excel"],
    description: "The dashboard indicates solid sales growth for Tesco UK in 2023, led by strong order volumes and improving customer value. Fresh Produce is the top-selling category, with London contributing the highest regional sales. Monthly performance remains stable with a clear year-end uplift, reflecting seasonal demand and effective sales strategies.",
    image: "https://davidsonokpeta-source.github.io/Dave-s-Portfolio/images/End%20of%20year%20sales.jpeg",
    metrics: {
      impact: "Year-end uplift identified",
      timeframe: "2023"
    }
  },
  {
    id: 6,
    title: "NNPC Import & Export",
    category: "Analysis",
    tools: ["Power BI", "SQL"],
    description: "The NNPC Import & Export Dashboard for 2024 shows a positive trade balance of $9.7 billion, with exports totaling $22.5 billion and imports at $12.8 billion. Export volumes peaked mid-year, consistently surpassing imports. India led as the top export destination, followed by European and Asian countries. The South region of Nigeria accounted for the highest import value. Overall, the data reflects strong export performance and regional import disparities.",
    image: "https://davidsonokpeta-source.github.io/Dave-s-Portfolio/images/NNPC%20Export%20&%20Import.jpeg",
    metrics: {
      impact: "$9.7B trade balance",
      timeframe: "2024"
    }
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechCorp",
    content: "Davidson's insights transformed how we understand our customer data. His dashboards are both beautiful and actionable.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Head of Analytics, RetailPro",
    content: "Outstanding SQL optimization work that reduced our query times by 70%. A true professional.",
    rating: 5
  }
];