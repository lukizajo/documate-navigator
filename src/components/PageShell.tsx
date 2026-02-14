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
    <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
        {title}
      </h1>

      {/* TL;DR */}
      <div className="rounded-lg p-4 mb-6 border" style={{
        background: "hsl(var(--tldr-bg))",
        borderColor: "hsl(var(--tldr-border))",
        color: "hsl(var(--tldr-foreground))"
      }}>
        <p className="font-semibold mb-2 text-sm uppercase tracking-wide">TL;DR</p>
        <ul className="space-y-1 text-sm">
          {tldr.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="flex gap-4 mb-8 text-sm text-muted-foreground">
        <span>☐ MUST</span>
        <span>☐ SHOULD</span>
        <span>☐ NICE</span>
      </div>

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
