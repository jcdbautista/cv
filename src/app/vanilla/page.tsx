import type { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { ResumeShell } from "@/templates/resume-shell";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - Resume`,
  description: RESUME_DATA.about,
};

export default function VanillaResumePage() {
  return <ResumeShell active="vanilla" />;
}
