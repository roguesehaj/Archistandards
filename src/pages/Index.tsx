import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { GuidelineCard } from "@/components/GuidelineCard";
import { EmptyState } from "@/components/EmptyState";
import { useGuidelineSearch } from "@/hooks/useGuidelineSearch";
import { Accessibility } from "lucide-react";

const Index = () => {
  const {
    query,
    setQuery,
    activeCategory,
    setActiveCategory,
    results,
    totalCount,
    hasMore,
    setShowAll,
  } = useGuidelineSearch();

  const showNoResults = query.length >= 2 && results.length === 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <div className="h-8 w-8 rounded-lg bg-foreground flex items-center justify-center">
              <Accessibility className="h-4.5 w-4.5 text-background" />
            </div>
            <h1 className="text-xl font-semibold text-foreground tracking-tight">
              NBC Accessibility Guidelines
            </h1>
          </div>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Search building accessibility standards — ramps, doors, toilets, lifts, and more.
          </p>
        </div>
      </header>

      {/* Search */}
      <section className="px-4 sm:px-6 pb-6">
        <SearchBar query={query} onQueryChange={setQuery} />
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <CategoryFilter active={activeCategory} onSelect={setActiveCategory} />
        </div>
      </section>

      {/* Results */}
      <main className="px-4 sm:px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          {showNoResults ? (
            <EmptyState query={query} onSuggestionClick={setQuery} />
          ) : (
            <>
              {query.length >= 2 && (
                <p className="text-sm text-muted-foreground mb-4">
                  {totalCount} result{totalCount !== 1 ? "s" : ""} found
                </p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {results.map((g) => (
                  <GuidelineCard key={g.id} guideline={g} query={query} />
                ))}
              </div>
              {hasMore && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setShowAll(true)}
                    className="text-sm px-6 py-2.5 rounded-full border border-border text-foreground hover:bg-muted transition-colors"
                  >
                    Show all {totalCount} results
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 px-4 text-center">
        <p className="text-xs text-muted-foreground">
          NBC Accessibility Guidelines Reference · For informational purposes only
        </p>
      </footer>
    </div>
  );
};

export default Index;
