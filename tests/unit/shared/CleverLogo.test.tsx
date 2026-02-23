// tests/unit/shared/CleverLogo.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { CleverLogo } from "@/components/shared/CleverLogo";

describe("CleverLogo", () => {
  it("рендерится без ошибок", () => {
    render(<CleverLogo />);
    expect(screen.getByText(/CLEVE/)).toBeInTheDocument();
  });

  it("показывает подпись 'Удачные приобретения'", () => {
    render(<CleverLogo />);
    expect(screen.getByText(/удачные приобретения/i)).toBeInTheDocument();
  });

  it("SVG клевера присутствует в DOM", () => {
    const { container } = render(<CleverLogo />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it.each([
    ["sm", "text-[20px]"],
    ["md", "text-[26px]"],
    ["lg", "text-[36px]"],
  ] as const)("применяет корректный размер '%s'", (size, expectedClass) => {
    const { container } = render(<CleverLogo size={size} />);
    const textEl = container.querySelector("div div");
    expect(textEl?.className).toContain(expectedClass);
  });
});