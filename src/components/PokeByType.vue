<template>
  <div>
    <b-dropdown-item href="#">{{pokemonType.name.charAt(0).toUpperCase() + pokemonType.name.slice(1)}}</b-dropdown-item>
  </div>
</template>

<script>
export default {
  name: 'PokeByType',
  props: ['pokemonType']
}
</script>

<style lang="scss" scoped>
b-dropdown-item {
  display: flex;
}
</style>
