import type { Metadata } from "next";
import ServicesClient from "@/components/ServicesClient";

export const metadata: Metadata = {
  title: "Services | Siyanda Njiki Holdings",
  description: "Explore electricity, civil work, plumbing, supply and transport services.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
