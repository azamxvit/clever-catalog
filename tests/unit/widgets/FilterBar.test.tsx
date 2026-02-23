// tests/unit/widgets/FilterBar.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FilterBar } from "@/components/widgets/FilterBar";
import { useFilterStore } from "@/store/filter-store";
import { act } from "react";

beforeEach(() => {
  act(() => useFilterStore.getState().resetFilters());
});

describe("FilterBar", () => {
  it("рендерит поле поиска", () => {
    render(<FilterBar />);
    expect(screen.getByPlaceholderText(/catalog\.searchPlaceholder/)).toBeInTheDocument();
  });

  it("показывает блок категорий по умолчанию", () => {
    render(<FilterBar />);
    expect(screen.getByText(/catalog\.categories\.all/)).toBeInTheDocument();
  });

  it("hideCategoryFilter=true скрывает блок категорий", () => {
    render(<FilterBar hideCategoryFilter />);
    expect(screen.queryByText(/catalog\.categories\.all/)).not.toBeInTheDocument();
  });

  it("клик по категории меняет store", () => {
    render(<FilterBar />);
    fireEvent.click(screen.getByText(/catalog\.categories\.porcelain/));
    expect(useFilterStore.getState().category).toBe("porcelain");
  });

  it("ввод в поиск обновляет store", () => {
    render(<FilterBar />);
    const input = screen.getByPlaceholderText(/catalog\.searchPlaceholder/);
    fireEvent.change(input, { target: { value: "vincent" } });
    expect(useFilterStore.getState().search).toBe("vincent");
  });

  it("кнопка X очищает поиск", () => {
    act(() => useFilterStore.getState().setSearch("oak"));
    render(<FilterBar />);
    const clearBtn = screen.getByRole("button", { name: "" });
    fireEvent.click(clearBtn);
    expect(useFilterStore.getState().search).toBe("");
  });

  it("тоггл 'В наличии' меняет inStockOnly", () => {
    render(<FilterBar />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(useFilterStore.getState().inStockOnly).toBe(true);
  });

  it("кнопка 'Сбросить' появляется при активных фильтрах", () => {
    act(() => useFilterStore.getState().setSearch("test"));
    render(<FilterBar />);
    expect(screen.getByText(/catalog\.resetFilters/)).toBeInTheDocument();
  });

  it("кнопка 'Сбросить' сбрасывает все фильтры", () => {
    act(() => {
      useFilterStore.getState().setSearch("test");
      useFilterStore.getState().setCategory("laminate");
    });
    render(<FilterBar />);
    fireEvent.click(screen.getByText(/catalog\.resetFilters/));
    expect(useFilterStore.getState().search).toBe("");
    expect(useFilterStore.getState().category).toBe("all");
  });
});