export default {
  SET_POKEMONS (state, payload) {
    state.pokeLists = payload
  },
  SET_POKEMON (state, payload) {
    state.pokemonDetails = payload
  },
  SET_MODAL (state, payload) {
    state.showDetail = payload
  },
  SET_TYPES (state, payload) {
    state.allPokemonTypes = payload
  },
  SET_PREV (state, payload) {
    state.prevLists = payload
  },
  SET_NEXT (state, payload) {
    state.nextLists = payload
  }
}
