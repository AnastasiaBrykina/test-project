import { render, screen } from "@testing-library/react";
import { Test } from "./Test";

test("renders TEST text on main page", () => {
  render(<Test />);
  const testText = screen.getByText(/TEST/i);
  expect(testText).toBeInTheDocument();
});
