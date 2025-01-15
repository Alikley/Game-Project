import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import useScreenShots from "../hooks/useScreenShots";
interface Props {
  gameId: number;
}
function GameScreenShots({ gameId }: Props) {
  const { data, isLoading, error } = useScreenShots(gameId);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <div>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {data?.results.map((file) => (
          <Image
            key={file.id}
            src={file.image}
            width={file.width}
            height={file.height}
          />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default GameScreenShots;
