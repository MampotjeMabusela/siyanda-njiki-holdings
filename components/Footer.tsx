import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-20 bg-primary text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 text-center sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center">
          <Image
            src="/images/snh-logo.png"
            alt="Siyanda Njiki Holdings logo"
            width={220}
            height={70}
            className="mb-3 h-14 w-auto object-contain"
          />
          <h4 className="font-semibold">Siyanda Njiki Holdings</h4>
          <p className="mt-2 text-sm text-slate-300">Building Tomorrow, Delivering Today</p>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="font-semibold">Quick Links</h5>
          <div className="mt-2 flex flex-col items-center gap-2 text-sm">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="font-semibold">Contact</h5>
          <p className="mt-2 text-sm text-slate-300">+27 79 221 9330</p>
          <p className="text-sm text-slate-300">info.thegembeselectrical@gmail.com</p>
          <Link
            href="/contact"
            className="mt-4 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white"
          >
            Get a Quote
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="font-semibold">Socials</h5>
          <div className="mt-3 flex items-center justify-center gap-3 text-xl">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 px-4 py-3 text-center text-xs text-slate-300">
        © {new Date().getFullYear()} Siyanda Njiki Holdings (PTY) LTD. All rights reserved.
      </div>
    </footer>
  );
}
