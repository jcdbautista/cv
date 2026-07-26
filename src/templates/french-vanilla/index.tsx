import { Certifications } from "@/app/components/certifications";
import { Education } from "@/app/components/education";
import { Header } from "@/app/components/header";
import { Projects } from "@/app/components/projects";
import { Skills } from "@/app/components/skills";
import { Summary } from "@/app/components/summary";
import { WorkExperience } from "@/app/components/work-experience";
import { CommandMenu } from "@/components/command-menu";
import { RESUME_DATA } from "@/data/resume-data";

/**
 * Transform social links for command menu
 */
function getCommandMenuLinks() {
  const links = [];

  if (RESUME_DATA.personalWebsiteUrl) {
    links.push({
      url: RESUME_DATA.personalWebsiteUrl,
      title: "Personal Website",
    });
  }

  return [
    ...links,
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

/**
 * French Vanilla — the styled, card-and-badge layout (shadcn/ui look).
 * The richer, more designed take on the résumé.
 */
export function FrenchVanilla() {
  return (
    <main
      className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16"
      id="main-content"
    >
      <section
        className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4 dark:bg-background"
        aria-label="Resume Content"
      >
        <div className="animate-fade-in" style={{ animationDelay: "0ms" }}>
          <Header />
        </div>

        <div className="space-y-8 print:space-y-4">
          <div className="animate-fade-in" style={{ animationDelay: "75ms" }}>
            <Summary summary={RESUME_DATA.summary} />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "150ms" }}>
            <Skills skills={RESUME_DATA.skills} />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "225ms" }}>
            <WorkExperience
              work={RESUME_DATA.work}
              title="Professional Experience"
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Projects projects={RESUME_DATA.projects} />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "375ms" }}>
            <WorkExperience
              work={RESUME_DATA.additionalExperience}
              title="Additional Experience"
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "450ms" }}>
            <Certifications certifications={RESUME_DATA.certifications} />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "525ms" }}>
            <Education education={RESUME_DATA.education} />
          </div>
        </div>
      </section>

      <nav className="print:hidden" aria-label="Quick navigation">
        <CommandMenu links={getCommandMenuLinks()} />
      </nav>
    </main>
  );
}
