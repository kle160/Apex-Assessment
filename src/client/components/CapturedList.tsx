import { MouseEvent, FC } from "react";
import { Stack, Box, Image } from "@chakra-ui/react";
import { usePokedex } from "../hooks";
import "./styles/CapturedList.css";

export const CapturedList: FC = () => {
  const { capturedPokemonList, deletePokemonFromList } = usePokedex();

  // Delete pokemon from captured list by clicking on the image of the pokemon
  const handleImageClick = (event: MouseEvent<HTMLDivElement>, index: number): void => {
    deletePokemonFromList(index);
  };

  return (
    <Stack className="stack-container">
      <Box className="captured-list-box" data-testid="captured-box">
        {capturedPokemonList.length > 0 &&
          capturedPokemonList.map((pokemonImg: string, index: number): JSX.Element => {
            return (
              <div
                className="captured-image"
                key={index}
                onClick={(event: MouseEvent<HTMLDivElement>): void =>
                  handleImageClick(event, index)
                }
              >
                <Image src={pokemonImg} alt={`Captured Pokemon ${index}`} />
              </div>
            );
          })}
      </Box>
    </Stack>
  );
};
