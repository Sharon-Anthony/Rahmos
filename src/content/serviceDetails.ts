export type ServiceDetail = {
  slug: string;
  eyebrow: string;
  headline: string;
  intro: string;
  facts: { label: string; value: string }[];
  included: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  documents: string[];
  goodToKnow: string;
  faqs: { q: string; a: string }[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "company-setup",
    eyebrow: "Company setup & formation",
    headline: "A company that fits the way you plan to work.",
    intro:
      "Mainland, free zone or offshore: each route changes where you can trade, who you can hire and what you will pay every year. We start with your activity and your goals, then build the setup around them.",
    facts: [
      { label: "Best for", value: "Founders, investors, foreign companies" },
      { label: "Routes", value: "Mainland · Free zone · Offshore" },
      { label: "Typical timeline", value: "A few days to a few weeks" },
    ],
    included: [
      { title: "Jurisdiction advice", text: "A plain comparison of mainland, free zone and offshore for your activity, budget and visa needs." },
      { title: "Trade name & initial approval", text: "Name checks and reservation, then initial approval from the licensing authority." },
      { title: "Licence & registration", text: "Activity selection, application filing, and collection of your trade licence and registration documents." },
      { title: "Office or flexi-desk", text: "Help meeting the registered-address requirement of your chosen authority." },
      { title: "Next steps, planned", text: "We line up visas, banking and tax registration so nothing waits on something else." },
    ],
    steps: [
      { title: "Discovery call", text: "We learn what you will sell, where, and to whom." },
      { title: "Choose the structure", text: "You get a recommended route with costs laid out in writing." },
      { title: "Documents & approvals", text: "We prepare and file everything, and keep you updated at each approval." },
      { title: "Licence issued", text: "You receive your licence and company documents, ready to trade." },
    ],
    documents: [
      "Passport copies of all shareholders and managers",
      "Passport-size photographs",
      "Proposed trade names (a few options)",
      "Intended business activities",
      "Proof of address and contact details",
      "Corporate documents, if a company is a shareholder",
    ],
    goodToKnow:
      "Requirements differ between authorities and change from time to time. We confirm the current list for your chosen jurisdiction before you pay anything.",
    faqs: [
      { q: "Mainland or free zone: how do I choose?", a: "It depends on where your customers are. Mainland licences allow trading across the UAE market; free zones offer simpler setup but with some limits on local trading. We walk you through both for your case." },
      { q: "Can I own 100% of my company?", a: "In many cases yes, in both mainland and free zones, depending on the activity. We confirm this for your activity during the first call." },
      { q: "Do I need to live in the UAE to set up?", a: "Not always. Some steps can be completed remotely. We tell you upfront which ones need you in person." },
      { q: "How long does it take?", a: "It varies by authority and how ready your documents are. We give you a realistic timeline for your route before we begin." },
    ],
  },
  {
    slug: "visa-processing",
    eyebrow: "Visa processing",
    headline: "Residency without the running around.",
    intro:
      "Investor, partner, employee or family: every visa follows a sequence of permits, medicals and biometrics. We manage the sequence so you only show up when you are needed.",
    facts: [
      { label: "Best for", value: "Owners, employers, families" },
      { label: "Visa types", value: "Investor · Employment · Family" },
      { label: "Typical timeline", value: "Often within a couple of weeks" },
    ],
    included: [
      { title: "Entry permits", text: "Applications for people applying from outside the UAE." },
      { title: "Status change", text: "Converting a visit status to residency from inside the country." },
      { title: "Medical & Emirates ID", text: "Booking the medical test and Emirates ID biometrics at approved centres." },
      { title: "Visa stamping", text: "Final stamping and issue of your residence visa." },
      { title: "Renewals & cancellations", text: "Reminders and handling before expiry, so nothing lapses." },
    ],
    steps: [
      { title: "Eligibility check", text: "We confirm which visa category you qualify for." },
      { title: "Permit or status change", text: "We file the entry permit or convert your status." },
      { title: "Medical & biometrics", text: "We book your appointments and tell you what to bring." },
      { title: "Visa issued", text: "Your residence visa is stamped and Emirates ID follows." },
    ],
    documents: [
      "Passport valid for at least six months",
      "Recent passport-style photograph",
      "Company trade licence (investor or employment visas)",
      "Employment contract or offer letter (employees)",
      "Attested marriage or birth certificates (family visas)",
      "Proof of accommodation, where required",
    ],
    goodToKnow:
      "Processing times and requirements depend on the visa type and the issuing authority. We give you the current checklist before we file.",
    faqs: [
      { q: "Can I sponsor my family?", a: "Usually yes, if you hold a valid residence visa and meet the income and accommodation requirements. We check these with you first." },
      { q: "Do I have to be in the UAE?", a: "Some steps, such as the medical test and biometrics, need you here in person. We schedule them to keep your time in the country short." },
      { q: "What if my visa is about to expire?", a: "Tell us as early as you can. We handle renewal so there is no gap in your status." },
    ],
  },
  {
    slug: "bank-accounts",
    eyebrow: "Bank account processing",
    headline: "A corporate account, opened without the guesswork.",
    intro:
      "Banks look closely at who owns a company and what it does. We prepare your file the way compliance teams like to see it, and stay with it until the account is active.",
    facts: [
      { label: "Best for", value: "New and existing companies" },
      { label: "We handle", value: "Documents · KYC · Bank liaison" },
      { label: "Typical timeline", value: "Varies by bank and profile" },
    ],
    included: [
      { title: "Bank selection", text: "We match your profile and activity to banks that are likely to say yes." },
      { title: "Document preparation", text: "A clean, complete application pack so there are fewer back-and-forth requests." },
      { title: "KYC coordination", text: "We help you answer compliance questions clearly and consistently." },
      { title: "Follow-up", text: "We chase the bank for you and keep you posted until the account is live." },
    ],
    steps: [
      { title: "Profile review", text: "We look at your structure, activity and source of funds." },
      { title: "Choose the bank", text: "We recommend the best-fit options and explain why." },
      { title: "Submit the application", text: "We prepare and submit your documents, then handle questions." },
      { title: "Account active", text: "You complete any in-person steps and start banking." },
    ],
    documents: [
      "Trade licence and company incorporation documents",
      "Passports and Emirates IDs of owners and signatories",
      "Business plan or description of activity",
      "Proof of address",
      "Source-of-funds information",
      "Contracts or invoices with customers or suppliers, where relevant",
    ],
    goodToKnow:
      "Approval is always the bank's decision and we cannot guarantee it. What we do is present your case as clearly and completely as possible.",
    faqs: [
      { q: "Can you guarantee the account will open?", a: "No. Each bank decides on its own. We improve your odds with a well-prepared application and the right bank choice." },
      { q: "Do I need to visit the bank?", a: "Often the signatories need to attend at least once. We tell you in advance." },
      { q: "Can I open an account before my company is fully set up?", a: "Usually the licence is required first. We plan the order of steps so there is no wasted time." },
    ],
  },
  {
    slug: "accounting",
    eyebrow: "Accounting & bookkeeping",
    headline: "Books you can actually read.",
    intro:
      "Good accounts tell you where the business stands, not just what it owes. We keep your records tidy, report in plain language, and make sure you are ready for audit or tax filing.",
    facts: [
      { label: "Best for", value: "Owners who want clear numbers" },
      { label: "We handle", value: "Bookkeeping · Reports · Year-end" },
      { label: "Rhythm", value: "Monthly or quarterly" },
    ],
    included: [
      { title: "Day-to-day bookkeeping", text: "Sales, purchases, bank and expense records kept up to date." },
      { title: "Management reports", text: "Profit and loss, balance sheet and cash position, explained simply." },
      { title: "Year-end accounts", text: "Financial statements prepared and ready for audit where required." },
      { title: "Tax-ready records", text: "Books arranged so VAT and corporate tax filings are straightforward." },
    ],
    steps: [
      { title: "Set up", text: "We review your current records and agree how you will share documents." },
      { title: "Regular bookkeeping", text: "We record transactions and reconcile your bank accounts." },
      { title: "Review & report", text: "You receive reports and a short call to talk through them." },
      { title: "Year-end close", text: "We prepare final accounts and support your auditor if needed." },
    ],
    documents: [
      "Bank statements",
      "Sales and purchase invoices",
      "Expense receipts",
      "Payroll records",
      "Previous accounts, if any",
      "Trade licence and VAT or tax registration details",
    ],
    goodToKnow:
      "Whether your company needs an audit depends on its licence and jurisdiction. We tell you what applies to you.",
    faqs: [
      { q: "What software do you use?", a: "We work with common cloud accounting tools and can adapt to what you already use. Confirm the exact tools with us on your first call." },
      { q: "Can you catch up on past months?", a: "Yes. We can clean up and complete earlier periods before starting regular bookkeeping." },
      { q: "Do I need an audit?", a: "It depends on your jurisdiction and licence type. We check this for you." },
    ],
  },
  {
    slug: "tax-advisory",
    eyebrow: "Tax advisory: VAT & corporate tax",
    headline: "Registered on time. Filed correctly.",
    intro:
      "UAE tax rules are clear once someone explains them in order. We register you, file for you, and answer to the Federal Tax Authority on your behalf.",
    facts: [
      { label: "Best for", value: "Any UAE business" },
      { label: "Covers", value: "VAT · Corporate tax" },
      { label: "Liaison", value: "Federal Tax Authority (FTA)" },
    ],
    included: [
      { title: "VAT registration", text: "We assess whether you must or may register, then file with the FTA." },
      { title: "VAT returns", text: "Preparation and submission of your returns on schedule." },
      { title: "Corporate tax registration", text: "Registration and compliance support for UAE corporate tax." },
      { title: "Corporate tax returns", text: "Preparation and filing, with records organised for the year." },
      { title: "Transfer pricing guidance", text: "Advice where related-party transactions make it relevant." },
      { title: "FTA correspondence", text: "We respond to queries and notices for you." },
    ],
    steps: [
      { title: "Tax health check", text: "We review your activity and income to see what applies." },
      { title: "Register", text: "We submit your VAT and corporate tax registrations." },
      { title: "File on schedule", text: "We prepare returns and remind you before every deadline." },
      { title: "Stay compliant", text: "Ongoing advice as your business and the rules change." },
    ],
    documents: [
      "Trade licence and company documents",
      "Owners' passports and Emirates IDs",
      "Financial statements or management accounts",
      "Sales and purchase records",
      "Existing FTA login details, if registered",
      "Contracts with related parties, where relevant",
    ],
    goodToKnow:
      "Tax thresholds, rates and deadlines are set by law and can change. We confirm the current position for your business in writing.",
    faqs: [
      { q: "Do I have to register for VAT?", a: "It depends on your taxable turnover. Registration becomes mandatory above a set threshold, and is optional below it. We check where you stand." },
      { q: "Does corporate tax apply to free zone companies?", a: "Free zone companies must register, and some may qualify for special treatment if they meet certain conditions. We assess this for your company." },
      { q: "What if I missed a deadline?", a: "Speak to us straight away. Late filing can carry penalties, and we can help you put things right." },
    ],
  },
  {
    slug: "consulting-compliance",
    eyebrow: "Management consulting & compliance",
    headline: "The steady hand behind a growing business.",
    intro:
      "Licences expire, shareholders change and rules move. We keep your paperwork in order and give practical advice when you are deciding how to structure and grow.",
    facts: [
      { label: "Best for", value: "Established companies" },
      { label: "Covers", value: "PRO · Renewals · Advisory" },
      { label: "Rhythm", value: "Ongoing or one-off" },
    ],
    included: [
      { title: "Corporate secretarial", text: "Records, resolutions and amendments to your company documents." },
      { title: "PRO services", text: "Government paperwork handled for you, from submissions to collections." },
      { title: "Licence renewals", text: "Renewals tracked and filed ahead of expiry." },
      { title: "Establishment card", text: "Issue and renewal of your establishment card." },
      { title: "Management advisory", text: "A sounding board on structure, growth and governance." },
    ],
    steps: [
      { title: "Compliance review", text: "We list every licence, card and filing your company has." },
      { title: "Calendar", text: "You get one calendar of deadlines, so nothing sneaks up on you." },
      { title: "We handle it", text: "We file and collect, and send you confirmation each time." },
      { title: "Advise", text: "We meet regularly to talk through what comes next." },
    ],
    documents: [
      "Trade licence and establishment card",
      "Memorandum or articles of association",
      "Owners' and managers' passports",
      "Tenancy contract or registered address proof",
      "Previous amendment or renewal records",
    ],
    goodToKnow:
      "Renewal rules differ by authority and some penalties build up daily. The earlier you tell us about an expiry, the better.",
    faqs: [
      { q: "How early should I start a licence renewal?", a: "As early as possible: ideally a few weeks before expiry. We track dates for our ongoing clients." },
      { q: "Can you act as my PRO only?", a: "Yes. You can use our PRO service on its own, without any of our other services." },
      { q: "Do you offer one-off advice?", a: "Yes. Ask us for a single consultation if you only need guidance on a specific decision." },
    ],
  },
];

export const getServiceDetail = (slug: string) => serviceDetails.find((d) => d.slug === slug);