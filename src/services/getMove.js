async function getMove() {
  const response = await fetch("https://pokeapi.co/api/v2/move?limit=40");
  const data = await response.json();
  return data;
}

export default getMove;
