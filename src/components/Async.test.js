import { render, screen } from "@testing-library/react";

import Async from "./Async";

describe("Async component", () => {
  test("renders post if request success", async () => {
    render(<Async />);

    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });
});
