let cards = [
    {
        "id": 1,
        "name": "Ancient Gear Advance",
        "type": "Spell",
        "set_code": "LEDE-EN055",
        "image_url": "https://images.ygoprodeck.com/images/cards/4064925.jpg",
        "price": "0.15"
    },
    {
        "id": 2,
        "name": "Ancient Gear Commander",
        "type": "Effect Monster",
        "atk": 500,
        "def": 2000,
        "level": 4,
        "race": "Machine",
        "attribute": "EARTH",
        "set_code": "LEDE-EN008",
        "image_url": "https://images.ygoprodeck.com/images/cards/27483935.jpg",
        "price": "0.14"
    },
    {
        "id": 3,
        "name": "Ancient Gear Dark Golem",
        "type": "Effect Monster",
        "atk": 3000,
        "def": 3000,
        "level": 8,
        "race": "Machine",
        "attribute": "EARTH",
        "set_code": "LEDE-EN006",
        "image_url": "https://images.ygoprodeck.com/images/cards/64603182.jpg",
        "price": "0.29"
    },
    {
        "id": 4,
        "name": "Ancient Gear Duel",
        "type": "Trap Card",
        "set_code": "LEDE-EN072",
        "image_url": "https://images.ygoprodeck.com/images/cards/53541822.jpg",
        "price": "0.13"
    },
    {
        "id": 5,
        "name": "Ancient Gear Tanker",
        "type": "Effect Monster",
        "atk": 1300,
        "def": 1300,
        "level": 4,
        "race": "Machine",
        "attribute": "EARTH",
        "set_code": "LEDE-EN007",
        "image_url": "https://images.ygoprodeck.com/images/cards/91098230.jpg",
        "price": "0.16"
    }

]

function addCards(card) {
    cards.push(card); //add object at the end
    console.log('Menambah push: ',cards)
}

function addStartCard(card) {
    cards.unshift(card); // object at the start
    console.log('Menambah unshift: ',cards)
}

function addSplice(start, manyItem, card){
    cards.splice(start, manyItem, card); //object in the middle, start = index mulai, manyItem = banyak item yang dihilangkan, card = object
    console.log('Menambah splice',cards)
}

function removeCardById(id){
    cards = cards.filter(card => card.id !==id)
    console.log('Menghapus by id: ',cards)
}

function editCardById(id, update){
    cards = cards.map( card => {
        if (card.id === id) {
            return {...card, ...update}
        }
        return card;

    });
    console.log('Update by id: ',cards)
}

const payload = {
    "id": 6,
    "name": "Ancient Gear Advance SIR",
    "type": "Spell",
    "set_code": "LEDE-EN055",
    "image_url": "https://images.ygoprodeck.com/images/cards/4064925.jpg",
    "price": "0.15"
}

const payLoadToo = {
    "id": 87,
    "name": "Ancient Gear Advance First",
    "type": "Spell",
    "set_code": "LEDE-EN055",
    "image_url": "https://images.ygoprodeck.com/images/cards/4064925.jpg",
    "price": "0.15"
}

const payloadUpdate = {
    name: "Ancient Gear Duel LINKZ",
    "set_code": "LSN-EN009"
}

addCards(payload); //works

editCardById(4, {name: "Ancient Gear DDD"}); //works

removeCardById(2); //works

addStartCard(payLoadToo);
