export const state = () => ({
  posts: [],
  menuIsOpen: false
})

export const mutations = {

  SET_POSTS (state, posts) {
    state.posts = posts
  },

  TOGGLE_MENU_STATE (state) {
    state.menuIsOpen = !state.menuIsOpen
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  // nuxtServerInit({ commit }, { req }) {
  //   if (req.session && req.session.authUser) {
  //     commit('SET_USER', req.session.authUser)
  //   }
  // },
  // async login({ commit }, { username, password }) {
  //   try {
  //     const { data } = await axios.post('/api/login', { username, password })
  //     commit('SET_USER', data)
  //   } catch (error) {
  //     if (error.response && error.response.status === 401) {
  //       throw new Error('Bad credentials')
  //     }
  //     throw error
  //   }
  // },
  //
  // async logout({ commit }) {
  //   await axios.post('/api/logout')
  //   commit('SET_USER', null)
  // }

}
