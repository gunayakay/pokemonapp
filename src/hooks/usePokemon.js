import { useQuery } from "@tanstack/react-query";
import getPokemonDetail from "../services/getPokemonDetail";

function usePokemon(url) {
  return useQuery(["pokemonDetail", url], async () => {
    const data = await getPokemonDetail(url);
    return data;
  });
}
export default usePokemon;
