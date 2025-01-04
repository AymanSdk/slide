import { InstagramDuoToneBlue, SalesForceDuoToneBlue } from "@/icons";

type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "CRM";
};

export const INTEGRATION_CARDS: Props[] = [
  {
    title: "Connect Instagram",
    description:
      "Integrate Instagram to enhance your social media presence and engage with your audience effectively.",
    icon: <InstagramDuoToneBlue />,
    strategy: "INSTAGRAM",
  },
  {
    title: "Connect Salesforce",
    description:
      "Integrate Salesforce to manage your customer relationships and streamline your sales process.",
    icon: <SalesForceDuoToneBlue />,
    strategy: "CRM",
  },
];
