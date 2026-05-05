import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact | Siyanda Njiki Holdings",
  description: "Contact Siyanda Njiki Holdings for supply, construction and transport services.",
};

export default function ContactPage() {
  return <ContactClient />;
}
