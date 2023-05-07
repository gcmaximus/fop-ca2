class OrderCart {
    OrderCartItems; totalCost = 0;

    constructor() {
        this.OrderCartItems = []
    }
    addItems(newItems) { this.OrderCartItems.push(newItems) }
    getItems(index) { return this.OrderCartItems[index] }
    removeItems(index) {
        return this.OrderCartItems.splice(index, 1)
    }
    clearAllItems() { this.OrderCartItems = [] }
}

module.exports = OrderCart