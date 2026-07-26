import type { StaticImageData } from "next/image";

export type ResumeIcon =
  | React.ComponentType<React.SVGProps<SVGSVGElement>>
  | StaticImageData;

export type IconType = "github" | "linkedin" | "x" | "globe" | "mail" | "phone";

export interface WorkItem {
  company: string;
  link?: string;
  badges: readonly string[];
  title: string;
  location?: string;
  start: string;
  end: string | null;
  description: string;
  highlights?: readonly string[];
}

export interface SkillGroup {
  category: string;
  skills: readonly string[];
}

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: Array<{
      name: string;
      url: string;
      icon: IconType;
    }>;
  };
  education: Array<{
    school: string;
    degree: string;
    start: string;
    end: string;
  }>;
  work: WorkItem[];
  additionalExperience: WorkItem[];
  skills: SkillGroup[];
  certifications: Array<{
    name: string;
    period: string;
  }>;
  projects: Array<{
    title: string;
    period?: string;
    techStack: readonly string[];
    description: string;
    highlights?: readonly string[];
    link?: {
      label: string;
      href: string;
    };
  }>;
}
