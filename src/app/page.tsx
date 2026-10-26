import { Hero } from "@/components/sections/Hero";
import { ServicesList } from "@/components/sections/ServicesList";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { Coverage } from "@/components/sections/Coverage";
import { Enquiry } from "@/components/sections/Enquiry";
import { CallBand } from "@/components/sections/CallBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Coverage />
      <CallBand />
      <ServicesList title="What we do" />

      <WhyUs />
      <Process />
      <Enquiry />
    </>
  );
}
