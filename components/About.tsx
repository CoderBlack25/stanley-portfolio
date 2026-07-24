import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import profileImage from "@/images/profile-image.png";
import profileText from "@/images/profile-text.png";
import mesh from "@/images/mesh.png";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Mesh Placeholder */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="relative h-full w-full max-w-7xl opacity-60 -top-30 -left-100">
          <Image
            src={mesh}
            alt=""
            fill
            priority
            className="object-contain object-left"
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1fr_2fr] lg:items-start lg:gap-16 lg:px-12 xl:py-28">
        {/* Left */}
        <div className="flex w-full flex-col items-center space-y-5 lg:items-start">
          <div className="relative aspect-4/5 w-full overflow-hidden lg:max-w-xs">
            <Image
              src={profileImage}
              alt="My image"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 320px"
            />
          </div>

          <div className="w-full lg:max-w-100">
            <Image
              src={profileText}
              alt="Profile text"
              width={400}
              height={107}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex w-full flex-col space-y-6">
          <h2 className="font-display-medium uppercase text-black text-xl sm:text-2xl lg:text-3xl">
            Hey, Nice To Meet You.
          </h2>

          <div className="space-y-4 text-base text-charcoal md:text-lg font-switzer-medium">
            <p>
              I&apos;m Stanley, a Senior Product Designer with 5+ years&apos;
              experience building products across finance, SaaS, Web3, and AI
              exploring how design, systems thinking, and digital technology
              connect.
            </p>

            <p>
              As a designer, I&apos;m passionate about turning ideas into
              meaningful, user-centered experiences. I&apos;ve worked across
              fintech, healthcare, logistics, and tech, creating products that
              blend design thinking with business impact. Outside work, I love
              reading, sharing insights, and exploring new ideas around design,
              business, and self-growth.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:flex-row justify-between items-start md:items-center">
            {/* Buttons */}
            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full border-lilac text-night bg-white px-6 hover:bg-black hover:text-white md:w-auto cursor-pointer"
                  type="button"
                >
                  Let&apos;s Talk
                </Button>
              </Link>

              <Link href="/resume.pdf" target="_blank">
                <Button
                  size="lg"
                  className="w-full rounded-full bg-black px-6 text-white hover:bg-neutral-800 md:w-auto cursor-pointer"
                  //type="button"
                >
                  Download Resume
                </Button>
              </Link>
            </div>

            {/* Initials */}
            <div className="flex justify-center gap-4 lg:justify-end">
              {["L", "M", "T"].map((letter) => (
                <div
                  key={letter}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-sm font-medium text-neutral-700"
                >
                  {letter}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
