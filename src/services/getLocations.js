async function getLocation() {
  const response = await fetch("https://pokeapi.co/api/v2/location?limit=40");
  const data = await response.json();
  return data;
}

export default getLocation;
