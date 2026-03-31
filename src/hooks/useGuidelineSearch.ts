import { useMemo, useState } from "react";
import Fuse, { type IFuseOptions } from "fuse.js";
import { guidelines, type Guideline } from "@/data/guidelines";

const fuseOptions: IFuseOptions<Guideline> = {
  keys: [
    { name: "title", weight: 0.3 },
    { name: "keywords", weight: 0.25 },
    { name: "summary", weight: 0.15 },
    { name: "relatedSearchTerms", weight: 0.15 },
    { name: "category", weight: 0.1 },
    { name: "specifications", weight: 0.03 },
    { name: "notes", weight: 0.02 },
  ],
  threshold: 0.4,
  includeMatches: true,
  includeScore: true,
  minMatchCharLength: 2,
  ignoreLocation: true,
};

export function useGuidelineSearch() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const fuse = useMemo(() => new Fuse(guidelines, fuseOptions), []);

  const results = useMemo(() => {
    let items: Guideline[];

    if (query.trim().length >= 2) {
      const fuseResults = fuse.search(query.trim());
      items = fuseResults.map((r) => r.item);
    } else {
      items = guidelines;
    }

    if (activeCategory) {
      items = items.filter((item) => item.category === activeCategory);
    }

    return items;
  }, [query, activeCategory, fuse]);

  const displayedResults = showAll ? results : results.slice(0, 6);
  const hasMore = results.length > 6 && !showAll;

  return {
    query,
    setQuery,
    activeCategory,
    setActiveCategory,
    results: displayedResults,
    totalCount: results.length,
    hasMore,
    showAll,
    setShowAll,
  };
}
