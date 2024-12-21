import { Card, CardBody } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "./ui/skeleton";

function GameCardSkeleton() {
  return (
    <div>
      <Card.Root width="200px" borderRadius={10} overflow="hidden">
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card.Root>
    </div>
  );
}

export default GameCardSkeleton;
