export type card = {
    name: string;
    quality: number;
    effect: (quality: number) => void;
}

let spof: (quality: number) => void = function(quality: number) {
    switch (quality) {
        case 1:
            console.log("Nuapurista kuulu se polokan tahti jalakani pohjii kutkutti !!");
            break;
        case 2:
            console.log("Ievan Polkka best song uwu~ !");   
            break;
        case 3:
            console.log("I can't count to three :(");   
            break;
        default:
            break            
    }
}

let spo1 = { name: "Spring Onion", quality: 1, effect: spof}

let spo2 = { name: "Spring Onion", quality: 2, effect: spof}

let spo3 = { name: "Spring Onion", quality: 3, effect: spof}

export let card_list: card[] = [spo1, spo2, spo3]

export let play_card: (card: card, hand: card[]) => void = function(card: card, hand: card[]) {
    const index = hand.indexOf(card);
    if (index === -1) {
        console.log("Tried to play a card not in the hand.")
        return
    }
    hand.splice(index, 1)
    card.effect(card.quality);
}

export let card_to_string: (card: card) => string = function(card: card) {
    return `Level ${card.quality} ${card.name}`
}

