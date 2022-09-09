import { useQuery } from "@tanstack/react-query";
import getDescription from "../services/getDescription";

function useDescription(url) {
  return useQuery(["abilityDescription", url], async () => {
    const data = await getDescription(url);
    return data;
  });
}
export default useDescription;
