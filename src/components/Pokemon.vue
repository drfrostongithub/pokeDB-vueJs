<template>
  <div class="container">
    <div class="row">
      <Pokesearch />

      <Pokelist
        v-for="(pokemon, index) in pokemons"
        :key="pokemon + index"
        :pokemon="pokemon"
        name="pokelist"
      />

      <Pokedetail v-if="showDetail" />
    </div>
  </div>
</template>

<script>
import Pokelist from './Pokelist'
import Pokedetail from './Pokedetail'
import Pokesearch from './Pokesearch'

export default {
  name: 'Pokemon',
  components: {
    Pokelist,
    Pokedetail,
    Pokesearch
  },
  computed: {
    pokemons () {
      return this.$store.state.pokelists
    },
    showDetail () {
      return this.$store.state.showDetail
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
  margin: auto;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: -webkit-fill-available;
  background: radial-gradient($colourNotification, $colourGreyBackground);
}

.row {
  justify-content: space-evenly;
  max-width: 50%;
}
</style>
