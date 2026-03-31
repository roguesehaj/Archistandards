import { SearchX } from "lucide-react";
import { suggestedSearches } from "@/data/guidelines";

interface EmptyStateProps {
  query: string;
  onSuggestionClick: (term: string) => void;
}

export function EmptyState({ query, onSuggestionClick }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="h-16 w-16 rounded-2xl bg-muted flex items-center justify-center mb-6">
        <SearchX className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium text-foreground mb-2">
        No results for "{query}"
      </h3>
      <p className="text-sm text-muted-foreground mb-6 max-w-md">
        Try a different search term or browse by category. Here are some suggestions:
      </p>
      <div className="flex flex-wrap gap-2 justify-center max-w-lg">
        {suggestedSearches.map((term) => (
          <button
            key={term}
            onClick={() => onSuggestionClick(term)}
            className="text-sm px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
}
