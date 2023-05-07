class totalCost {
    foodCost;
    constructor() {
        this.cost = []
    }
    addCost(cost, qty) {
        this.foodCost = cost * qty
        this.cost.push(this.foodCost)
    }
    removeCost(index) {
        return this.cost.splice(index, 1)
    }
    resetCost() { this.cost = [] }
}
module.exports = totalCost