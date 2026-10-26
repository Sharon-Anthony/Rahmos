import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { getServiceDetail } from "@/content/serviceDetails";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { Enquiry } from "@/components/sections/Enquiry";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = getServiceDetail(slug);
  if (!service || !detail) return {};
  return { title: service.title, description: detail.intro };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const i = services.findIndex((s) => s.slug === slug);
  const detail = getServiceDetail(slug);
  if (i < 0 || !detail) notFound();

  return (
    <>
      <ServiceDetail
        service={services[i]}
        detail={detail}
        prev={services[(i - 1 + services.length) % services.length]}
        next={services[(i + 1) % services.length]}
      />
      <Enquiry heading={`Ready to talk about ${services[i].title.toLowerCase()}?`} />
    </>
  );
}