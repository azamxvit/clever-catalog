// tests/setup.ts
import "@testing-library/jest-dom";
import React from "react"; // ✅ нужен для React.createElement в моках

// Mock next-intl
jest.mock("next-intl", () => ({
  useTranslations: (ns: string) => (key: string) => `${ns}.${key}`,
  getTranslations: (ns: string) => async (key: string) => `${ns}.${key}`,
}));

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter:   () => ({ push: jest.fn(), replace: jest.fn() }),
  usePathname: () => "/",
}));

// Mock @/lib/routing (next-intl routing)
jest.mock("@/lib/routing", () => ({
  useRouter:   () => ({ push: jest.fn(), replace: jest.fn() }),
  usePathname: () => "/",
  Link:        ({ children, href }: { children: React.ReactNode; href: string }) =>
                 React.createElement("a", { href }, children),
}));

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) =>
    React.createElement("img", { src, alt }),
}));