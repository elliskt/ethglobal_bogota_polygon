import { createStore } from "vuex";

export default createStore({
    state: {
        walletAddress: ''
    },
    mutations: {
        saveWalletAddress(state, data) {
            state.walletAddress = data;
        }
    },
    actions: {},
    modules: {},
});