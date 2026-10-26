export type ProcessIcon = "talk" | "route" | "licence" | "passport" | "growth";

export const process = [
  { label: "Consultation", icon: "talk", title: "Free consultation & requirements", text: "We understand your business activity, ownership structure, visa needs and budget." },
  { label: "Structure", icon: "route", title: "Structure & jurisdiction recommendation", text: "Clear options and costs (mainland, free zone or offshore) with a tailored plan." },
  { label: "Incorporation", icon: "licence", title: "Company incorporation", text: "Trade name, approvals, licence issuance and registration documents, handled end-to-end." },
  { label: "Visas & bank", icon: "passport", title: "Visas & bank account", text: "Investor and employment visas, and corporate bank account opening support." },
  { label: "Growth", icon: "growth", title: "Ongoing compliance & growth", text: "Accounting, VAT & corporate tax, renewals and advisory as your business grows." },
] as const satisfies ReadonlyArray<{ label: string; icon: ProcessIcon; title: string; text: string }>;