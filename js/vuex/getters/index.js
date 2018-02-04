
export default {
    leftMatched: state => state.leftMatched,
    highestSpeed: state => state.highestSpeed,
    elapsedMs: state => state.elapsedMs,
    cards: state => state.cards,
    westCards: state => state.cards.filter(card => card.position === 'west'),
    northCards: state => state.cards.filter(card => card.position === 'north'),
    eastCards: state => state.cards.filter(card => card.position === 'east'),
    southCards: state => state.cards.filter(card => card.position === 'south'),//state.southCards,trickCards
    trickCards: state => state.cards.filter(card => card.position === 'trick'),
    dealer: state => state.dealer,
    round: state => state.round,
    status: state => state.status,
    players: state => state.players,
};
