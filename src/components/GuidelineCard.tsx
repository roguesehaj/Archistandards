import { Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { categoryColors, type Guideline } from "@/data/guidelines";

function highlightText(text: string, query: string) {
  if (!query || query.length < 2) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-yellow-200/70 text-foreground rounded-sm px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

interface GuidelineCardProps {
  guideline: Guideline;
  query: string;
}

export function GuidelineCard({ guideline, query }: GuidelineCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = [
      guideline.title,
      guideline.summary,
      "",
      "Specifications:",
      ...guideline.specifications.map((s) => `• ${s}`),
      "",
      "Notes:",
      ...guideline.notes.map((n) => `• ${n}`),
    ].join("\n");

    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Guideline copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const colorClass = categoryColors[guideline.category] || "bg-muted text-muted-foreground";

  return (
    <div className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-2">
          <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full w-fit ${colorClass}`}>
            {guideline.category}
          </span>
          <h3 className="text-lg font-semibold text-foreground leading-snug">
            {highlightText(guideline.title, query)}
          </h3>
        </div>
        <button
          onClick={handleCopy}
          className="shrink-0 h-8 w-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
          title="Copy guideline"
        >
          {copied ? (
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          ) : (
            <Copy className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {highlightText(guideline.summary, query)}
      </p>

      <div>
        <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">Specifications</h4>
        <ul className="space-y-1">
          {guideline.specifications.map((spec, i) => (
            <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
              <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/30" />
              {highlightText(spec, query)}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">Notes</h4>
        <ul className="space-y-1">
          {guideline.notes.map((note, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
              {highlightText(note, query)}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {guideline.keywords.slice(0, 6).map((kw) => (
          <span key={kw} className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
            {kw}
          </span>
        ))}
      </div>
    </div>
  );
}
