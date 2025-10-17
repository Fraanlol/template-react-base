import { render, screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";


test('renders the given title', () => {
  render(<Header title="Test Title" />);
  expect(screen.getByText(/test title/i)).toBeInTheDocument();

  render(<Header title="Another Title" />);
  expect(screen.getByText(/another title/i)).toBeInTheDocument();
});
