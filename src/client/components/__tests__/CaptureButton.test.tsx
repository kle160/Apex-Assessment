import { render, screen } from "@testing-library/react";
import { CaptureButton } from "../CaptureButton";

// Creating mock of the usePokedex hook
jest.mock("../../hooks", () => ({
  usePokedex: () => ({
    pokemonSearchResultData: {},
    addPokemonToList: jest.fn(),
  }),
}));

describe("CaptureButton", () => {
  it("renders the button correctly", () => {
    render(<CaptureButton />);
    const buttonElement = screen.getByRole("button", { name: "Capture" });
    expect(buttonElement).toBeInTheDocument();
  });
  it("has the correct text on the Capture button when rendered", () => {
    render(<CaptureButton />);
    const buttonElement = screen.getByRole("button", { name: "Capture" });
    expect(buttonElement).toHaveTextContent("Capture");
  });
});
