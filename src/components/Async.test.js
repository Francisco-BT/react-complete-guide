import { render, screen } from "@testing-library/react";

import Async from "./Async";

describe("Async component", () => {
  test("renders post if request success", async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: jest
        .fn()
        .mockResolvedValueOnce([{ id: "p1", title: "first post" }]),
    });
    render(<Async />);

    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });
});
