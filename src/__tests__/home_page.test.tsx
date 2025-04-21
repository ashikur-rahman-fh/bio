import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders the home page component", () => {
    const { getByText } = render(<Home />);
    expect(getByText(/Hello, I am/i)).toBeInTheDocument();
    expect(getByText(/Ashikur Rahman/i)).toBeInTheDocument();

    const dp = screen.getByAltText("ashikur-dp");
    expect(dp).toBeInTheDocument();
  });
});
