import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Julius Christopher Dizon Bautista",
  initials: "JB",
  location: "Chicago, IL 60602",
  locationLink: "https://www.google.com/maps/place/Chicago,+IL",
  about:
    "Site Reliability Engineer | Lead AI, Cloud & DevOps Instructor | U.S. Marine Corps Veteran",
  summary:
    "Site Reliability Engineer, Lead AI/CloudOps instructor, and Marine Corps veteran with 15+ years building, operating, and teaching complex systems. Combines production reliability, infrastructure automation, observability, and agentic AI to deliver customer-focused solutions on scalable foundations.",
  avatarUrl: "/avatars/default.jpg",
  personalWebsiteUrl: "",
  contact: {
    email: "jdcbautista@gmail.com",
    tel: "630.346.0720",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jcdbautista",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/juliusdcbautista",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Code Platoon Veteran Training Program",
      degree: "Full Stack Development Program",
      start: "2020",
      end: "2021",
    },
    {
      school: "University of Illinois at Chicago",
      degree: "Bachelor of Fine Arts",
      start: "2008",
      end: "2012",
    },
    {
      school: "New Horizons Computer Learning Center",
      degree: "Business Productivity & Design",
      start: "2012",
      end: "2014",
    },
    {
      school: "Marine Corps Engineer School",
      degree: "Electrical Engineering Program",
      start: "2005",
      end: "2006",
    },
  ],
  work: [
    {
      company: "Enova International",
      link: "https://www.enova.com",
      badges: [],
      title: "Site Reliability Engineer II",
      location: "Chicago, IL",
      start: "2021",
      end: null,
      description: "",
      highlights: [
        "Serve as SRE captain and reliability advisor for engineering teams, guiding Service Level Management, observability, incident response, and toil reduction.",
        "Designed reusable Terraform modules and led the organization-wide Service Level Management rollout, standardizing reliability practices across teams.",
        "Built a cross-team automated job-submission pipeline that enabled non-technical representatives to deliver engineer-approved interim solutions while full product changes remained weeks to quarters away.",
        "Analyze incident and toil data to prioritize reliability improvements; support observability platforms, resiliency practices, and large-scale application migrations.",
        "Developed an SOP catalog and interactive new-hire training for internal tooling.",
      ],
    },
    {
      company: "Code Platoon",
      link: "https://www.codeplatoon.org",
      badges: ["Remote"],
      title: "Lead AI, Cloud & DevOps Instructor",
      location: "Chicago, IL (Remote)",
      start: "2023",
      end: null,
      description: "",
      highlights: [
        "Lead AI, Cloud & DevOps evening and weekend program while supporting full-stack instruction.",
        "Design and deliver live lessons, labs, and assessments covering AWS, Terraform, Docker, Kubernetes, CI/CD, observability, and LLM tooling.",
        "Coach students through code reviews and technical assessments while coordinating curriculum delivery across instructors.",
      ],
    },
  ],
  additionalExperience: [
    {
      company: "Julius Dizon Cruz Bautista Visual Arts LLC",
      badges: [],
      title: "Founder & Sole Proprietor",
      location: "Chicago, IL",
      start: "2015",
      end: "2020",
      description: "",
      highlights: [
        "Led commercial and community projects for the NIH All of Us Research Program, Packback, and the Economic Club of Chicago.",
        "Integrated NFC and RFID into interactive multimedia art installations; partnered with startups and nonprofits on digital products and prototypes.",
      ],
    },
    {
      company: "Fulton Street Collective",
      link: "https://fultonstreetcollective.com",
      badges: [],
      title: "Creative Team Lead",
      location: "Chicago, IL",
      start: "2012",
      end: "2015",
      description: "",
      highlights: [
        "Led digital marketing and community-growth programs that doubled annual profit and supported expansion into a new location.",
      ],
    },
    {
      company: "United States Marine Corps",
      link: "https://www.marines.com",
      badges: [],
      title: "Electrical Combat Engineer",
      location: "Camp Lejeune, NC",
      start: "2004",
      end: "2008",
      description: "",
      highlights: [
        "Diagnosed, repaired, and maintained electrical systems using technical manuals, schematics, and test equipment while maintaining operational readiness.",
      ],
    },
  ],
  skills: [
    {
      category: "Languages",
      skills: [
        "Python",
        "Go",
        "TypeScript/JavaScript",
        "SQL",
        "Bash",
        "C#",
        "Ruby",
      ],
    },
    {
      category: "AI & Agent Systems",
      skills: [
        "Multi-agent orchestration",
        "MCP",
        "A2A",
        "Graphiti",
        "LangChain",
        "Mem0",
        "OpenAI",
        "Anthropic",
        "Ollama",
      ],
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        "AWS",
        "Google Cloud",
        "Kubernetes",
        "Docker",
        "Terraform/HCL",
        "Ansible",
        "Chef",
      ],
    },
    {
      category: "Observability & Reliability",
      skills: [
        "Prometheus/PromQL",
        "OpenTelemetry/OTLP",
        "Grafana",
        "Datadog",
        "Splunk",
        "PagerDuty",
      ],
    },
    {
      category: "Data & Backend",
      skills: [
        "PostgreSQL",
        "Neo4j",
        "Airflow",
        "Astronomer",
        "FastAPI",
        "Django",
        ".NET",
      ],
    },
    {
      category: "Delivery & Testing",
      skills: [
        "Git/GitHub",
        "GitHub Actions",
        "CircleCI",
        "pytest",
        "unittest",
        "Jest",
        "RSpec",
        "Playwright",
      ],
    },
  ],
  certifications: [
    {
      name: "AWS Solutions Architect; Foundational C#; PCAP; JSA",
      period: "2023",
    },
    {
      name: "PCEP; JSE; WDE",
      period: "2022 - 2023",
    },
  ],
  projects: [
    {
      title: "AI Platforms & Agent Systems",
      period: "2025 - 2026",
      techStack: [
        "Multi-Agent",
        "MCP",
        "LangChain",
        "Graphiti",
        "Neo4j",
        "OpenTelemetry",
        "Grafana",
        "Datadog",
      ],
      description:
        "Stakeholder-facing multi-agent orchestration platforms with shared memory, policy controls, and end-to-end observability.",
      highlights: [
        "Built a stakeholder-facing AI orchestration UI so non-technical users can run and configure multi-agent workflows.",
        "Developed a ticket-driven multi-agent delivery platform with retries, guardrails, policy gates, and audit logs.",
        "Engineered an AI control plane with shared agent memory, model-provider routing, policy enforcement, and OpenTelemetry-to-Prometheus-to-Grafana observability using Graphiti and Neo4j.",
        "Built an AI agent for production incident support and post-incident reporting that integrates Slack, Datadog, Splunk, Jira, and Repomix.",
      ],
    },
    {
      title: "Cloud Prototyping & Startup Applications",
      period: "2023 - 2024",
      techStack: [
        "React",
        "Next.js",
        "FastAPI",
        "Terraform",
        "Ansible",
        "GitHub Actions",
      ],
      description:
        "Spec-driven prototyping and AWS deployment platform, plus production Next.js applications for early-stage startups.",
      highlights: [
        "Created a spec-driven prototyping and AWS deployment platform using React, FastAPI, Terraform, Ansible, and GitHub Actions.",
        "Designed, built, and deployed Next.js applications for two early-stage startups.",
      ],
    },
  ],
} as const;
