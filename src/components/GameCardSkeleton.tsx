import { Card, CardBody } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "./ui/skeleton";

function GameCardSkeleton() {
  return (
    <div>
      <Card.Root>
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card.Root>
    </div>
  );
}

export default GameCardSkeleton;
