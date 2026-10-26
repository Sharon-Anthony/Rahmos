import { ContactPanel } from "./ContactPanel";

type Props = { heading?: string; withDetails?: boolean };

export function Enquiry({ heading = "Tell us what you are planning" }: Props) {
  return <ContactPanel heading={heading} overlap={false} />;
}