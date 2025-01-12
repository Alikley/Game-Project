import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

function ExpandableText({ children }: Props) {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if(!children) return null

  if (children.length <= limit) return <Text>{children}</Text>;

  const summry = expanded ? children : children.substring(0, limit) + '...';

  return (
    <div>
      <Text>
        {summry}
        <Button
          size={"sm"}
          marginLeft={1}
          fontWeight="bold"
          colorScheme={"yellow"}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </div>
  );
}

export default ExpandableText;
