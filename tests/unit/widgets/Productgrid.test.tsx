// tests/unit/widgets/ProductGrid.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductGrid } from "@/components/widgets/ProductGrid";
import { useFilterStore } from "@/store/filter-store";
import { act } from "react";

beforeEach(() => {
  act(() => useFilterStore.getState().resetFilters());
});

describe("ProductGrid", () => {
  it("рендерит карточки по умолчанию", () => {
    render(<ProductGrid />);
    const cards = screen.getAllByRole("article");
    expect(cards.length).toBeGreaterThan(0);
  });

  it("показывает счётчик товаров", () => {
    render(<ProductGrid />);
    expect(screen.getByText(/catalog\.found/)).toBeInTheDocument();
  });

  it("при пустом результате показывает empty state", () => {
    act(() => useFilterStore.getState().setSearch("xyzxyzxyz_не_существует"));
    render(<ProductGrid />);
    expect(screen.getByText(/catalog\.empty\.title/)).toBeInTheDocument();
  });

  it("фильтр по категории porcelain — только керамогранит", () => {
    act(() => useFilterStore.getState().setCategory("porcelain"));
    render(<ProductGrid />);
    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(11);
  });
});