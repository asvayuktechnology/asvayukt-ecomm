"use client";
import React from "react";

const FilterSidebar = ({
  categories,
  brands,
  colors,
  filters,
  setFilters,
}) => {
  const { categoryFilter, brandFilter, colorFilter, priceRange, minRating, inStockOnly, sortOption } = filters;

  const handleReset = () => {
    setFilters({
      categoryFilter: [],
      brandFilter: [],
      colorFilter: [],
      priceRange: [0, 1000],
      minRating: 0,
      inStockOnly: false,
      sortOption: "default",
    });
  };

  return (
    <aside className="lg:w-1/4 bg-white p-5 rounded-lg shadow-sm space-y-5">
      <h3 className="font-bold text-[22px]">Filters</h3>

      {/* Category */}
      <div>
        <span className="font-semibold mb-2 block">Category</span>
        <div className="flex flex-col gap-1">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={categoryFilter.includes(cat)}
                onChange={(e) => {
                  if (e.target.checked)
                    setFilters({
                      ...filters,
                      categoryFilter: [...categoryFilter, cat],
                    });
                  else
                    setFilters({
                      ...filters,
                      categoryFilter: categoryFilter.filter((c) => c !== cat),
                    });
                }}
                className="w-4 h-4"
              />
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <span className="font-semibold mb-2 block">Brand</span>
        <div className="flex flex-col gap-1">
          {brands.map((b) => (
            <label key={b} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={brandFilter.includes(b)}
                onChange={(e) => {
                  if (e.target.checked)
                    setFilters({ ...filters, brandFilter: [...brandFilter, b] });
                  else
                    setFilters({
                      ...filters,
                      brandFilter: brandFilter.filter((br) => br !== b),
                    });
                }}
                className="w-4 h-4"
              />
              {b}
            </label>
          ))}
        </div>
      </div>

      {/* Color */}
      <div>
        <span className="font-semibold mb-2 block">Color</span>
        <div className="flex gap-2 flex-wrap">
          {colors.map((col) => (
            <button
              key={col}
              onClick={() => {
                if (colorFilter.includes(col))
                  setFilters({
                    ...filters,
                    colorFilter: colorFilter.filter((c) => c !== col),
                  });
                else setFilters({ ...filters, colorFilter: [...colorFilter, col] });
              }}
              className={`w-6 h-6 rounded-full border ${
                colorFilter.includes(col) ? "ring-2 ring-gray-800" : "border-gray-300"
              }`}
              style={{ backgroundColor: col !== "Unknown" ? col : "#eee" }}
            ></button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <span className="font-semibold mb-2 block">
          Price Range (${priceRange[0]} - ${priceRange[1]})
        </span>
        <div className="flex gap-2">
          <input
            type="number"
            min={0}
            value={priceRange[0]}
            onChange={(e) =>
              setFilters({ ...filters, priceRange: [Number(e.target.value), priceRange[1]] })
            }
            className="w-1/2 border rounded px-2 py-1"
          />
          <input
            type="number"
            min={0}
            value={priceRange[1]}
            onChange={(e) =>
              setFilters({ ...filters, priceRange: [priceRange[0], Number(e.target.value)] })
            }
            className="w-1/2 border rounded px-2 py-1"
          />
        </div>
      </div>

      {/* Minimum Rating */}
      <div>
        <span className="font-semibold mb-2 block">Minimum Rating</span>
        <select
          value={minRating}
          onChange={(e) => setFilters({ ...filters, minRating: Number(e.target.value) })}
          className="w-full border rounded px-2 py-1"
        >
          <option value={0}>All</option>
          <option value={1}>1 star & up</option>
          <option value={2}>2 stars & up</option>
          <option value={3}>3 stars & up</option>
          <option value={4}>4 stars & up</option>
          <option value={5}>5 stars</option>
        </select>
      </div>

      {/* In-stock */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => setFilters({ ...filters, inStockOnly: e.target.checked })}
          className="w-4 h-4"
        />
        <span>In Stock Only</span>
      </div>

      {/* Sort */}
      <div>
        <span className="font-semibold mb-2 block">Sort By</span>
        <select
          value={sortOption}
          onChange={(e) => setFilters({ ...filters, sortOption: e.target.value })}
          className="w-full border rounded px-2 py-1"
        >
          <option value="default">Default</option>
          <option value="priceLow">Price: Low → High</option>
          <option value="priceHigh">Price: High → Low</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>

      {/* Reset */}
      <button
        onClick={handleReset}
        className="bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-900 w-full"
      >
        Reset Filters
      </button>
    </aside>
  );
};

export default FilterSidebar;