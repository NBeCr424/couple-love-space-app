export function WishCategoryFilter({ categories, activeCategory, onChange }) {
  return (
    <section className="fade-up overflow-x-auto pb-1" style={{ animationDelay: "50ms" }}>
      <div className="flex min-w-max items-center gap-2">
        {categories.map((category) => {
          const active = activeCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onChange(category.id)}
              className={`soft-tap rounded-full px-3 py-1.5 text-xs transition ${
                active
                  ? "bg-rose-200/90 text-rose-700"
                  : "bg-white/80 text-rose-500 hover:bg-rose-100 hover:text-rose-700"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
