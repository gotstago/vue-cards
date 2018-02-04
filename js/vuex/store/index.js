import Vue from 'vue';
import Vuex from 'vuex';

import getters from '../getters';
import actions from '../actions';
import mutations from '../mutations';

//have vuex involved
Vue.use(Vuex);

const state = {
    leftMatched: 0,
    highestSpeed: 0,
    status: '',
    cards: [],
    westCards: [],
    northCards: [],
    eastCards: [],
    southCards: [],
    trickCards: [],
    elapsedMs: 0,
    dealer: 0,
    round: 0,
    dealerPosition: 0,
    players: [],
};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    strict: process.env.NODE_ENV !== 'production'
});
