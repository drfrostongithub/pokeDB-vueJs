<template>
  <section v-if="showDetail">Modal</section>
</template>

<script>
export default {
  name: 'Pokedetail',
  props: [],
  computed: {
    showDetail () {
      return this.$store.state.showDetail
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
