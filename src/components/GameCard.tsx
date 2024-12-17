import { Game } from "../hooks/useGame";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <div>
      <Card.Root borderRadius={10} overflow={"hidden"}>
        <Image src={game.backgrond_image} />
        <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card.Root>
    </div>
  );
}

export default GameCard;
