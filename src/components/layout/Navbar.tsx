import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { PageContainer } from "./PageContainer";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <PageContainer>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold inline-block">Portfolio</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-4 text-sm font-medium">
              <Link
                href="#about"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Projects
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
