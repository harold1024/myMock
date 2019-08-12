import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

// const state = {
// 	adminInfo: {
// 		avatar: 'default.jpg'
// 	},
// }
const Store = new Vuex.Store({
	state: {
		localeLang: 'CN'
	},
	actions,
	getters,
	mutations,
})

export default Store