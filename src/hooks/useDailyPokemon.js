import { useQuery } from "@tanstack/react-query";
import getPokemonDetail from "../services/getPokemonDetail";

function useDailyPokemon(url) {
  return useQuery(
    ["todayPokemon", url],
    async () => {
      const data = await getPokemonDetail(url);
      return data;
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false, // ekrana geri döndüğünde tekrardan fetch işlemini çalştrma
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24, // cacheTime ' n staleTime'dan büyük olmaması önerilir çünkü baat veriyi cachede tutmak saçma
    }
  );
}
export default useDailyPokemon;
