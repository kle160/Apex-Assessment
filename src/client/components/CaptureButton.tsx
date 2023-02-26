import { FC } from "react";
import { Box, Button } from "@chakra-ui/react";
import { usePokedex } from "../hooks";
import "./styles/CaptureButton.css";

export const CaptureButton: FC = () => {
  const { pokemonSearchResultData, addPokemonToList } = usePokedex();

  // Add Pokemon to captured list
  const handleCaptureButton = () => {
    if (pokemonSearchResultData !== null) {
      addPokemonToList(pokemonSearchResultData as object);
    }
  };

  return (
    <Box>
      <Button className="btn-capture" onClick={handleCaptureButton} size="lg">
        Capture
      </Button>
    </Box>
  );
};
