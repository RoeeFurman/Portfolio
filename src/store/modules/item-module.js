import itemService from '../../services/itemService.js'

export default {
    state: {
        items: null,
        filterBy: null,
    },
    getters: {
        items(state) {
            return state.items
        },
    },
    mutations: {
        setItems(state, { items }) {
            state.items = items
        },
        removeItem(state, { id }) {
            const idx = state.items.findIndex((item) => item._id === id)
            state.items.splice(idx, 1)
        },
        saveItem(state, { item }) {
            const idx = state.items.findIndex((currItem) => currItem._id === item._id)
            if (idx !== -1) state.items.splice(idx, 1, item)
            else state.items.push(item)
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy;
        },
    },
    actions: {
        async loadItems({ commit, state }) {
            try {
                const items = await itemService.query(state.filterBy)
                commit({ type: 'setItems', items })
            } catch (err) {
                console.log('loadItems err', err);
            }
        },
        async removeItem({ commit }, { id }) {
            try {
                const item = await itemService.remove(id)
                commit({ type: 'removeItem', id })

            } catch (err) {
                console.log('removeItem err', err);
            }
        },
        async saveItem({ commit }, { item }) {
            try {
                console.log(item)
                const getItem = await itemService.save(item)
                console.log(getItem)
                commit({ type: 'saveItem', item: getItem })
            } catch (err) {
                console.log('saveItem err', err);
            }
        },
        filter({ commit, dispatch }, { filterBy }) {
            // itemService.query(filterBy).then((items) => {
            //   commit({type: 'setItems', items});
            // });
            commit({ type: 'setFilter', filterBy });
            dispatch({ type: 'loadItems' });
        },
    },
}
