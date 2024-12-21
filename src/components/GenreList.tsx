import useGenres from "@/hooks/useGenres";

function GenreList() {
  const { data } = useGenres();
  return (
    <div>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GenreList;
