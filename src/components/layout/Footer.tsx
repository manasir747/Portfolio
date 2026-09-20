import { PageContainer } from "./PageContainer";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 mt-16 bg-muted/20">
      <PageContainer>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-1">
            <h3 className="font-semibold text-foreground">Mohammed Abu Nasir</h3>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
            <Link href="https://github.com/manasir747" target="_blank" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/mohammed-nasir-9a847a284/" target="_blank" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
              LinkedIn
            </Link>
            <Link href="https://leetcode.com/u/ma_nasir747/" target="_blank" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
              LeetCode
            </Link>
            <Link href="mailto:ma.nasir747@gmail.com" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
              Email
            </Link>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
