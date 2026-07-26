import { Card, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Certification = (typeof RESUME_DATA)["certifications"][number];

interface CertificationItemProps {
  certification: Certification;
}

/**
 * Individual certification row component
 */
function CertificationItem({ certification }: CertificationItemProps) {
  const { name, period } = certification;

  return (
    <Card className="border-none">
      <CardHeader className="py-0">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="font-mono text-sm leading-snug text-foreground/80 print:text-[12px]">
            {name}
          </h3>
          <div className="text-sm tabular-nums text-gray-500">{period}</div>
        </div>
      </CardHeader>
    </Card>
  );
}

interface CertificationsProps {
  certifications: (typeof RESUME_DATA)["certifications"];
}

/**
 * Certifications section component
 */
export function Certifications({ certifications }: CertificationsProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="certifications-section">
        Certifications
      </h2>
      <div
        className="space-y-2"
        role="feed"
        aria-labelledby="certifications-section"
      >
        {certifications.map((item) => (
          <article key={item.name}>
            <CertificationItem certification={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
