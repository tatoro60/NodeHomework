let cards = [6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
let random = [7, 'Q', 10, 6, 8, 6, "J", 'J', 6, 'A', 'K'];
console.log(random.sort((a, b) => cards.indexOf(a) - cards.indexOf(b)))