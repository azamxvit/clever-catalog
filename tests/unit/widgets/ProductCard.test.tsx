// tests/unit/widgets/ProductCard.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductCard } from "@/components/widgets/ProductCard";
import type { Product } from "@/lib/mock-data";

const mockProduct: Product = {
  id: "p-vincent-white",
  title: "Vincent White",
  category: "porcelain",
  price: 9000,
  dimensions: "60×120",
  thickness: "10 мм",
  image: "https://example.com/tile.jpg",
  inStock: true,
  country: "Китай",
  countryCode: "CN",
  isHit: true,
  collection: "Marble Premium",
};

describe("ProductCard", () => {
  it("показывает название товара", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Vincent White")).toBeInTheDocument();
  });

  it("показывает цену отформатированно", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText(/9\s?000\s?₸/)).toBeInTheDocument();
  });

  it("показывает размер", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText(/60×120/)).toBeInTheDocument();
  });

  it("показывает коллекцию", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Marble Premium")).toBeInTheDocument();
  });

  it("показывает бейдж 'Хит'", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText(/catalog\.badges\.hit/i)).toBeInTheDocument();
  });

  it("не показывает бейдж 'Новинка' если isNew не задан", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.queryByText(/catalog\.badges\.new/i)).not.toBeInTheDocument();
  });

  it("показывает флаг и страну", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText(/Китай/)).toBeInTheDocument();
    expect(screen.getByText(/🇨🇳/)).toBeInTheDocument();
  });

  it("кнопка WhatsApp — ссылка с wa.me", () => {
    render(<ProductCard product={mockProduct} />);
    const link = screen.getByRole("link", { name: /catalog\.askPrice/i });
    expect(link).toHaveAttribute("href", expect.stringContaining("wa.me"));
  });

  it("товар не в наличии — кнопка задизаблена", () => {
    render(<ProductCard product={{ ...mockProduct, inStock: false }} />);
    const btn = screen.getByText(/catalog\.badges\.outOfStock/i).closest("a");
    expect(btn).toHaveClass("pointer-events-none");
  });
});