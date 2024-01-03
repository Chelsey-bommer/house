
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'

export default createStore({
    state: {
        houseList: [],
        addedHouseList: []
    },
    mutations: {
        setHouseList(state, newHouseList) {
            state.houseList = newHouseList;
        },
        setAddedHouseList(state, addedHouseList) {
            state.addedHouseList = addedHouseList;
        },
    },
    plugins: [createPersistedState()],
    // other store configurations...
});

