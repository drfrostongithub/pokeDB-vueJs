<template>
  <div class="container">
    <div class="row">
      <b-button-group class="mr-1">
        <b-button
          v-if="prevLists"
          @click.prevent="changeListPokemons(prevLists)"
        >
          <b-icon icon="arrow-left-short" animation="cylon">
          </b-icon>
        </b-button>
        <b-dropdown text="Pokemon types" menu-class="w-100">
          <PokeByType
            v-for="(pokemonType, index) in pokemonTypes"
            :key="pokemonType + index"
            :pokemonType="pokemonType"
            name="pokeType"
          />
        </b-dropdown>
        <b-button
          v-if="nextLists"
          @click.prevent="changeListPokemons(nextLists)"
        >
          <b-icon icon="arrow-right-short" animation="cylon">
          </b-icon>
        </b-button>
      </b-button-group>

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
    },
    prevLists () {
      return this.$store.state.prevLists
    },
    nextLists () {
      return this.$store.state.nextLists
    }
  },
  created () {
    this.$store.dispatch('fetchPokemons')
    this.$store.dispatch('fetchPokemonTypes')
  },
  methods: {
    changeListPokemons (url) {
      this.$store.dispatch('changeListPokemons', url)
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/colours.scss";
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
.mr-1 {
  display: flex;
  justify-content: space-around;
  padding: 1%;
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
