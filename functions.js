const getCategories = require('./offering')
const OrderCart = require('./OrderCart')
const totalCost = require('./totalCost')
const toolKit = require('./toolKit')
const chalk = require('chalk')
const fs = require('fs')
let ordercart = new OrderCart();
let totalcost = new totalCost();
var cancelSel, option, terminate
let previous
//Function to start program
function startProgram() {
    do {
        msg = ""
        console.clear()
        option = getMenuOption();
        switch (option) {
            case 1:
                viewFoodMenu()
                break;
            case 2:
                viewOrderCart()
                fs.writeFileSync('receipt.txt', msg, function (err) {
                    if (err) throw err;
                });
                break;
            case 0:
                if (quit())
                    terminate = 1
                break;
        }
    } while (terminate != 1)
    console.log(chalk.greenBright("Thank you, goodbye!"))
}
//Function to get Main Menu
function getMenuOption() {
    console.log(chalk.yellow(`
==================================
* Welcome to NiceMeal Restaurant *
==================================`),
        (chalk.cyan(`\n    1. View Menu`)),
        (chalk.greenBright(`\n    2. View Cart`)),
        (chalk.red(`\n    0. Quit`)))
    return toolKit.readzeroTwo(
        chalk.yellow(`>>>> `))
}

//Function to view Food Menu
function viewFoodMenu() {
    do {
        console.clear()
        cancelSel = 0
        console.log(chalk.cyan(`
===========================
*       Food Menu         *
===========================`),
            chalk.blue(`\n    1. ${getCategories.categories[0].type}`),
            chalk.magenta(`\n    2. ${getCategories.categories[1].type}`),
            chalk.redBright(`\n    3. ${getCategories.categories[2].type}`),
            chalk.gray(`\n    0. Cancel Selection`))
        catOption = toolKit.readzeroThree(
            chalk.yellow(`>>>> `))
        switch (catOption) {
            case 1:
                drinks();
                break;
            case 2:
                rice();
                break;
            case 3:
                noodles();
                break;
            case 0:
                cancelSel = 1
                console.clear()
                break;
        }
    } while (cancelSel != 1)
}


//Function for drinks
function drinks() {
    do {
        console.log(chalk.blue(`
        Drinks         
        ========
            1. ${getCategories.categories[0].drinks[0].id}: SGD ${getCategories.categories[0].drinks[0].price.toFixed(2)} - ${getCategories.categories[0].drinks[0].name}
            2. ${getCategories.categories[0].drinks[1].id}: SGD ${getCategories.categories[0].drinks[1].price.toFixed(2)} - ${getCategories.categories[0].drinks[1].name}
            3. ${getCategories.categories[0].drinks[2].id}: SGD ${getCategories.categories[0].drinks[2].price.toFixed(2)} - ${getCategories.categories[0].drinks[2].name}`),
            chalk.gray`
            0. Cancel Selection`,
            chalk.yellow`
        (Press 'p' to view the previous menu)
            `)
        drinkOption = toolKit.readzeroThree(
            chalk.yellow(`>>>> `))
        previous = 1
        switch (drinkOption) {
            case 1:
                getQty();
                console.log(chalk.green(`\nAdded to Cart: - QTY: ${qty}   X   ${getCategories.categories[0].drinks[0].name}`))
                ordercart.addItems(`QTY: ${qty}     X ${getCategories.categories[0].drinks[0].name} - $${getCategories.categories[0].drinks[0].price.toFixed(2)}`)
                totalcost.addCost(getCategories.categories[0].drinks[0].price.toFixed(2), qty)
                toolKit.readEnter()
                break;
            case 2:
                getQty();
                console.log(chalk.green(`\nAdded to Cart: - QTY: ${qty}   X   ${getCategories.categories[0].drinks[1].name}`))
                ordercart.addItems(`QTY: ${qty}     X ${getCategories.categories[0].drinks[1].name} - $${getCategories.categories[0].drinks[1].price.toFixed(2)}`)
                totalcost.addCost(getCategories.categories[0].drinks[1].price.toFixed(2), qty)
                toolKit.readEnter()
                break;
            case 3:
                getQty();
                console.log(chalk.green(`\nAdded to Cart: - QTY: ${qty}   X   ${getCategories.categories[0].drinks[2].name}`))
                ordercart.addItems(`QTY: ${qty}     X ${getCategories.categories[0].drinks[2].name} - $${getCategories.categories[0].drinks[2].price.toFixed(2)}`)
                totalcost.addCost(getCategories.categories[0].drinks[2].price.toFixed(2), qty)
                toolKit.readEnter()
                break;
            case 0:
                console.clear()
                cancelSel = 1
                break;
        }
    } while (previous != 1)
}


