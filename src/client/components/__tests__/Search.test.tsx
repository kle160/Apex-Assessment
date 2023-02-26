import { render, screen } from "@testing-library/react";
import { Search } from "../Search";

// Creating mock of the usePokedex hook
jest.mock("../../hooks", () => ({
  usePokedex: () => ({
    pokemonSearchResultData: {},
    addPokemonToList: jest.fn(),
  }),
}));

describe("SearchButton", () => {
  it("renders the button within Search correctly", () => {
    render(<Search />);
    const buttonElement = screen.getByRole("button", { name: "Search" });
    expect(buttonElement).toBeInTheDocument();
  });
  it("has the correct text on the button element within Search when button is rendered", () => {
    render(<Search />);
    const buttonElement = screen.getByRole("button", { name: "Search" });
    expect(buttonElement).toHaveTextContent("Search");
  });
  it("renders the input element within Search correctly", () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText("name/id");
    expect(inputElement).toBeInTheDocument();
  });
  it("initially has an empty search bar value for the input element within Search", () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText("name/id");
    expect(inputElement).toHaveValue("");
  });
});
