<template>
  <div>
    <b-form-input
      v-model="text"
      placeholder="Enter Pokemon Type"
    />
    <!-- <div class="mt-2">Value: {{ text.toLowerCase() }}</div> -->
  </div>
</template>

<script>
export default {
  name: 'PokeByType',
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style>
</style>
