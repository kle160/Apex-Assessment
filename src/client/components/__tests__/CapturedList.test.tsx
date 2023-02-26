import { render, screen } from "@testing-library/react";
import { CapturedList } from "../CapturedList";

// Creating mock of the usePokedex hook
jest.mock("../../hooks", () => ({
  usePokedex: () => ({
    capturedPokemonList: [],
    deletePokemonFromList: jest.fn(),
  }),
}));

describe("CapturedList", () => {
  it("renders the box element within CapturedList correctly", () => {
    render(<CapturedList />);
    const boxElement = screen.getByTestId("captured-box");
    expect(boxElement).toBeInTheDocument();
  });
});
