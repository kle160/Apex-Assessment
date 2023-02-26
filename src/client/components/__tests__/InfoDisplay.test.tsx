import { render, screen } from "@testing-library/react";
import { InfoDisplay } from "../InfoDisplay";

// Creating mock of the usePokedex hook
jest.mock("../../hooks", () => ({
  usePokedex: () => ({
    capturedPokemonList: [],
    deletePokemonFromList: jest.fn(),
  }),
}));

describe("InfoDisplay", () => {
  test("renders a Stack component with a direction of 'row'", () => {
    render(<InfoDisplay />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });
});
