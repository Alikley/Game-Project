import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, Link, List, Spinner } from "@chakra-ui/react";
interface Props {
  onSelectGenre: (genre: Genre) => void;
}
function GenreList({ onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <div>
      <List.Root>
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY="7px" listStyle={"none"}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Link onClick={() => onSelectGenre(genre)}>{genre.name}</Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </div>
  );
}

export default GenreList;
