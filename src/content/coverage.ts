export type CoverageIcon = "uae" | "saudi" | "qatar" | "kuwait" | "bahrain" | "oman";

export const coverage = {
  intro:
    "Headquartered in Dubai and working across the Gulf region, we support cross-border setups and regional expansion.",
  note: "Core operations in the UAE. Regional support and referral network across GCC markets.",
  // Note: the brochure flags "adjust scope of services per market". Confirm with client before launch.
  markets: [
    { name: "United Arab Emirates", code: "UAE", icon: "uae", role: "Headquarters, Dubai" },
    { name: "Saudi Arabia", code: "KSA", icon: "saudi", role: "Regional support" },
    { name: "Qatar", code: "QAT", icon: "qatar", role: "Regional support" },
    { name: "Kuwait", code: "KWT", icon: "kuwait", role: "Regional support" },
    { name: "Bahrain", code: "BHR", icon: "bahrain", role: "Regional support" },
    { name: "Oman", code: "OMN", icon: "oman", role: "Regional support" },
  ],
} as const satisfies {
  intro: string;
  note: string;
  markets: ReadonlyArray<{ name: string; code: string; icon: CoverageIcon; role: string }>;
};