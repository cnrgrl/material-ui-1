import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Create from "./Create";

describe("text?", () => {
  it("seems?", () => {
    render(<Create />);
    const elem = screen.getByText(/create page/i);
    expect(elem).toBeInTheDocument();
  });
});