//Function for rice
function rice() {
    do {
        console.log(chalk.magenta(`
        Rice            
        ======
            1. ${getCategories.categories[1].rice[0].id}: SGD ${getCategories.categories[1].rice[0].price.toFixed(2)} - ${getCategories.categories[1].rice[0].name} (${getCategories.categories[1].rice[0].option[0]}/${getCategories.categories[1].rice[0].option[1]})
            2. ${getCategories.categories[1].rice[1].id}: SGD ${getCategories.categories[1].rice[1].price.toFixed(2)} - ${getCategories.categories[1].rice[1].name} (${getCategories.categories[1].rice[1].option[0]}/${getCategories.categories[1].rice[1].option[1]})
            3. ${getCategories.categories[1].rice[2].id}: SGD ${getCategories.categories[1].rice[2].price.toFixed(2)} - ${getCategories.categories[1].rice[2].name}`),
            chalk.gray`
            0. Cancel Selection`,
            chalk.yellow`
        (Press 'p' to view the previous menu)
            `)
        riceOption = toolKit.readzeroThree(
            chalk.yellow(`>>>> `))
        previous = 1
        switch (riceOption) {
            case 1:
                do {
                    console.log(chalk.magenta(`
                Options             
                =========
                    1. ${getCategories.categories[1].rice[0].option[0]}
                    2. ${getCategories.categories[1].rice[0].option[1]}`),
                        chalk.gray`
                    0. Cancel Selection`,
                        chalk.yellow`
                (Press 'p' to view the previous menu)
            `)
                    chickenRiceOption = toolKit.readzeroTwo(
                        chalk.yellow(`>>>> `)
                    )
                    switch (chickenRiceOption) {
                        case 1:
                            getQty();
                            console.log(chalk.green(`\nAdded to Cart: - QTY: ${qty}   X   ${getCategories.categories[1].rice[0].name} - ${getCategories.categories[1].rice[0].option[0]}`))
                            ordercart.addItems(`QTY: ${qty}     X ${getCategories.categories[1].rice[0].name} - ${getCategories.categories[1].rice[0].option[0]} - $${getCategories.categories[1].rice[0].price.toFixed(2)}`)
                            totalcost.addCost(getCategories.categories[1].rice[0].price.toFixed(2), qty)
                            toolKit.readEnter()
                            break;
                        case 2:
                            getQty();
                            console.log(chalk.green(`\nAdded to Cart: - QTY: ${qty}   X   ${getCategories.categories[1].rice[0].name} - ${getCategories.categories[1].rice[0].option[1]}`))
                            ordercart.addItems(`QTY: ${qty}     X ${getCategories.categories[1].rice[0].name} - ${getCategories.categories[1].rice[0].option[1]} - $${getCategories.categories[1].rice[0].price.toFixed(2)}`)
                            totalcost.addCost(getCategories.categories[1].rice[0].price.toFixed(2), qty)
                            toolKit.readEnter()
                            break;
                        case 0:
                            console.clear()
                            cancelSel = 1
                            break;
                    }
                } while (previous != 1)
                if (chickenRiceOption == 'p' || chickenRiceOption == 'P')
                    previous = 0
                break;
            case 2:
                do {
                    console.log(chalk.magenta(`
                Options         
                =========
                    1. ${getCategories.categories[1].rice[1].option[0]}
                    2. ${getCategories.categories[1].rice[1].option[1]}`),
                        chalk.gray`
                    0. Cancel Selection`,
                        chalk.yellow`
                (Press 'p' to view the previous menu)
            `)
                    nasiLemakOption = toolKit.readzeroTwo(
                        chalk.yellow(`>>>> `)
                    )
                    switch (nasiLemakOption) {
                        case 1:
                            getQty();
                            console.log(chalk.green(`\nAdded to Cart: - QTY: ${qty}   X   ${getCategories.categories[1].rice[1].name} - ${getCategories.categories[1].rice[1].option[0]}`))
                            ordercart.addItems(`QTY: ${qty}     X ${getCategories.categories[1].rice[1].name} - ${getCategories.categories[1].rice[1].option[0]} - $${getCategories.categories[1].rice[1].price.toFixed(2)}`)
                            totalcost.addCost(getCategories.categories[1].rice[1].price.toFixed(2), qty)
                            toolKit.readEnter()
                            break;
                        case 2:
                            getQty();
                            console.log(chalk.green(`\nAdded to Cart: - QTY: ${qty}   X   ${getCategories.categories[1].rice[1].name} - ${getCategories.categories[1].rice[1].option[1]}`))
                            ordercart.addItems(`QTY: ${qty}     X ${getCategories.categories[1].rice[1].name} - ${getCategories.categories[1].rice[1].option[1]} - $${getCategories.categories[1].rice[1].price.toFixed(2)}`)
                            totalcost.addCost(getCategories.categories[1].rice[1].price.toFixed(2), qty)
                            toolKit.readEnter()
                            break;
                        case 0:
                            console.clear()
                            cancelSel = 1
                            break;
                    }
                } while (previous != 1)
                if (nasiLemakOption == 'p' || nasiLemakOption == 'P')
                    previous = 0
                break;
            case 3:
                getQty();
                console.log(chalk.green(`\nAdded to Cart: - QTY: ${qty}   X   ${getCategories.categories[1].rice[2].name}`))
                ordercart.addItems(`QTY: ${qty}     X ${getCategories.categories[1].rice[2].name} - $${getCategories.categories[1].rice[2].price.toFixed(2)}`)
                totalcost.addCost(getCategories.categories[1].rice[2].price.toFixed(2), qty)
                toolKit.readEnter()
                break;
            case 0:
                console.clear()
                cancelSel = 1
                break;
        }
    } while (previous != 1)
}

