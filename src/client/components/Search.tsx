import { FC, KeyboardEvent } from "react";
import { HStack, Input, Button } from "@chakra-ui/react";
import { usePokedex } from "../hooks";

export const Search: FC = () => {
  const { searchBarValue, changePokemonSearchValue, setPokemonSearch, setSearchBarValue } =
    usePokedex();

  // Makes a new search to fetch if user types in new pokemon name or id
  const handleSearchButtonClick = (): void => {
    setPokemonSearch(searchBarValue);
    setSearchBarValue("");
  };

  return (
    <HStack>
      <Input
        className="input-search-bar"
        borderWidth={5}
        borderColor="red.900"
        bg="white"
        placeholder="name/id"
        value={searchBarValue}
        onChange={changePokemonSearchValue}
        onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter" && searchBarValue && searchBarValue.length > 0) {
            handleSearchButtonClick();
          }
        }}
      />
      <Button
        borderWidth={5}
        borderColor="red.900"
        backgroundColor="red.700"
        color="white"
        onClick={(): void => {
          if (searchBarValue && searchBarValue.length > 0) {
            handleSearchButtonClick();
          }
        }}
      >
        Search
      </Button>
    </HStack>
  );
};
