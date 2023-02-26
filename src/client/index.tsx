import { FC } from "react";
import { Box, Stack, Center } from "@chakra-ui/react";
import { CapturedList, InfoDisplay, CaptureButton, Search } from "./components";
import { PokedexProvider } from "./hooks";

const App: FC = () => (
  <div>
    <PokedexProvider>
      <Center h="100vh">
        <Box w="full" maxWidth="600px">
          <Stack direction="row" spacing={0.5}>
            <Stack borderWidth={6} rounded="xl" borderColor="red.900" p={4} bg="red.600">
              <Search />
              <InfoDisplay />
              <CaptureButton />
            </Stack>
            <CapturedList />
          </Stack>
        </Box>
      </Center>
    </PokedexProvider>
  </div>
);

export default App;