//Function for noodles
function noodles() {
    do {
        console.log(chalk.redBright(`
        Noodles         
        =========
            1. ${getCategories.categories[2].noodles[0].id}: SGD ${getCategories.categories[2].noodles[0].price.toFixed(2)} - ${getCategories.categories[2].noodles[0].name} (${getCategories.categories[2].noodles[0].option[0]}/${getCategories.categories[2].noodles[0].option[1]})
            2. ${getCategories.categories[2].noodles[1].id}: SGD ${getCategories.categories[2].noodles[1].price.toFixed(2)} - ${getCategories.categories[2].noodles[1].name}
            3. ${getCategories.categories[2].noodles[2].id}: SGD ${getCategories.categories[2].noodles[2].price.toFixed(2)} - ${getCategories.categories[2].noodles[2].name} (${getCategories.categories[2].noodles[2].option[0]}/${getCategories.categories[2].noodles[2].option[1]})`),
            chalk.gray`
            0. Cancel Selection`,
            chalk.yellow`
        (Press 'p' to view the previous menu)
            `)
        noodlesOption = toolKit.readzeroThree(
            chalk.yellow(`>>>> `))
        previous = 1
        switch (noodlesOption) {
            case 1:
                do {
                    console.log(chalk.redBright(`
                Options         
                =========
                    1. ${getCategories.categories[2].noodles[0].option[0]}
                    2. ${getCategories.categories[2].noodles[0].option[1]}`),
                        chalk.gray`
                    0. Cancel Selection`,
                        chalk.yellow`
                (Press 'p' to view the previous menu)
            `)
                    wantonMeeOption = toolKit.readzeroTwo(
                        chalk.yellow(`>>>> `)
                    )
                    switch (wantonMeeOption) {
                        case 1:
                            getQty();
                            console.log(chalk.green(`\nAdded to Cart: - QTY: ${qty}   X   ${getCategories.categories[2].noodles[0].name} - ${getCategories.categories[2].noodles[0].option[0]}`))
                            ordercart.addItems(`QTY: ${qty}     X ${getCategories.categories[2].noodles[0].name} - ${getCategories.categories[2].noodles[0].option[0]} - $${getCategories.categories[2].noodles[0].price.toFixed(2)}`)
                            totalcost.addCost(getCategories.categories[2].noodles[0].price.toFixed(2), qty)
                            toolKit.readEnter()
                            break;
                        case 2:
                            getQty();
                            console.log(chalk.green(`\nAdded to Cart: - QTY: ${qty}   X   ${getCategories.categories[2].noodles[0].name} - ${getCategories.categories[2].noodles[0].option[1]}`))
                            ordercart.addItems(`QTY: ${qty}     X ${getCategories.categories[2].noodles[0].name} - ${getCategories.categories[2].noodles[0].option[1]} - $${getCategories.categories[2].noodles[0].price.toFixed(2)}`)
                            totalcost.addCost(getCategories.categories[2].noodles[0].price.toFixed(2), qty)
                            toolKit.readEnter()
                            break;
                        case 0:
                            console.clear()
                            cancelSel = 1
                            break;
                    }
                } while (previous != 1)
                if (wantonMeeOption == 'p' || wantonMeeOption == 'P')
                    previous = 0
                break;
            case 2:
                getQty();
                console.log(chalk.green(`\nAdded to Cart: - QTY: ${qty}   X   ${getCategories.categories[2].noodles[1].name}`))
                ordercart.addItems(`QTY: ${qty}     X ${getCategories.categories[2].noodles[1].name} - $${getCategories.categories[2].noodles[1].price.toFixed(2)}`)
                totalcost.addCost(getCategories.categories[2].noodles[1].price.toFixed(2), qty)
                toolKit.readEnter()
                break;
            case 3:
                do {
                    console.log(chalk.redBright(`
                Options         
                =========
                    1. ${getCategories.categories[2].noodles[2].option[0]}
                    2. ${getCategories.categories[2].noodles[2].option[1]}`),
                        chalk.gray`
                    0. Cancel Selection`,
                        chalk.yellow`
                (Press 'p' to view the previous menu)
            `)
                    chaShuRamenOption = toolKit.readzeroTwo(
                        chalk.yellow(`>>>> `)
                    )
                    switch (chaShuRamenOption) {
                        case 1:
                            getQty();
                            console.log(chalk.green(`\nAdded to Cart: - QTY: ${qty}   X   ${getCategories.categories[2].noodles[2].name} - ${getCategories.categories[2].noodles[2].option[0]}`))
                            ordercart.addItems(`QTY: ${qty}     X ${getCategories.categories[2].noodles[2].name} - ${getCategories.categories[2].noodles[2].option[0]} - $${getCategories.categories[2].noodles[2].price.toFixed(2)}`)
                            totalcost.addCost(getCategories.categories[2].noodles[2].price.toFixed(2), qty)
                            toolKit.readEnter()
                            break;
                        case 2:
                            getQty();
                            console.log(chalk.green(`\nAdded to Cart: - QTY: ${qty}   X   ${getCategories.categories[2].noodles[2].name} - ${getCategories.categories[2].noodles[2].option[1]}`))
                            ordercart.addItems(`QTY: ${qty}     X ${getCategories.categories[2].noodles[2].name} - ${getCategories.categories[2].noodles[2].option[1]} - $${getCategories.categories[2].noodles[2].price.toFixed(2)}`)
                            totalcost.addCost(getCategories.categories[2].noodles[2].price.toFixed(2), qty)
                            toolKit.readEnter()
                            break;
                        case 0:
                            console.clear()
                            cancelSel = 1
                            break;
                    }
                } while (previous != 1)
                if (chaShuRamenOption == 'p' || chaShuRamenOption == 'P')
                    previous = 0
                break;
            case 0:
                console.clear()
                cancelSel = 1
                break;
        }
    } while (previous != 1)
}

