const generateRandomPokemon = (max, min) => {
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};
export default generateRandomPokemon;
