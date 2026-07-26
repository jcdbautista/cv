import { RESUME_DATA } from "@/data/resume-data";
import { generateResumeStructuredData } from "@/lib/structured-data";
import { TEMPLATES, type TemplateId } from "./index";
import { TemplateSwitcher } from "./template-switcher";

interface ResumeShellProps {
  active: TemplateId;
}

/**
 * Shared server-rendered wrapper: JSON-LD, the screen-reader heading, the
 * layout switcher, and the selected template. Rendered into static HTML.
 */
export function ResumeShell({ active }: ResumeShellProps) {
  const structuredData = generateResumeStructuredData();
  const { Component } = TEMPLATES[active];

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

      <TemplateSwitcher active={active} />
      <Component />
    </>
  );
}
