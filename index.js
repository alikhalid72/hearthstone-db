var allCards = require('./cards/all-cards.json');
var allCollectibles = require('./cards/all-collectibles.json');
var brm = require('./cards/brm.json');
var gvg = require('./cards/gvg.json');
var loe = require('./cards/loe.json');
var naxxramas = require('./cards/naxxramas.json');
var tgt = require('./cards/tgt.json');
var wtog = require('./cards/wtog.json');

module.exports = {
    meta: allCards.meta,
    allCards: allCards.cards,
    allCollectibles: allCollectibles.cards,
    brm: brm.cards,
    gvg: gvg.cards,
    loe: loe.cards,
    naxxramas: naxxramas.cards,
    tgt: tgt.cards,
    wtog: wtog.cards
};
