# Apex Pokedex Assignment

A simple Pokemon App that allows you to search for any pokemon and add it to your captured list. Data was gathered from https://pokeapi.co/.

## Preview
![Screenshot of the Pokemon app](public/Screenshot%202023-02-26%20at%206.17.49%20AM.png)

## Acceptance Criteria 

1. Users can search any pokemon by name or id and display it's information
	1. Front-facing image
	2. Name
	3. ID/Name
	4. List all types associated
	5. List 4 stats. (HP, Attack, Defense, Speed)

2. Capture Button
	1. Pressing the "Capture" button adds the current Pokemon to list on the right
		1. Can capture the same pokemon multiple times
		2. Can only capture up to 6 pokemon	
3. Captured List
	1. Displays all captured Pokemon images stacked vertically
	2. Clicking on a captured Pokemon removes it from the list

# Built With
- [React.js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Chakra-UI](https://chakra-ui.com/)
- [Jest](https://jestjs.io/)
- [React testing library](https://testing-library.com/docs/react-testing-library/intro/)

## Getting Started
To get a local copy up and running follow these simple steps.
1. Clone the repo
```
  git clone https://github.com/kle160/Apex-Assessment
```
2. Install Yarn packages
```
  yarn install
```
3. In the terminal, run `npm run start` and go to http://localhost:3000 to access the application
