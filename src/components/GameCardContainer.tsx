import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Prosp {
  children: ReactNode;
}
function GameCardContainer({ children }: Prosp) {
  return (
    <div>
      <Box borderRadius={10} overflow={"hidden"}>
        {children}
      </Box>
    </div>
  );
}

export default GameCardContainer;