//Function to view food cart
function viewOrderCart() {
    if (ordercart.OrderCartItems.length > 0) {
        do {
            console.clear()
            msg += `Order Number: ${Math.floor(Math.random() * 8999) + 1000}\n________________________________________________________\n`
            console.log(chalk.greenBright(
                `
===========================
*        Your cart        *
===========================
________________________________________________________`))
            for (i = 0; i < ordercart.OrderCartItems.length; i++) {
                console.log(chalk.yellow(`${i + 1}.  ${ordercart.OrderCartItems[i]}`))
                msg += `${i + 1}.  ${ordercart.OrderCartItems[i]}\n`
            }
            console.log(chalk.greenBright(
                `________________________________________________________`))
            for (i = 0, sum = 0; i < totalcost.cost.length; i++) {
                sum += totalcost.cost[i]
            }
            console.log(chalk.greenBright(`Total Cost: `, chalk.bold(`$${sum.toFixed(2)}`)))
            msg += `________________________________________________________\nTotal Cost: $${sum.toFixed(2)}\nThank you for coming and see you again!\n\n\n`
            var x = viewCartOption()
        } while (ordercart.OrderCartItems.length > 0 && x)
        if (x != 'stop' && x) {
            console.log(chalk.greenBright(`\nYour food cart is empty`))
            toolKit.readEnter()
        }
    } else {
        console.log(chalk.greenBright(`\nYour food cart is empty`))
        toolKit.readEnter()
    }
    console.clear()
}


