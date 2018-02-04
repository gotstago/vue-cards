

export default {
    reset(st, newState) {
        st.leftMatched = newState.leftMatched;
        st.highestSpeed = newState.highestSpeed;
        st.status = newState.status;
        st.cards = newState.cards;
        st.elapsedMs = newState.elapsedMs;
        st.dealer = newState.dealer;
        st.round = newState.round;
        st.players = newState.players;
    },

    updateStatus(st, newStatus) {
        st.status = newStatus;
    },

    setCardPosition(st, payload) {
        //console.log("setting card " + payload.cardIndex + " to " + payload.position)
        st.cards[payload.cardIndex].position = payload.position;
        if (payload.position === 'south') {
            st.cards[payload.cardIndex].flipped = true;
        }
    },

    dealToWest(st, cardStack) {
        st.westCards = st.westCards.concat(cardStack);
    },

    dealToEast(st, cardStack) {
        st.eastCards = st.eastCards.concat(cardStack);
    },

    dealToSouth(st, cardStack) {
        st.southCards = st.southCards.concat(cardStack);
    },

    dealToNorth(st, cardStack) {
        st.northCards = st.northCards.concat(cardStack);
    },

    decreaseMatch(st) {
        st.leftMatched--;
    },

    flip(st, card) {
        var c = st.cards.find(cc => cc === card);
        c.flipped = !c.flipped;
    },

    play(st, card) {
        var c = st.cards.find(cc => cc === card);
        c.position = 'trick';
    },

    flips(st, cards) {
        st.cards
            .filter(cc => cards.indexOf(cc) >= 0)
            .forEach(cc => {
                cc.flipped = !cc.flipped;
            });
    },

    counting(st) {
        st.elapsedMs++;
    },

    updateHighestSpeed(st) {
        if (!localStorage.getItem('highestSpeed')) {
            return localStorage.setItem('highestSpeed', st.elapsedMs);
        }
        if (localStorage.getItem('highestSpeed') > st.elapsedMs) {
            return localStorage.setItem('highestSpeed', st.elapsedMs);
        }
    }
};
