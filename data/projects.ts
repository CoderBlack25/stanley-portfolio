import type { Project } from "@/types/project";

/**
 * Dummy data for the Projects section.
 *
 * To add a real project, just push a new object onto this array with the
 * same shape. `images[].src` currently points to picsum.photos placeholders
 * (seeded so they stay consistent across reloads) — swap those for your own
 * screenshots when ready, and drop the picsum entry from next.config once
 * nothing references it anymore.
 */
export const projects: Project[] = [
  {
    id: "fairmoney",
    name: "Fairmoney",
    category: "Digital Banking",
    description:
      "Designed and scaled a merchant banking ecosystem serving businesses across Nigeria. Led product initiatives spanning mobile banking, merchant operations, lending, payments, and internal tools, creating seamless experiences for merchants, sales teams, and operations.",
    role: "Lead Designer",
    platform: "Web & Mobile",
    scope: ["Lending", "B2B", "KYB"],
    websiteLabel: "Syreos.com",
    websiteUrl: "https://syreos.com",
    images: [
      {
        id: "fairmoney-1",
        src: "https://picsum.photos/seed/fairmoney-1/900/1100",
        alt: "Fairmoney mobile banking dashboard screenshot",
      },
      {
        id: "fairmoney-2",
        src: "https://picsum.photos/seed/fairmoney-2/900/1100",
        alt: "Fairmoney merchant payments screen screenshot",
      },
    ],
  },
  {
    id: "prune-payment",
    name: "Prune Payment",
    category: "Payments Infrastructure",
    description:
      "Built the checkout and settlement experience for a payments platform aimed at small merchants. Focused on reducing failed transactions and giving merchants a clearer view of payouts and reconciliation.",
    role: "Product Designer",
    platform: "Web",
    scope: ["Payments", "Settlement", "B2B"],
    websiteLabel: "Prunepayment.com",
    websiteUrl: "https://example.com",
    images: [
      {
        id: "prune-1",
        src: "https://picsum.photos/seed/prune-1/900/1100",
        alt: "Prune Payment checkout flow screenshot",
      },
      {
        id: "prune-2",
        src: "https://picsum.photos/seed/prune-2/900/1100",
        alt: "Prune Payment settlement dashboard screenshot",
      },
    ],
  },
  {
    id: "clime-payment",
    name: "Clime Payment",
    category: "Consumer Wallet",
    description:
      "Designed a consumer-facing wallet app focused on peer-to-peer transfers and bill payments, with an emphasis on making balances and transaction history easy to scan at a glance.",
    role: "UI/UX Designer",
    platform: "Mobile",
    scope: ["Wallet", "P2P", "Consumer"],
    websiteLabel: "Climepayment.com",
    websiteUrl: "https://example.com",
    images: [
      {
        id: "clime-1",
        src: "https://picsum.photos/seed/clime-1/900/1100",
        alt: "Clime Payment wallet home screen screenshot",
      },
      {
        id: "clime-2",
        src: "https://picsum.photos/seed/clime-2/900/1100",
        alt: "Clime Payment transfer flow screenshot",
      },
    ],
  },
  {
    id: "docudrive",
    name: "Docudrive",
    category: "Document Management",
    description:
      "Created a document workflow tool for teams handling contracts and compliance paperwork, covering upload, e-signature, and approval routing in a single view.",
    role: "Product Designer",
    platform: "Web",
    scope: ["Workflow", "E-signature", "B2B"],
    websiteLabel: "Docudrive.com",
    websiteUrl: "https://example.com",
    images: [
      {
        id: "docudrive-1",
        src: "https://picsum.photos/seed/docudirve-1/900/1100",
        alt: "Docudrive document upload screen screenshot",
      },
      {
        id: "docudrive-2",
        src: "https://picsum.photos/seed/docudirve-2/900/1100",
        alt: "Docudrive approval routing screenshot",
      },
    ],
  },
  {
    id: "workstat",
    name: "Workstat",
    category: "Team Analytics",
    description:
      "Designed a lightweight analytics dashboard that helps small teams track workload and delivery without the overhead of a full project management suite.",
    role: "Lead Designer",
    platform: "Web & Mobile",
    scope: ["Analytics", "Dashboards", "SaaS"],
    websiteLabel: "Workstat.io",
    websiteUrl: "https://example.com",
    images: [
      {
        id: "workstat-1",
        src: "https://picsum.photos/seed/workstat-1/900/1100",
        alt: "Workstat analytics dashboard screenshot",
      },
      {
        id: "workstat-2",
        src: "https://picsum.photos/seed/workstat-2/900/1100",
        alt: "Workstat team workload view screenshot",
      },
    ],
  },
];
