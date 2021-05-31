<template>
  <b-card
    :title="pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)"
    :img-src="pokemon.imgUrl + '.png'"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 12rem"
    class="mb-2 pokecard"
    @click="openDetail(pokemon.name, index)"
  >
  </b-card>
</template>

<script>
export default {
  name: 'Pokelist',
  props: ['pokemon'],
  methods: {
    openDetail () {}
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/colours_vars.scss";
.pokecard:hover {
  cursor: pointer;
  background: $colourPositive;
}
</style>
