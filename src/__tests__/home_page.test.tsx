import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders the home page component", () => {
    render(<Home />);
    expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: /Ashikur Rahman/i }),
    ).toBeInTheDocument();

    const illustration = screen.getByAltText(
      /Hand-drawn illustration of Ashikur Rahman coding at a laptop/i,
    );
    expect(illustration).toBeInTheDocument();
  });
});
