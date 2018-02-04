
import { shuffle } from '../../lib/shuffle';
import { randomName } from '../../lib/names';
import { STATUS } from '../store/statusEnum';

const cardNames = [
    '6C', '6D', '6H', '6S', '7C', '7D', '7H', '7S', '8C', '8D', '8H', '8S',
    '9C', '9D', '9H', '9S', '0C', '0D', '0H', '0S', 'JC', 'JD', 'JH', 'JS',
    'QC', 'QD', 'QH', 'QS', 'KC', 'KD', 'KH', 'KS', 'AC', 'AD', 'AH', 'AS',
];//

const positions = [
    'south', 'west', 'north', 'east'
]

let timerId;

let statusHandler = {
    PLAYING: function ({ commit }) {
        timerId = setInterval(function () {//js function
            commit('counting');
        }, 1000);
    },

    PASS: function ({ commit }) {
        clearInterval(timerId);//js function
        commit('updateHighestSpeed');
    }
};

let positionHandler = {
    WEST: function (context, stack, waitTime) {
        timerId = setTimer(function () {//js function
            context.commit('dealToWest', stack);
        }, waitTime);
    },

    NORTH: function (context, stack, waitTime) {
        timerId = setTimer(function () {//js function
            context.commit('dealToNorth', stack);
        }, waitTime);
    },

    EAST: function (context, stack, waitTime) {
        timerId = setTimer(function () {//js function
            context.commit('dealToEast', stack);
        }, waitTime);
    },

    SOUTH: function (context, stack, waitTime) {
        timerId = setTimer(function () {//js function
            context.commit('dealToSouth', stack);
        }, waitTime);
    },

};

export default {
    dealBiddingHand: function ({ commit, state }) {
        //let dealerPosition = Math.floor(Math.random() * 4);
        //console.log(dealerPosition)
        //from dealer position moving clockwise, give 6 cards to each player, 3 at a time starting with the person left of the dealer
        //local player is always at position 0
        let rounds = 2;
        let cardsPerRound = 3;
        let players = 4;
        let nextCardToDeal = 0
        //let positions = ['south', 'west', 'north', 'east']
        for (let round = 0; round < rounds; round++) {
            for (let player = 0; player < players; player++) {
                for (let cardsThisRound = 0; cardsThisRound < cardsPerRound; cardsThisRound++) {
                    //const currentCard = state.cards[cardsThisRound];
                    let nextPosition = (state.dealerPosition + player + 1) % 4
                    let cardToDeal = cardsPerRound * players * round + cardsPerRound * player + cardsThisRound
                    //console.log("nextPosition is " + positions[nextPosition])
                    //console.log("card to deal is " + nextCardToDeal++)
                    commit('setCardPosition', { cardIndex: nextCardToDeal++, position: positions[nextPosition] })
                    //currentCard.position = positions[nextPosition]
                }

            }

        }
    },
    dealKittyHand: function ({ commit, state }) {
        //let dealerPosition = Math.floor(Math.random() * 4);
        //console.log(dealerPosition)
        //from dealer position moving clockwise, give 6 cards to each player, 3 at a time starting with the person left of the dealer
        //local player is always at position 0
        let rounds = 2;
        let cardsPerRound = 3;
        let players = 4;
        let nextCardToDeal = 24
        //let positions = ['south', 'west', 'north', 'east']
        for (let round = 0; round < rounds; round++) {
            for (let player = 0; player < players; player++) {
                for (let cardsThisRound = 0; cardsThisRound < cardsPerRound; cardsThisRound++) {
                    //const currentCard = state.cards[cardsThisRound];
                    let nextPosition = (state.dealerPosition + player + 1) % 4
                    let cardToDeal = cardsPerRound * players * round + cardsPerRound * player + cardsThisRound
                    //console.log("nextPosition is " + positions[nextPosition])
                    //console.log("card to deal is " + nextCardToDeal++)
                    commit('setCardPosition', { cardIndex: nextCardToDeal++, position: positions[nextPosition] })
                    //currentCard.position = positions[nextPosition]
                }

            }

        }
    },
    reset: function ({ commit }) {
        commit('reset', {
            leftMatched: 8,
            highestSpeed: localStorage.getItem('highestSpeed') || 9999,
            status: STATUS.READY,
            cards: shuffle(cardNames)
                .map(name => ({ flipped: false, cardName: name, src: name, position: 'deck' })),
            westCards: [],
            northCards: [],
            eastCards: [],
            southCards: [],
            elapsedMs: 0,
            round: 0,
            dealer: 0,
            dealerPosition: Math.floor(Math.random() * 4),
            players: ['me', randomName(), randomName(), randomName()]
        });
    },

    updateStatus: function (context, status) {
        context.commit('updateStatus', status);
        statusHandler[status] && statusHandler[status](context);//delegate to handlers if it exists for status
    },

    flipCard: function ({ commit }, card) {
        commit('flip', card);
    },

    playCard: function ({ commit, state }, card) {
        //perform checks to make sure it is valid
        //if not valid, perform action to display message to user
        console.log('player at position ' + card.position)
        console.log('cards at north are ' + state.cards.filter(card => card.position === 'north').map(card => card.src))
        console.log('cards at south are ' + state.cards.filter(card => card.position === 'south').map(card => card.src))
        commit('play', card);
    },

    flipCards: function ({ commit }, cards) {
        commit('flips', cards);
    },

    match: function ({ commit }) {
        commit('decreaseMatch');
    }
};

