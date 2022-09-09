async function getAbilities() {
  const response = await fetch("https://pokeapi.co/api/v2/ability?limit=40");
  const data = await response.json();
  return data;
}

export default getAbilities;
