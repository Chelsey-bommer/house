
import { createStore } from 'vuex';

export default createStore({
    state: {
        houseList: [],
    },
    mutations: {
        setHouseList(state, newHouseList) {
            state.houseList = newHouseList;
        },
    },
    actions: {
        
        async addNewHouse({ commit, state }, newHouse) {
            // You can perform any asynchronous logic here (e.g., API calls) before committing the mutation
            commit('setHouseList', [...state.houseList, newHouse]);
        },
    },
    // other store configurations...
});

