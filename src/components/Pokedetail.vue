<template>
  <div id="myModal" class="modal" v-if="showDetail">
    <div class="modal-content">
      <!-- <span class="close" @click.prevent="closeDetail">&times;</span> -->
      <h1>
        {{
          pokemonDetails.name.charAt(0).toUpperCase() +
          pokemonDetails.name.slice(1)
        }}
      </h1>
      <div class="img-wrapper">
        <img
          :src="pokemonDetails.sprites.front_default"
          alt="image-poke"
          width="100"
          height="100"
        />
      </div>

      <div class="text-wrapper">
        <div class="stats">
          <div class="exp">
            <p>Base Exp</p>
            <p>{{ pokemonDetails.base_experience }} Exp</p>
          </div>

          <div class="height">
            <p>Height</p>
            <p>{{ pokemonDetails.height / 10 }} Meters</p>
          </div>

          <div class="weight">
            <p>Weight</p>
            <p>{{ pokemonDetails.weight / 10 }} Kilograms</p>
          </div>
        </div>

        <div class="buttons">
          <div class="types-title">
            <p>Pokemon Types</p>
          </div>

          <div class="types-buttons">
            <button
              class="type-btn capitalize"
              v-for="(type, index) in pokemonDetails.types"
              :key="type + index"
            >
              {{ pokemonDetails.types[index].type.name }}
            </button>
          </div>

          <div class="abilities-title">
            <p>Abilities</p>
          </div>

          <div class="abilities-buttons">
            <button
              class="ability-btn capitalize"
              v-for="(ability, index) in pokemonDetails.abilities"
              :key="ability + index"
            >
              {{ pokemonDetails.abilities[index].ability.name }}
            </button>
          </div>
        </div>
      </div>

      <b-button variant="outline-danger" @click.prevent="closeDetail"
        >Close</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pokedetail',
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

<style lang="scss" scoped>
@import "../assets/scss/colours.scss";
h1 {
  padding: 0;
  margin: 0;
  background: $colourWhite;
  width: 100%;
  border-radius: inherit;
}
.modal {
  display: flex;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  position: relative;
  margin: auto;
  padding: 1%;
  width: 40%;
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;

  // GlassMorphism
  background: $colourGreyBackground;
  box-shadow: 0 8px 32px 0 $colourText;
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 10px;
  border: 1px solid $colourHeading;
}

.stats {
  display: flex;
  flex-direction: column;
  margin: 0 0 10%;
  .exp,
  .height,
  .weight {
    display: grid;
    grid-template-columns: 100px 100px;
    border-bottom: 1px solid rgb(94, 93, 93);
    p {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.buttons {
  padding-bottom: 5%;
}
p {
  margin: 0;
  padding: 0;
}
.text-wrapper {
  display: flex;
  flex-direction: column;
}

@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

.modal-header {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}

.modal-body {
  padding: 2px 16px;
}

.modal-footer {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}

/* Phones */
@media (max-width: 690px) {
  .modal-content {
    width: 100%;
  }
}
</style>
