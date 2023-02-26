import { useEffect, useState } from "react";
import { Stack, Box, Image, Text, Wrap, WrapItem, Badge, HStack } from "@chakra-ui/react";
import { usePokedex } from "../hooks";
import { PokemonInfo } from "../types";

export const InfoDisplay = (): JSX.Element => {
  const { pokemonSearchResultData } = usePokedex();
  const [displayedPokemon, setDisplayedPokemon] = useState<PokemonInfo[]>([]);

  // Creating object of only needed data from result of pokemon search
  useEffect(() => {
    if (pokemonSearchResultData) {
      const newDisplayedPokemon: PokemonInfo[] = [
        {
          img: pokemonSearchResultData.sprites.front_default,
          name: pokemonSearchResultData.name,
          id: pokemonSearchResultData.id,
          types: pokemonSearchResultData.types,
          stats: pokemonSearchResultData.stats,
        },
      ];
      setDisplayedPokemon(newDisplayedPokemon);
    }
  }, [pokemonSearchResultData]);

  return (
    <Stack direction="row" spacing={5}>
      <Box>
        <Box bg="gray.100" rounded="lg">
          {displayedPokemon.length === 1 && <Image src={displayedPokemon[0].img} />}
        </Box>
      </Box>
      <Stack>
        <Text color="white" fontSize="xl" fontWeight={600}>
          {displayedPokemon.length === 1 &&
            displayedPokemon[0].name.charAt(0).toUpperCase() + displayedPokemon[0].name.slice(1)}
        </Text>
        <Text color="white" fontSize="md" fontWeight={600}>
          #{displayedPokemon.length === 1 && displayedPokemon[0].id}
        </Text>
        <Text color="white">Type</Text>
        <Box>
          <Wrap>
            <WrapItem>
              {displayedPokemon.length === 1 &&
                displayedPokemon[0].types.map((pokemon) => (
                  <Badge key={pokemon.slot} borderWidth={3} rounded="md" borderColor="red.800">
                    {pokemon.type.name}
                  </Badge>
                ))}
            </WrapItem>
          </Wrap>
        </Box>
        <HStack color="white" spacing={4} textAlign="center">
          <Stack>
            <Text>HP</Text>
            <Text>{displayedPokemon.length === 1 && displayedPokemon[0].stats[0].base_stat}</Text>
          </Stack>
          <Stack>
            <Text>Attack</Text>
            <Text>{displayedPokemon.length === 1 && displayedPokemon[0].stats[1].base_stat}</Text>
          </Stack>
          <Stack>
            <Text>Defense</Text>
            <Text>{displayedPokemon.length === 1 && displayedPokemon[0].stats[2].base_stat}</Text>
          </Stack>
          <Stack>
            <Text>Speed</Text>
            <Text>{displayedPokemon.length === 1 && displayedPokemon[0].stats[5].base_stat}</Text>
          </Stack>
        </HStack>
      </Stack>
    </Stack>
  );
};
