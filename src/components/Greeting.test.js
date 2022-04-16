import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greetings";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorld = screen.getByText("Hello World!");
    expect(helloWorld).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);

    const paragraphEl = screen.getByText("good to see you", { exact: false });
    expect(paragraphEl).toBeInTheDocument();
  });

  test("renders Changed! if the button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const paragraphElement = screen.getByText("Changed!");
    expect(paragraphElement).toBeInTheDocument();
  });

  test("does not render good to see if the button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const paragraphElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(paragraphElement).toBeNull();
  });
});
