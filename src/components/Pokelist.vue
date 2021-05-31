<template>
  <b-card
    :title="pokemon.name"
    :img-src="pokemon.imgUrl + '.png'"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 10rem"
    class="mb-2 pokecard capitalize"
    @click="fetchPokemonByNameOrID(pokemon._id)"
  >
  </b-card>
</template>

<script>
export default {
  name: 'Pokelist',
  props: ['pokemon'],
  methods: {
    fetchPokemonByNameOrID (id) {
      this.$store.dispatch('fetchPokemonByNameOrID', id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/colours.scss";
.pokecard:hover {
  cursor: pointer;
  background: $colourPositive;
}
h4 {
  font-size: 1em;
}
</style>