//Function to view cart options
function viewCartOption() {
    console.log(chalk.redBright(`
Cart Options
=============
    1. Send order
    2. Remove item
    0. Back to Main Menu
    `))
    cartOption = toolKit.readzeroTwo(
        chalk.yellow(`>>>> `))
    let z;
    switch (cartOption) {
        case 1:
            console.log(chalk.green
                `Order Sent!`)
            toolKit.readEnter();
            ordercart.clearAllItems();
            totalcost.resetCost();
            console.clear();
            z = 'stop'
            return z;
        case 2:
            console.log(chalk.yellow`
Enter the item number you wish to remove`)
            itemRemoved = toolKit.readFloatRange(
                chalk.yellow(`>>>> `), 1, ordercart.OrderCartItems.length)
            ordercart.removeItems(itemRemoved - 1)
            totalcost.removeCost(itemRemoved - 1)
            z = true
            msg = ""
            break;
        case 0:
            z = false
            break;
    }
    return z
}


//Function to get Quantity of dish
function getQty() {
    console.log(chalk.yellow(`
Enter Order Quantity:`))
    qty = toolKit.readQtyNotZero(chalk.yellow(`>>>> `))
}


//Function to quit program
function quit() {
    console.clear()
    console.log(chalk.red`
Are you sure?
    1.No
    0.Yes`)
    isQuit = toolKit.readzeroOne(chalk.yellow`>>>> `)
    switch (isQuit) {
        case 1:
            isQuit = "no"
            break;
        case 0: {
            isQuit = "yes"
            break;
        }
    }
    if (isQuit == "yes")
        return true
    else
        return false
}

module.exports.startProgram = startProgram