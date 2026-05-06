import type { Metadata } from "next";
import ValueCard from "@/components/ValueCard";

export const metadata: Metadata = {
  title: "About | Syanda Njiki Holdings",
  description: "Learn about Syanda Njiki Holdings mission, vision and core values.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-primary">About Us</h1>
      <div className="mx-auto mt-5 max-w-4xl space-y-4 text-center text-slate-600">
        <p>
          Syanda Njiki Holdings (PTY) LTD is a multi-disciplinary company that specializes in supply, construction, and transportation services. Established with a vision to provide efficient, reliable, and high-quality solutions, we have built a reputation for excellence and professionalism.
        </p>
        <p>
          Our company prides itself on a strong work ethic, integrity, and a customer-centric approach that ensures we meet the unique needs of our clients across multiple industries.
          With a team of skilled professionals and a commitment to continuous improvement, we leverage modern technology and industry best practices to deliver cost-effective and sustainable solutions. Our goal is to contribute meaningfully to the development and maintenance of infrastructure, ensuring operational efficiency and client satisfaction.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <ValueCard title="Mission" text="Deliver innovative and dependable services with quality, safety, sustainability and customer satisfaction at the center." />
        <ValueCard title="Vision" text="To be recognized as a leading provider in supply, construction and transport services across South Africa." />
      </div>
      <h2 className="mt-12 text-2xl font-bold text-primary">Core Values</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-5">
        {["Integrity", "Excellence", "Innovation", "Sustainability", "Customer Satisfaction"].map((v) => (
          <ValueCard key={v} title={v} text={`We uphold ${v.toLowerCase()} in every project.`} />
        ))}
      </div>
    </main>
  );
}
