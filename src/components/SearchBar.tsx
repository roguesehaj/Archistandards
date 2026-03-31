import { Search, X } from "lucide-react";
import { suggestedSearches } from "@/data/guidelines";

interface SearchBarProps {
  query: string;
  onQueryChange: (q: string) => void;
}

export function SearchBar({ query, onQueryChange }: SearchBarProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search guidelines… e.g. ramp slope, door width, grab bar"
          className="w-full h-14 pl-12 pr-12 rounded-2xl border border-border bg-card text-foreground text-base shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-ring transition-all"
        />
        {query && (
          <button
            onClick={() => onQueryChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
          >
            <X className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mt-3 justify-center">
        <span className="text-xs text-muted-foreground mr-1">Try:</span>
        {suggestedSearches.slice(0, 6).map((term) => (
          <button
            key={term}
            onClick={() => onQueryChange(term)}
            className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
}
