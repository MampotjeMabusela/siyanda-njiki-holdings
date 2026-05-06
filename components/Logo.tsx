import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="mx-auto inline-flex items-center justify-center">
      <Image
        src="/images/snh-logo.png"
        alt="Syanda Njiki Holdings logo"
        width={560}
        height={160}
        priority
        className="h-14 w-auto rounded-sm sm:h-16 md:h-20 lg:h-28"
      />
    </Link>
  );
}
