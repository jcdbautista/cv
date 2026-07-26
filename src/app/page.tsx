import type { Metadata } from "next";
import { Suspense } from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { generateResumeStructuredData } from "@/lib/structured-data";
import { ResumeView } from "@/templates/resume-view";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - Resume`,
  description: RESUME_DATA.about,
  openGraph: {
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
  },
};

export default function ResumePage() {
  const structuredData = generateResumeStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe for JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="sr-only">
        <h1>{RESUME_DATA.name}&apos;s Resume</h1>
      </div>

      <Suspense>
        <ResumeView />
      </Suspense>
    </>
  );
}
