import { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PageShellProps {
  children: ReactNode;
  title: string;
  tldr: string[];
  tags?: { must?: boolean; should?: boolean; nice?: boolean };
  prev?: { path: string; label: string };
  next?: { path: string; label: string };
}

export function PageShell({ children, title, tldr, prev, next }: PageShellProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-5 md:py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
        {title}
      </h1>


      {/* Content */}
      <div className="prose-content">
        {children}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-6 border-t">
        {prev ? (
          <Button variant="ghost" asChild>
            <Link to={prev.path} className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{prev.label}</span>
              <span className="sm:hidden">Späť</span>
            </Link>
          </Button>
        ) : <div />}
        {next ? (
          <Button variant="ghost" asChild>
            <Link to={next.path} className="flex items-center gap-2">
              <span className="hidden sm:inline">{next.label}</span>
              <span className="sm:hidden">Ďalej</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : <div />}
      </div>
    </article>
  );
}
