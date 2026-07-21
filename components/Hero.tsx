import Image from "next/image";
import cartoon from "@/images/cartoon-image.png";
import dialogue from "@/images/dialogue-text.png";
import mesh from "@/images/mesh.png";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Mesh Pattern Placeholder */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="relative h-full w-full max-w-7xl opacity-60 -top-30">
          <Image
            src={mesh}
            alt=""
            fill
            priority
            className="object-contain object-right"
          />
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-between px-6 py-20 sm:px-10 md:px-12 lg:px-12">
        {/* Heading */}

        <div className="relative">
          <h1
            className="
              font-display
              uppercase
              leading-snug
              text-black
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            <span className="block">Designing</span>

            <span className="block">and Engineering</span>

            <span className="block">Better Product</span>
          </h1>

          {/* Floating Character */}

          <div
            className="
              absolute
              right-[32%]
              top-[-10%]
              hidden
              lg:block
            "
          >
            {/* Arrow + Handwritten text placeholder */}

            <div className="absolute -right-68 -top-6 w-75">
              <Image
                src={dialogue}
                alt="Arrow Text"
                width={260}
                height={120}
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Character Placeholder */}

            <div className="relative h-40 w-40">
              <Image
                src={cartoon}
                alt="Character"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}

        <div className="mt-14 flex flex-col gap-10 lg:mt-6 lg:flex-row lg:items-end lg:justify-between">
          {/* Description */}

          <p
            className="
              max-w-md
              text-charcoal
              font-switzer-medium
            "
          >
            I&apos;m a product design engineer with 5 years of experience
            designing &amp; building products for startups &amp; enterprises.
          </p>

          {/* Buttons */}

          <div className="flex flex-col items-stretch gap-4 font-switzer-medium md:flex-row md:items-center">
            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-full border-lilac text-night bg-white px-6 hover:bg-black hover:text-white md:w-auto cursor-pointer"
            >
              <Link href="/contact">Let&apos;s Talk</Link>
            </Button>

            <Button
              size="lg"
              className="w-full rounded-full bg-black px-6 text-white hover:bg-neutral-800 md:w-auto cursor-pointer"
            >
              <Link href="/resume.pdf">Download Resume</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
