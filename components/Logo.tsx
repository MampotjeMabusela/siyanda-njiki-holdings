import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="mx-auto inline-flex items-center justify-center">
      <Image
        src="/images/snh-logo.png"
        alt="Siyanda Njiki Holdings logo"
        width={560}
        height={160}
        priority
        className="h-20 w-auto rounded-sm md:h-28"
      />
    </Link>
  );
}
