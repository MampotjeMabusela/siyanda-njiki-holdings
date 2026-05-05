import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/27792219330?text=Hello%20Siyanda%20Njiki%20Holdings%2C%20I%27m%20interested%20in%20your%20services."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="pulse-soft fixed bottom-6 right-6 z-30 rounded-full bg-accent p-4 text-white shadow-lg md:bottom-8 md:right-8"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
