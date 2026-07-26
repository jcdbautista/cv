import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import type { SkillGroup } from "@/lib/types";
import { cn } from "@/lib/utils";

type Skills = readonly string[];

interface SkillsListProps {
  skills: Skills;
  className?: string;
}

/**
 * Renders a list of skills as badges
 */
function SkillsList({ skills, className }: SkillsListProps) {
  return (
    <ul
      className={cn("flex list-none flex-wrap gap-1 p-0", className)}
      aria-label="List of skills"
    >
      {skills.map((skill) => (
        <li key={skill}>
          <Badge className="print:text-[10px]" aria-label={`Skill: ${skill}`}>
            {skill}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface SkillGroupItemProps {
  group: SkillGroup;
}

/**
 * Renders a single labeled category of skills
 */
function SkillGroupItem({ group }: SkillGroupItemProps) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-sm font-semibold print:text-[12px]">
        {group.category}
      </h3>
      <SkillsList skills={group.skills} />
    </div>
  );
}

interface SkillsProps {
  skills: readonly SkillGroup[];
  className?: string;
}

/**
 * Core Expertise section component
 * Displays professional skills grouped into labeled categories
 */
export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        Core Expertise
      </h2>
      <div className="flex flex-col gap-3 print:gap-2">
        {skills.map((group) => (
          <SkillGroupItem key={group.category} group={group} />
        ))}
      </div>
    </Section>
  );
}
