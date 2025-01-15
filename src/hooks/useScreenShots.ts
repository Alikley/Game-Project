import { useQuery } from "@tanstack/react-query";
import { ScreenShots } from "../entites/ScreenShots";
import APIClient from "../services/api-client";

const useScreenShots = (gameId: number) => {
  const apiClient = new APIClient<ScreenShots>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShots;
