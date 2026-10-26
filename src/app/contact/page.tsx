import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactPanel } from "@/components/sections/ContactPanel";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" lead="Tell us about your business and we will recommend a structure." />
      <ContactPanel />
    </>
  );
}