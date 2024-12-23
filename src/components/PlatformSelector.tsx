import usePlatform from "@/hooks/usePlatform";
import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

function PlatformSelector() {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <div>
      <MenuRoot size="md">
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            Open Menu <BsChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent>
          {data.map((platform) => (
            <MenuItem key={platform.id} value={platform.name}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </div>
  );
}

export default PlatformSelector;
