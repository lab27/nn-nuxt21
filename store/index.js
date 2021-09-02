export const state = () => ({
    visited: []
})

export const mutations = {
    addToVisited(state, data) {
        state.visited.push(data)
    }
}

export const getters = {
    visited(state) {
        return state.visited
    }
}