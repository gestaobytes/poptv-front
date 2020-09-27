import axios from 'axios'
import Vuex from 'vuex'

// Vue.use(Vuex)

new Vuex.Store({
    state: {
        user: {},
        // item: {},
    },
    mutations: {
        setUser(state, user) {
            state.user = user
            if (user) {
                axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
            } else {
                delete axios.defaults.headers.common['Authorization']
            }
        },
        // setItem(state, obj) {
        //   state.item = obj
        // },

    }
})
