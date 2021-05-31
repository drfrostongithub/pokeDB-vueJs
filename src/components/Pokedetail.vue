<template>
  <section v-if="showDetail">
    <div class="pokeDetail">
      {{pokemonDetails.name}}
      <b-button variant="outline-danger"
      @click.prevent="closeDetail"
        >Close</b-button
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'Pokedetail',
  props: [],
  computed: {
    showDetail () {
      return this.$store.state.showDetail
    },
    pokemonDetails () {
      return this.$store.state.pokemonDetails
    }
  },
  methods: {
    closeDetail () {
      this.$store.commit('SET_MODAL', false)
    }
  }
}
</script>

<style>
</style>
