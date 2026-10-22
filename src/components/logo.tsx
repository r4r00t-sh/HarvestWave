import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  tone?: "ink" | "light";
};

export function Logo({ tone = "ink" }: LogoProps) {
  const light = tone === "light";

  return (
    <Link
      href="/#top"
      className={`inline-flex w-max shrink-0 items-center ${light ? "rounded-2xl bg-white px-3 py-2" : ""}`}
    >
      <Image
        src="/images/logo.png"
        alt="Harvest Wave"
        width={802}
        height={311}
        priority={!light}
        unoptimized
        className={light ? "h-16 w-auto" : "h-10 w-auto lg:h-9"}
        style={{ width: "auto" }}
      />
    </Link>
  );
}
