import Vue from 'vue'

export default Vue.observable({
  pokeLists: [],
  prevLists: [],
  nextLists: [],
  pokemonDetails: [],
  allPokemonTypes: [],
  showDetail: false,
  apiUrl: 'https://pokeapi.co/api/v2',
  imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
})
