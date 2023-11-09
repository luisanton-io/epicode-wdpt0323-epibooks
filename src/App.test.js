import { render, screen } from "@testing-library/react";
import App from "./components/App";
import fantasy from "./data/fantasy.json";
import userEvent from "@testing-library/user-event";

describe("EPIBOOKS!", () => {
  test("renders EPIBOOKS", () => {
    render(<App />);
  });

  test("renders Welcome component to Epibooks!", () => {
    const screen = render(<App />);

    // // use the data-testid attribute to find the element
    const welcomeElement = screen.getByTestId("welcome");
    expect(welcomeElement).toBeInTheDocument();
  });

  test("that the navbar filtering only returns the correct books", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText("Search for books");
    expect(inputElement).toBeInTheDocument();

    userEvent.type(inputElement, "sword of");
    expect(inputElement).toHaveValue("sword of");

    // only 2 books should be visible
    const bookElements = screen.getAllByTestId("book");
    expect(bookElements.length).toBe(2);
  });
});
