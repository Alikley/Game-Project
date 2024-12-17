import { Game } from "../hooks/useGame";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <div>
      <Card.Root borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
           <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
        </CardBody>
      </Card.Root>
    </div>
  );
}

export default GameCard;
