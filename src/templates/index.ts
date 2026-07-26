import type { ComponentType } from "react";
import { FrenchVanilla } from "./french-vanilla";
import { Vanilla } from "./vanilla";

export interface TemplateMeta {
  /** Human-readable label shown in the switcher */
  label: string;
  /** One-line description of the look */
  description: string;
  Component: ComponentType;
}

/**
 * Registry of available résumé layouts. Add a new entry here to make a
 * new template selectable via `?template=<id>`.
 */
export const TEMPLATES = {
  "french-vanilla": {
    label: "French Vanilla",
    description: "Styled cards, badges, and mono accents",
    Component: FrenchVanilla,
  },
  vanilla: {
    label: "Vanilla",
    description: "Clean single column, matches the Word document",
    Component: Vanilla,
  },
} satisfies Record<string, TemplateMeta>;

export type TemplateId = keyof typeof TEMPLATES;

export const DEFAULT_TEMPLATE: TemplateId = "french-vanilla";

export function isTemplateId(value: unknown): value is TemplateId {
  return typeof value === "string" && value in TEMPLATES;
}

export function resolveTemplate(value: unknown): TemplateId {
  return isTemplateId(value) ? value : DEFAULT_TEMPLATE;
}
