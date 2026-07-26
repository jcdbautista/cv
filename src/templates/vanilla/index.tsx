import { RESUME_DATA } from "@/data/resume-data";
import type { WorkItem } from "@/lib/types";
import styles from "./vanilla.module.css";

/** Strip protocol and trailing slash for display, e.g. github.com/jcdbautista */
function displayUrl(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function findSocial(name: string) {
  return RESUME_DATA.contact.social.find((s) => s.name === name);
}

function period(start: string, end: string | null): string {
  return `${start} - ${end ?? "Present"}`;
}

interface EntryProps {
  item: WorkItem;
}

/** A single company/role/date header followed by its bullet list. */
function Entry({ item }: EntryProps) {
  return (
    <div>
      <div className={styles.entryHead}>
        <span>
          <span className={styles.company}>{item.company}</span>
          <span className={styles.role}> - {item.title}</span>
          {item.location ? `, ${item.location}` : ""}
        </span>
        <span className={styles.date}>{period(item.start, item.end)}</span>
      </div>
      {item.highlights && item.highlights.length > 0 && (
        <ul className={styles.bullets}>
          {item.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * Vanilla — a faithful web reproduction of the source Word résumé:
 * single column, Arial, ruled section headings, right-aligned dates.
 */
export function Vanilla() {
  const linkedin = findSocial("LinkedIn");
  const github = findSocial("GitHub");

  return (
    <main className={styles.page} id="main-content">
      {/* @page owns the physical print margins so the sheet can print edge-to-edge */}
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static @page print rule */}
      <style
        dangerouslySetInnerHTML={{
          __html: "@page { size: letter; margin: 0.58in 0.65in 0.55in; }",
        }}
      />
      <article className={styles.sheet} aria-label="Resume Content">
        {/* ---- Header ---- */}
        <h1 className={styles.name}>{RESUME_DATA.name.toUpperCase()}</h1>
        <p className={styles.subtitle}>{RESUME_DATA.about}</p>
        <p className={styles.contact}>
          <a href={`mailto:${RESUME_DATA.contact.email}`}>
            {RESUME_DATA.contact.email}
          </a>
          {" | "}
          {RESUME_DATA.contact.tel}
          {" | "}
          {RESUME_DATA.location}
        </p>
        <p className={`${styles.contact} ${styles.contactLast}`}>
          {linkedin && <a href={linkedin.url}>{displayUrl(linkedin.url)}</a>}
          {linkedin && github ? " | " : ""}
          {github && <a href={github.url}>{displayUrl(github.url)}</a>}
        </p>

        {/* ---- Summary ---- */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Summary</h2>
          <p className={styles.summary}>{RESUME_DATA.summary}</p>
        </section>

        {/* ---- Core Expertise ---- */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Core Expertise</h2>
          {RESUME_DATA.skills.map((group) => (
            <p key={group.category} className={styles.skillLine}>
              <span className={styles.skillLabel}>{group.category}:</span>{" "}
              {group.skills.join(", ")}
            </p>
          ))}
        </section>

        {/* ---- Professional Experience ---- */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Professional Experience</h2>
          {RESUME_DATA.work.map((item) => (
            <Entry key={`${item.company}-${item.start}`} item={item} />
          ))}
        </section>

        {/* ---- Selected Engineering Projects ---- */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Selected Engineering Projects</h2>
          {RESUME_DATA.projects.map((project) => (
            <div key={project.title}>
              <div className={styles.entryHead}>
                <span className={styles.company}>{project.title}</span>
                {project.period && (
                  <span className={styles.date}>{project.period}</span>
                )}
              </div>
              {project.highlights && project.highlights.length > 0 && (
                <ul className={styles.bullets}>
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* ---- Additional Experience ---- */}
        <section className={`${styles.section} ${styles.small}`}>
          <h2 className={styles.heading}>Additional Experience</h2>
          {RESUME_DATA.additionalExperience.map((item) => (
            <Entry key={`${item.company}-${item.start}`} item={item} />
          ))}
        </section>

        {/* ---- Certifications ---- */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Certifications</h2>
          {RESUME_DATA.certifications.map((cert) => (
            <div key={cert.name} className={styles.certRow}>
              <span>{cert.name}</span>
              <span className={styles.date}>{cert.period}</span>
            </div>
          ))}
        </section>

        {/* ---- Education ---- */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Education</h2>
          {RESUME_DATA.education.map((edu) => (
            <div key={edu.school} className={styles.eduRow}>
              <span>
                <span className={styles.company}>{edu.school}</span>
                <span className={styles.role}> - {edu.degree}</span>
              </span>
              <span className={styles.date}>{period(edu.start, edu.end)}</span>
            </div>
          ))}
        </section>
      </article>
    </main>
  );
}
