import Link from "next/link";
import { TEMPLATES, type TemplateId } from "./index";

interface TemplateSwitcherProps {
  active: TemplateId;
}

/**
 * Small, print-hidden control for switching résumé layouts.
 * Each option is a plain link to `?template=<id>` so state lives in the URL.
 */
export function TemplateSwitcher({ active }: TemplateSwitcherProps) {
  const ids = Object.keys(TEMPLATES) as TemplateId[];

  return (
    <nav
      aria-label="Résumé layout"
      className="fixed right-3 top-3 z-50 flex items-center gap-1 rounded-full border border-black/10 bg-white/90 p-1 text-xs shadow-sm backdrop-blur print:hidden dark:border-white/15 dark:bg-neutral-900/90"
    >
      {ids.map((id) => {
        const isActive = id === active;
        return (
          <Link
            key={id}
            href={`/?template=${id}`}
            scroll={false}
            title={TEMPLATES[id].description}
            aria-current={isActive ? "page" : undefined}
            className={
              isActive
                ? "rounded-full bg-black px-3 py-1 font-medium text-white dark:bg-white dark:text-black"
                : "rounded-full px-3 py-1 text-black/70 hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/10"
            }
          >
            {TEMPLATES[id].label}
          </Link>
        );
      })}
    </nav>
  );
}
