
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
        pushToAddedHouseList(state, newHouse) {
            state.addedHouseList.push(newHouse);
        },
    },
    plugins: [createPersistedState()],
    // other store configurations...
});

