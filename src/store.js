
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
        setHouseDetails(state, houseDetails) {
            state.houseDetails = houseDetails;
        },
    },
    plugins: [createPersistedState()],
    actions: {
        generateNewId({ state }) {
          const houseList = state.houseList.concat(state.addedHouseList);
          if (houseList.length > 0) {
            const maxId = houseList.reduce((max, house) => Math.max(max, house.id), 0);
            return maxId + 1;
          } else {
            return 1;
          }
        },
        addHouse({ commit, dispatch, state }, newHouseData) {
          const newId = dispatch('generateNewId');
          const newHouse = { id: newId, ...newHouseData };
          commit('pushToAddedHouseList', newHouse);
          return newHouse;
        },
      },
    // other store configurations...
});

