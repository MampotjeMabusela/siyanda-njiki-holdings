import type { Metadata } from "next";
import PortfolioClient from "@/components/PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio | Syanda Njiki Holdings",
  description: "Explore electrical, civil, supply and transport projects.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
