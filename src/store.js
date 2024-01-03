
import { createStore } from 'vuex';

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
    
    // other store configurations...
});

