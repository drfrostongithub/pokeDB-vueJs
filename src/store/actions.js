import axios from 'axios'

const limit = 25
const offset = 0

export default {
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
        context.commit('SET_PREV', res.data.previous)
        context.commit('SET_NEXT', res.data.next)
      })
      .catch(err => {
        console.log(err)
      })
  },
  changeListPokemons (context, payload) {
    axios({
      method: 'GET',
      url: `${payload}`
    })
      .then(res => {
        const newData = res.data.results.map(el => {
          const id = el.url.split('/')
          el._id = Number(id[6])
          el.imgUrl = `${this.state.imageUrl}${el._id}`
          return el
        })
        context.commit('SET_POKEMONS', newData)
        context.commit('SET_PREV', res.data.previous)
        context.commit('SET_NEXT', res.data.next)
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
        // console.log(data.results)
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
        context.commit('SET_POKEMON', data)
        context.commit('SET_MODAL', true)
      })
      .catch(err => {
        console.log(err)
      })
  },
  fetchPokemonByType (context, payload) {
    axios({
      method: 'GET',
      url: `${payload}`
    })
      .then(({ data }) => {
        const newData = data.pokemon.map(el => {
          const id = el.pokemon.url.split('/')
          el.name = el.pokemon.name
          el._id = Number(id[6])
          el.imgUrl = `${this.state.imageUrl}${el._id}`
          return el
        })
        context.commit('SET_POKEMONS', newData)
        context.commit('SET_PREV', false)
        context.commit('SET_NEXT', false)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
