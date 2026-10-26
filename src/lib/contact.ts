import { site } from "@/content/site";

const isSet = (v: string) => v !== "TODO" && v.trim() !== "";

export const contactLinks = {
  phone: isSet(site.contact.phone) ? `tel:${site.contact.phone.replace(/\s/g, "")}` : null,
  email: isSet(site.contact.email) ? `mailto:${site.contact.email}` : null,
  whatsapp: isSet(site.contact.whatsapp) ? `https://wa.me/${site.contact.whatsapp}` : null,
};
