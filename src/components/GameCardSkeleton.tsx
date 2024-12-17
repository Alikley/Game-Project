import { Card, CardBody, Skeleton } from '@chakra-ui/react'
import React from 'react'

function GameCardSkeleton() {
  return (
    <div>
        <Card.Root>
            <Skeleton height='200px' />
            <CardBody>
                
            </CardBody>
        </Card.Root>
    </div>
  )
}

export default GameCardSkeleton