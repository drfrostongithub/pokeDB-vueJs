import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const limit = 25
const offset = 0

export default new Vuex.Store({
  state: {
    pokeLists: [],
    pokemonDetails: [],
    allPokemonTypes: [],
    showDetail: false,
    apiUrl: 'https://pokeapi.co/api/v2',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  },
  mutations: {
    SET_POKEMONS (state, payload) {
      state.pokeLists = payload
    },
    SET_POKEMON (state, payload) {
      state.pokemonDetails = payload
    },
    SET_MODAL (state, payload) {
      state.showDetail = payload
    },
    SET_TYPES (state, payload) {
      state.allPokemonTypes = payload
    }
  },
  actions: {
    fetchPokemons (context) {
      axios({
        method: 'GET',
        url: `${this.state.apiUrl}/pokemon?limit=${limit}&offset=${offset}`
      })
        .then(res => {
          const newData = res.data.results.map(el => {
            const id = el.url.split('/')
            el._id = Number(id[6])
            el.imgUrl = `${this.state.imageUrl}${el._id}`
            return el
          })
          context.commit('SET_POKEMONS', newData)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchPokemonTypes (context) {
      axios({
        method: 'GET',
        url: `${this.state.apiUrl}/type/`
      })
        .then(({ data }) => {
          console.log(data.results)
          context.commit('SET_TYPES', data.results)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchPokemonByNameOrID (context, payload) {
      axios({
        method: 'GET',
        url: `${this.state.apiUrl}/pokemon/${payload}`
      })
        .then(({ data }) => {
          // console.log(data)
          context.commit('SET_POKEMON', data)
          context.commit('SET_MODAL', true)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchPokemonByType (context, payload) {
      // console.log(payload)
      axios({
        method: 'GET',
        url: `${this.state.apiUrl}/type/${payload}`
      })
        .then(({ data }) => {
          // console.log(data)
          context.commit('SET_POKEMONS', data.pokemon)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
