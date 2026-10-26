import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicesList } from "@/components/sections/ServicesList";
import { Process } from "@/components/sections/Process";
import { Enquiry } from "@/components/sections/Enquiry";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services" lead="Setup, visas, banking, accounting and tax under one roof." />
      <ServicesList lead="Each service can be taken on its own or as part of a full setup." cta={false} />
      <Process />
      <Enquiry heading="Not sure which service you need?" />
    </>
  );
}
