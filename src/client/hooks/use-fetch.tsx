import { useEffect, useState } from "react";
import { APIResponse } from "../types";

export const useFetch = () => {
  const [currentPokemon, setCurrentPokemon] = useState<string | number>(1);
  const [pokemonSearchResultData, setPokemonSearchResultData] = useState<APIResponse>();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`);
        const data: APIResponse = await response.json();
        setPokemonSearchResultData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPokemon();
  }, [currentPokemon]);

  // function to search new pokemon after user submits to avoid continually fetches from event.target.value changing via typing
  const setPokemonSearch = (pokemonSearchValue: string | number): void => {
    setCurrentPokemon(pokemonSearchValue);
  };

  return { pokemonSearchResultData, setPokemonSearch };
};
