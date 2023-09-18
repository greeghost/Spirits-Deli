import { card_to_string, card, card_list, play_card } from "./cards";
const prompt = require("prompt-sync")({ sigint: true });

type hand = card[];
let hand: hand = card_list; 

let turn: (hand: hand) => void = function(hand: hand) {
    console.log("Here is your hand:\n")
    hand.forEach(function (element: card, index: number) {
        console.log('├─ ' + index + ": " + card_to_string(element));
    })
    
    console.log("")
    const card_number = prompt("What card do you play? ");
    console.log(`You play card n° ${card_number}`);
    
    play_card(hand[card_number], hand);
    console.log("")
}

for (let i = 0; i < 2; i++) {
    turn(hand);
}