import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import PokeAPI from '@/services/pokeapi'

Vue.use(Vuex)

const limit = 25
const offset = 0

export default new Vuex.Store({
  state: {
    pokelists: [],
    pokemon: {},
    showDetail: false,
    apiUrl: 'https://pokeapi.co/api/v2',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  },
  mutations: {
    SET_POKEMONS (state, payload) {
      state.pokelists = payload
    },
    SET_POKEMON (state, payload) {
      state.pokemon = payload
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
          // console.log(newData)
          context.commit('SET_POKEMONS', newData)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchPokemonByName (context) {
      axios({
        method: 'GET',
        url: `${this.state.apiUrl}/pokemon/${context}`
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('SET_POKEMON', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
