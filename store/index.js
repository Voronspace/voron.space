export const state = () => ({
	source: 'space' // 'voron.black'
})

export const mutations = {
	set_source(state, payload) {
		state.source = payload
	}
}

// export const getters = {
	// set_source(state) {
	// 	state.source = 'dsa'
	// }
// }

// export const actions = {

// 	getSource() {

// 	}

// 	// set_source(state) {
// 	// 	state.source = 'dsa'
// 	// }
// }