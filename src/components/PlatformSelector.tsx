import { Platform } from "@/hooks/useGame";
import usePlatform from "@/hooks/usePlatform";
import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}
function PlatformSelector({ onSelectPlatform }: Props) {
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
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
              value={platform.name}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </div>
  );
}

export default PlatformSelector;
