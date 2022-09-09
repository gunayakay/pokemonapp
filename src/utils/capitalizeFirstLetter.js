/**
 * This function capitalizes the first letter of the given name.
 * @param {string} pokemon - name of the pokemoon to capitilaze
 * @returns {string}
s */
function capitalizeFirstLetter(pokemon) {
  return pokemon[0].toUpperCase() + pokemon.slice(1);
}
export default capitalizeFirstLetter;
