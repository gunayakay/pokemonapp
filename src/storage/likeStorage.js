import AsyncStorage from "@react-native-async-storage/async-storage";
import storageKeys from "../static/storageKeys";

async function initLikeStorage() {
  AsyncStorage.setItem(storageKeys.likedPokemons, JSON.stringify([]));
}

async function setPokemon(id) {
  const currentLikesString = await AsyncStorage.getItem(
    storageKeys.likedPokemons
  );
  const currentLikes = JSON.parse(currentLikesString);
  currentLikes.push(id);
  AsyncStorage.setItem(storageKeys.likedPokemons, JSON.stringify(currentLikes));
}

async function filterPokemon(id) {
  const currentLikesString = await AsyncStorage.getItem(
    storageKeys.likedPokemons
  );
  const currentLikes = JSON.parse(currentLikesString);
  return currentLikes.includes(id);
}

async function deletePokemon(id) {
  const currentLikesString = await AsyncStorage.getItem(
    storageKeys.likedPokemons
  );
  const currentLikes = JSON.parse(currentLikesString);
  const deletedArray = currentLikes.filter((item) => item !== id);

  await AsyncStorage.setItem(
    storageKeys.likedPokemons,
    JSON.stringify(deletedArray)
  );
}

async function getPokemons() {
  const currentLikesString = await AsyncStorage.getItem(
    storageKeys.likedPokemons
  );
  const currentLikes = JSON.parse(currentLikesString);
  return currentLikes;
}

export { setPokemon, filterPokemon, deletePokemon, getPokemons };

export default initLikeStorage;
