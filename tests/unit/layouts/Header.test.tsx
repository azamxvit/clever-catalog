// tests/unit/layouts/Header.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "@/components/layouts/Header";

describe("Header", () => {
  it("рендерит логотип", () => {
    render(<Header />);
    expect(screen.getByText(/CLEVE/)).toBeInTheDocument();
  });

  it("рендерит все nav-ссылки", () => {
    render(<Header />);
    expect(screen.getByText(/nav\.catalog/)).toBeInTheDocument();
    expect(screen.getByText(/nav\.laminate/)).toBeInTheDocument();
    expect(screen.getByText(/nav\.porcelain/)).toBeInTheDocument();
    expect(screen.getByText(/nav\.tile/)).toBeInTheDocument();
    expect(screen.getByText(/nav\.about/)).toBeInTheDocument();
  });

  it("показывает номер телефона", () => {
    render(<Header />);
    const phoneLinks = screen.getAllByRole("link", { name: /778.*606.*66.*11/ });
    expect(phoneLinks.length).toBeGreaterThan(0);
  });

  it("мобильное меню закрыто по умолчанию", () => {
    const { container } = render(<Header />);
    const mobileMenu = container.querySelector(".max-h-0");
    expect(mobileMenu).toBeInTheDocument();
  });

  it("бургер открывает мобильное меню", () => {
    render(<Header />);
    const burger = screen.getByLabelText("Меню");
    fireEvent.click(burger);
    const { container } = render(<Header />);
    fireEvent.click(container.querySelector("[aria-label='Меню']")!);
    expect(container.querySelector(".max-h-screen")).toBeInTheDocument();
  });

  it("ссылка /ceramogranit в nav", () => {
    render(<Header />);
    const links = screen.getAllByRole("link");
    const ceramHref = links.find((l) => l.getAttribute("href") === "/ceramogranit");
    expect(ceramHref).toBeInTheDocument();
  });
});