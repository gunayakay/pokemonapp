import { useQuery } from "@tanstack/react-query";
import getEvolution from "../services/getEvoluion";

function useEvolution(url) {
  return useQuery(["pokemonEvolutions", url], async () => {
    const data = await getEvolution(url);
    return data;
  });
}
export default useEvolution;
