import { categories } from "@/data/guidelines";

interface CategoryFilterProps {
  active: string | null;
  onSelect: (cat: string | null) => void;
}

export function CategoryFilter({ active, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => onSelect(null)}
        className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
          active === null
            ? "bg-foreground text-background border-foreground"
            : "bg-card text-muted-foreground border-border hover:border-foreground/30"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(active === cat ? null : cat)}
          className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
            active === cat
              ? "bg-foreground text-background border-foreground"
              : "bg-card text-muted-foreground border-border hover:border-foreground/30"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
