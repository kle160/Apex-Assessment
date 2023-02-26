import { FC, ChangeEvent, createContext, useContext, useState } from "react";
import { useFetch } from "../hooks";
import { Props } from "../types";

const PokedexContext = createContext<any>(null);

export const usePokedex = () => useContext(PokedexContext);

export const PokedexProvider: FC<Props> = ({ children }: Props) => {
  const { pokemonSearchResultData, setPokemonSearch } = useFetch();
  const [searchBarValue, setSearchBarValue] = useState<string | number>("");
  const [capturedPokemonList, setCapturedPokemonList] = useState<string[]>([]);

  // Captures changes made from user typing either string or number
  const changePokemonSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (typeof event.target.value === "string") {
      setSearchBarValue(event.target.value.toLowerCase());
    } else {
      setSearchBarValue(event.target.value);
    }
  };

  const addPokemonToList = (pokemonSearchValue: object) => {
    if (pokemonSearchResultData && capturedPokemonList.length < 6) {
      setCapturedPokemonList([
        ...capturedPokemonList,
        pokemonSearchResultData.sprites.front_default,
      ]);
    }
  };

  const deletePokemonFromList = (index: number) => {
    setCapturedPokemonList(capturedPokemonList.filter((capturedPokemonList, i) => i !== index));
  };

  return (
    <PokedexContext.Provider
      value={{
        searchBarValue,
        capturedPokemonList,
        pokemonSearchResultData,
        setSearchBarValue,
        setCapturedPokemonList,
        setPokemonSearch,
        changePokemonSearchValue,
        addPokemonToList,
        deletePokemonFromList,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};
