import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:gap-30 px-6 py-16 md:px-8 lg:grid-cols-[1.5fr_2fr] lg:px-12">
        {/* Left Section */}
        <div className="w-full space-y-8">
          <h2 className="font-display-medium text-xl sm:text-2xl md:text-3xl">
            LET&apos;S CHAT
          </h2>

          <div className="flex flex-wrap gap-4 font-switzer-medium">
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white bg-transparent px-6 uppercase text-white transition-colors hover:bg-white hover:text-black cursor-pointer"
              >
                LinkedIn
              </Button>
            </Link>

            <Link href="mailto:you@example.com">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white bg-transparent px-6 uppercase text-white transition-colors hover:bg-white hover:text-black cursor-pointer"
              >
                Mail
              </Button>
            </Link>

            <Link
              href="https://x.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white bg-transparent px-6 uppercase text-white transition-colors hover:bg-white hover:text-black cursor-pointer"
              >
                Twitter X
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full space-y-8">
          <h2 className="font-display-medium max-w-xs md:max-w-none text-xl leading-tight sm:text-2xl md:text-3xl">
            THINK OF ALL THE COOL STUFF WE COULD ACCOMPLISH TOGETHER
          </h2>

          <div className="flex flex-col md:flex-row flex-wrap gap-4 font-switzer-medium">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="w-full md:w-auto"
            >
              <Button
                size="lg"
                className="w-full md:w-auto rounded-full bg-white px-6 text-black hover:bg-white/90 cursor-pointer"
              >
                Download Resume
              </Button>
            </Link>

            <Link href="/contact" className="w-full md:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full md:w-auto rounded-full border-white bg-transparent px-6 text-white transition-colors hover:bg-white hover:text-black cursor-pointer"
              >
                Let&apos;s Talk
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm text-white/60 md:flex-row md:text-left md:px-8 lg:px-12 font-body">
          <p>
            © {new Date().getFullYear()} Stanley Chika. All rights reserved.
          </p>

          <p>Built by Logic</p>
        </div>
      </div>
    </footer>
  );
}
