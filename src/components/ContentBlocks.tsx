import { ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";

interface MiniTestProps {
  question: string;
  options: { label: string; text: string }[];
  correct: string;
  explanation: string;
}

export function MiniTest({ question, options, correct, explanation }: MiniTestProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="rounded-lg p-5 my-6 border" style={{
      background: "hsl(var(--test-bg))",
      borderColor: "hsl(var(--test-border))",
    }}>
      <p className="font-semibold text-sm uppercase tracking-wide mb-3" style={{ color: "hsl(var(--test-foreground))" }}>
        ❓ Mini-test
      </p>
      <p className="font-medium mb-4">{question}</p>
      <div className="space-y-2 mb-4">
        {options.map((opt, i) => (
          <div key={i} className="flex gap-2 text-sm">
            <span className="font-semibold shrink-0">{opt.label}</span>
            <span>{opt.text}</span>
          </div>
        ))}
      </div>
      <button
        onClick={() => setRevealed(!revealed)}
        className="flex items-center gap-1 text-sm font-medium hover:underline"
        style={{ color: "hsl(var(--test-foreground))" }}
      >
        {revealed ? "Skryť odpoveď" : "Zobraziť odpoveď"}
        <ChevronDown className={`h-4 w-4 transition-transform ${revealed ? "rotate-180" : ""}`} />
      </button>
      {revealed && (
        <div className="mt-3 pt-3 border-t text-sm space-y-1" style={{ borderColor: "hsl(var(--test-border))" }}>
          <p><strong>✅ Správna odpoveď:</strong> {correct}</p>
          <p><strong>Prečo:</strong> {explanation}</p>
        </div>
      )}
    </div>
  );
}

interface MiniTaskProps {
  title?: string;
  children: ReactNode;
}

export function MiniTask({ title, children }: MiniTaskProps) {
  return (
    <div className="rounded-lg p-5 my-6 border" style={{
      background: "hsl(var(--task-bg))",
      borderColor: "hsl(var(--task-border))",
    }}>
      <p className="font-semibold text-sm uppercase tracking-wide mb-3" style={{ color: "hsl(var(--task-foreground))" }}>
        ✍️ Mini-úloha{title ? `: ${title}` : ""}
      </p>
      <div className="text-sm space-y-2">{children}</div>
    </div>
  );
}

interface PromptBlockProps {
  children: ReactNode;
  hideLabel?: boolean;
}

export function PromptBlock({ children, hideLabel }: PromptBlockProps) {
  return (
    <div className="my-6">
      {!hideLabel && <p className="font-semibold text-sm mb-2">👉 Rýchly prompt:</p>}
      <div className="rounded-lg p-4 border text-sm italic" style={{
        background: "hsl(var(--muted))",
        borderColor: "hsl(var(--border))",
      }}>
        {children}
      </div>
    </div>
  );
}

interface ExpectedFindingProps {
  children: ReactNode;
}

export function ExpectedFinding({ children }: ExpectedFindingProps) {
  return (
    <div className="rounded-lg p-5 my-6 border" style={{
      background: "hsl(var(--finding-bg))",
      borderColor: "hsl(var(--finding-border))",
    }}>
      <p className="font-semibold text-sm uppercase tracking-wide mb-3" style={{ color: "hsl(var(--finding-foreground))" }}>
        ✅ Očakávané zistenie
      </p>
      <div className="text-sm">{children}</div>
    </div>
  );
}
