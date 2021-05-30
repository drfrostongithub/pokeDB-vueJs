<template>
  <div class="container">
    <h1>Pokemons</h1>
    <div class="row">
      <Pokelist
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
        name="pokelist"
      />

      <Pokedetail />
    </div>
  </div>
</template>

<script>
import Pokelist from './Pokelist'
import Pokedetail from './Pokedetail'

export default {
  name: 'Pokemon',
  components: {
    Pokelist,
    Pokedetail
  },
  computed: {
    pokemons () {
      return this.$store.state.pokelists
    }
  },
  created () {
    this.$store.dispatch('fetchPokemons')
  }
}
</script>

<style lang="scss">
@import "../assets/scss/colours_vars.scss";
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: -webkit-fill-available;
  background: radial-gradient($colourNotification, $colourGreyBackground);
}

.row {
  justify-content: center;
}
</style>
