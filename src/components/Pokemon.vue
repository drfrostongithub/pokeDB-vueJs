<template>
  <div class="container">
    <div class="row">
      <b-dropdown
        text="All pokemon types"
        block
        variant="primary"
        class="m-2"
        menu-class="w-100"
        style="width: 100%"
      >
        <PokeByType
          v-for="(pokemonType, index) in pokemonTypes"
          :key="pokemonType + index"
          :pokemonType="pokemonType"
          name="pokeType"
        />
      </b-dropdown>

      <Pokedetail />

      <Pokelist
        v-for="(pokemon, index) in pokemons"
        :key="pokemon + index"
        :pokemon="pokemon"
        name="pokeList"
      />
    </div>
  </div>
</template>

<script>
import Pokelist from './Pokelist'
import Pokedetail from './Pokedetail'
import PokeByType from './PokeByType'

export default {
  name: 'Pokemon',
  components: {
    Pokelist,
    Pokedetail,
    PokeByType
  },
  computed: {
    // All Pokemons
    pokemons () {
      return this.$store.state.pokeLists
    },
    // Pokemon Detail (one)
    pokemon () {
      return this.$store.state.pokemonDetails
    },
    // All Pokemon Types
    pokemonTypes () {
      return this.$store.state.allPokemonTypes
    }
  },
  created () {
    this.$store.dispatch('fetchPokemons')
    this.$store.dispatch('fetchPokemonTypes')
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

.dropdown {
  button {
    width: 100%;
  }
}
</style>
