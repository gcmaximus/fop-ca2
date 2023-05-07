//Drinks
const iceLemonTea = {
    name: "Ice Lemon Tea",
    id: "d001",
    price: 2.50,
}

const coffee = {
    name: "Coffee",
    id: "d002",
    price: 2.50,
}
const orangeJuice = {
    name: "Orange Juice",
    id: "d003",
    price: 2.00,
}

//Rice
const chickenRice = {
    name: "Chicken Rice",
    id: "r001",
    price: 5.00,
    option: ["roasted", "steamed"],
}

const nasiLemak = {
    name: "Nasi Lemak",
    id: "r002",
    price: 5.00,
    option: ["add egg", "no egg"],
}

const eggFriedRice = {
    name: "Egg Fried Rice",
    id: "r003",
    price: 5.50,
}


//Noodles
const wantonMee = {
    name: "Wanton Mee",
    id: "n001",
    price: 5.00,
    option:
        ["dry", "soup"],
}

const fishballNoodles = {
    name: "Fishball Noodles",
    id: "n002",
    price: 5.00,
}

const chaShuRamen = {
    name: "Cha Shu Ramen",
    id: "n003",
    price: 6.00,
    option: ["spicy", "non-spicy"],
}

const categories = [
    {
        type: "Drinks",
        drinks: [iceLemonTea, coffee, orangeJuice],
    },
    {
        type: "Rice",
        rice: [chickenRice, nasiLemak, eggFriedRice],
    },
    {
        type: "Noodles",
        noodles: [wantonMee, fishballNoodles, chaShuRamen],
    }
]

function getCategories() {
    var allCategories = []
    for (var i = 0; i < categories.length; i++) {
        allCategories.push(categories[i])
    }
    return allCategories
}
module.exports.categories = categories
module.exports.getCategories = getCategories