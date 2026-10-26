// Company-wide facts. Anything marked TODO is not in the brochure and must be supplied by the client.
export const site = {
  name: "Rahmos Consultancies FZC LLC",
  shortName: "Rahmos",
  descriptor: "Corporate Services & Management Consultancy",
  tagline: "Your trusted partner for company setup, compliance & business growth across the GCC.",
  founded: 2026,
  hq: "Dubai, United Arab Emirates",
  entityType: "Free Zone Company (FZC LLC)",
  coreBusiness: "CSP & Management Consulting",
  coverage: "UAE & GCC",
  contact: {
    phone: "TODO",       // e.g. +971 X XXX XXXX
    whatsapp: "TODO",    // digits only, e.g. 9715XXXXXXXX
    email: "TODO",
    address: "TODO",
  },
  social: {
  linkedin: "https://www.linkedin.com/company/your-page",
  instagram: "https://www.instagram.com/your-page",
  facebook: "https://www.facebook.com/your-page",
  x: "",
} as Record<string, string>,// linkedin, instagram... add when available
  disclaimer:
    "This site is for general information only and does not constitute legal, tax or investment advice.",
} as const;

export const nav: ReadonlyArray<{ label: string; href: string; dropdown?: boolean }> = [
  { label: "Services", href: "/services/", dropdown: true },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const heroFacts = [
  { label: "Based in", value: "Dubai, United Arab Emirates" },
  { label: "Operating", value: "Across the GCC Region" },
  { label: "Focus", value: "CSP · Management Consulting" },
] as const;


