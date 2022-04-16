import { render, screen } from "@testing-library/react";
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
});
