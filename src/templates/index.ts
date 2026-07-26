import type { ComponentType } from "react";
import { FrenchVanilla } from "./french-vanilla";
import { Vanilla } from "./vanilla";

export interface TemplateMeta {
  /** Human-readable label shown in the switcher */
  label: string;
  /** One-line description of the look */
  description: string;
  /** Route this template is served at (each template is its own static page) */
  path: string;
  Component: ComponentType;
}

/**
 * Registry of available résumé layouts. Each template is a standalone static
 * route so the content is server-rendered into the HTML (works without JS).
 * Add a new entry here plus a matching `src/app/<path>/page.tsx`.
 */
export const TEMPLATES = {
  "french-vanilla": {
    label: "French Vanilla",
    description: "Styled cards, badges, and mono accents",
    path: "/",
    Component: FrenchVanilla,
  },
  vanilla: {
    label: "Vanilla",
    description: "Clean single column, matches the Word document",
    path: "/vanilla",
    Component: Vanilla,
  },
} satisfies Record<string, TemplateMeta>;

export type TemplateId = keyof typeof TEMPLATES;

export const DEFAULT_TEMPLATE: TemplateId = "french-vanilla";
