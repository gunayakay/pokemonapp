import { useQuery } from "@tanstack/react-query";
import getAbout from "../services/getAbout";

function useAboutInfo(url) {
  return useQuery(["pokemonAboutInfo", url], async () => {
    const data = await getAbout(url);
    return data;
  });
}
export default useAboutInfo;
