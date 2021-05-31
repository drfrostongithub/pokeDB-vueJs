<template>
  <div>
    <b-dropdown-item
    class="capitalize"
    href="#"
    @click.prevent="fetchPokemonByType(pokemonType.url)">{{pokemonType.name}}</b-dropdown-item>
  </div>
</template>

<script>
export default {
  name: 'PokeByType',
  props: ['pokemonType'],
  methods: {
    fetchPokemonByType (url) {
      this.$store.dispatch('fetchPokemonByType', url)
    }
  }
}
</script>

<style lang="scss" scoped>
b-dropdown-item {
  display: flex;
}
</style>
