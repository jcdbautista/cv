"use client";

import { useSearchParams } from "next/navigation";
import { resolveTemplate, TEMPLATES } from "./index";
import { TemplateSwitcher } from "./template-switcher";

/**
 * Client-side layout selector. Reads `?template=<id>` from the URL so the
 * whole app can be statically exported (no server-side searchParams).
 */
export function ResumeView() {
  const params = useSearchParams();
  const active = resolveTemplate(params.get("template"));
  const { Component } = TEMPLATES[active];

  return (
    <>
      <TemplateSwitcher active={active} />
      <Component />
    </>
  );
}
