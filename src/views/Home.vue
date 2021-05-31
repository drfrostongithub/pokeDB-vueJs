<template>
  <div class="home">
    <div class="alert alert-primary" role="alert">
      PokeDB
    </div>
    <Pokemon />
  </div>
</template>

<script>
// @ is an alias to /src
import Pokemon from '../components/Pokemon'

export default {
  name: 'Home',
  components: {
    Pokemon
  }
}
</script>
