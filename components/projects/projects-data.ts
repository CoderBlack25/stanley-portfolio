export type Project = {
  id: number;
  name: string;
  title: string;
  description: string;
  role: string;
  platform: string;
  scope: string[];
  website: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "FairMoney",
    title: "Digital Banking",
    description:
      "Designed and scaled a merchant banking ecosystem serving businesses across Nigeria. Led product initiatives spanning merchant operations, lending, payments, and internal tools.",
    role: "Lead Designer",
    platform: "Web & Mobile",
    scope: ["Lending", "B2B", "KYB"],
    website: "https://example.com",
    image: "/projects/dummy.png",
  },
  {
    id: 2,
    name: "Prune Payment",
    title: "Payment Infrastructure",
    description:
      "Built payment experiences and merchant dashboards for modern businesses.",
    role: "Product Designer",
    platform: "Web",
    scope: ["Payments", "API"],
    website: "https://example.com",
    image: "/projects/dummy.png",
  },
  {
    id: 3,
    name: "Clime Payment",
    title: "Fintech Platform",
    description:
      "Created scalable experiences for business banking and customer onboarding.",
    role: "UX Designer",
    platform: "Mobile",
    scope: ["Fintech"],
    website: "https://example.com",
    image: "/projects/dummy.png",
  },
  {
    id: 4,
    name: "DocuDrive",
    title: "Cloud Storage",
    description: "Designed a collaborative cloud document management solution.",
    role: "UI Designer",
    platform: "Web",
    scope: ["Cloud", "SaaS"],
    website: "https://example.com",
    image: "/projects/dummy.png",
  },
  {
    id: 5,
    name: "Workstat",
    title: "HR Platform",
    description: "An employee management platform for modern businesses.",
    role: "Lead Designer",
    platform: "Web",
    scope: ["HR"],
    website: "https://example.com",
    image: "/projects/dummy.png",
  },
];

export default projects;
