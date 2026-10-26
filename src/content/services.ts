export type Service = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
};

export const services: Service[] = [
  {
    slug: "company-setup",
    title: "Company setup & formation",
    summary:
      "End-to-end incorporation across UAE mainland and free zone jurisdictions: trade name reservation, initial approval, licensing and company registration, plus offshore structures where suitable.",
    tags: ["Mainland", "Free zone", "Offshore"],
  },
  {
    slug: "visa-processing",
    title: "Visa processing",
    summary:
      "Investor, partner and employment visa services: entry permits, medical testing, Emirates ID, visa stamping and residency renewals, managed from start to finish.",
    tags: ["Investor", "Employment", "Family"],
  },
  {
    slug: "bank-accounts",
    title: "Bank account processing",
    summary:
      "Corporate bank account opening support: document preparation, bank selection and introductions, KYC coordination and follow-up until the account is active.",
    tags: ["KYC support", "Bank liaison"],
  },
  {
    slug: "accounting",
    title: "Accounting & bookkeeping",
    summary:
      "Ongoing accounting and bookkeeping aligned with UAE standards, plus management reporting that keeps owners informed and audit-ready.",
    tags: ["Bookkeeping", "Management reports"],
  },
  {
    slug: "tax-advisory",
    title: "Tax advisory: VAT & corporate tax",
    summary:
      "VAT registration and filing, UAE Corporate Tax registration and compliance, transfer pricing guidance where relevant, and FTA liaison on your behalf.",
    tags: ["VAT", "Corporate tax", "FTA"],
  },
  {
    slug: "consulting-compliance",
    title: "Management consulting & compliance",
    summary:
      "Corporate secretarial and PRO services, licence renewals, establishment card processing, and management advisory to support structure, growth and governance decisions.",
    tags: ["PRO", "Renewals", "Advisory"],
  },
];
