<template>
  <b-card
    :title="pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)"
    :img-src="pokemon.imgUrl + '.png'"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem"
    class="mb-2"
  >
  </b-card>
</template>

<script>
export default {
  name: 'Pokelist',
  props: ['pokemon'],
  data () {
    return {}
  }
}
</script>

<style>
</style>
