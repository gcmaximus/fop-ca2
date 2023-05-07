const input = require("readline-sync")
const chalk = require("chalk")
/*******************
 * readFloat
 *******************/
function readFloat(mesg) {
    var num
    do {
        num = input.question(mesg);
        if (isNaN(num) || num == "") {
            console.log(chalk.red("Error! Please enter a number"))
        }
    } while (isNaN(num) || num == "");
    num = parseFloat(num);
    return num;
}
/*******************
 * readFloatRange
 *******************/
function readFloatRange(mesg, low, high) {
    do {
        var num = readFloat(mesg)
        if (num < low || num > high) {
            console.log(chalk.red(`Error! Please enter a number from ${low} to ${high}`))
        }
    } while (num < low || num > high)
    return num;
}

/*******************
 * readInt
 *******************/
function readInt(mesg) {
    do {
        var num = readFloat(mesg)
        if (!Number.isInteger(num)) {
            console.log("Error! Please enter an integer")
        }
    } while (!Number.isInteger(num))
    return num;
}
/*******************
 * readIntRange
 *******************/

/*******************
 * checkContinue()
 *******************/
function checkContinue() {
    var cont = input.question("Do you wish to continue? Y/N ")
    switch (cont.toUpperCase()) {
        case 'Y':
        case 'YES':
        case 'YEAP':
        case 'YEP':
        case 'OK':
            return true;
        default:
            return false;
    }
}
/*******************
 * readEnter
 *******************/
function readEnter() {
    do
        var enter = input.question(chalk.green("Press Enter to continue..."))
    while (enter != "")
    console.clear()
}

/*******************
 * readQtyNotZero
 *******************/
function readQtyNotZero(mesg) {
    do {
        var num = readFloat(mesg)
        if (!Number.isInteger(num) || num.trim == "" || num <= 0) {
            console.log(chalk.red("Error! Quantity must be 1 or more"))
        }
    } while (!Number.isInteger(num) || num.trim == "" || num <= 0)
    return num;
}
/*******************
 * readzeroOne
 *******************/
function readzeroOne(mesg) {
    do {
        var num = readFloat(mesg)
        if (!Number.isInteger(num) || num.trim == "" || num < 0 || num > 1) {
            console.log(chalk.red("Error! Please enter a valid number (0 or 1)"))
        }
    } while (!Number.isInteger(num) || num.trim == "" || num < 0 || num > 1)
    return num;
}

/*******************
 * readzeroTwo
 *******************/
function readzeroTwo(mesg) {
    do {
        var num = readFloatAndP(mesg)
        if (num < 0 || num > 2) {
            console.log(chalk.red("Error! Please enter a valid number (0, 1 or 2)"))
        }
    } while (num < 0 || num > 2)
    return num;
}

/*******************
 * readzeroThree
 *******************/

function readzeroThree(mesg) {
    do {
        var num = readFloatAndP(mesg)
        if (num < 0 || num > 3) {
            console.log(chalk.red("Error! Please enter a valid number (0, 1, 2 or 3)"))
        }
    } while (num < 0 || num > 3)
    return num;
}

/*******************
 * readFloatAndP
 *******************/
function readFloatAndP(mesg) {
    var num
    do {
        num = input.question(mesg);
        if ((num.toString()).toUpperCase() != 'P') {
            if ((isNaN(num) || num == "")) {
                console.log(chalk.red("Error! Please enter a number"))
            }
        }
    } while ((num.toString()).toUpperCase() != 'P' && ((isNaN(num) || num == "")));
    if (!isNaN(num)) {
        num = parseFloat(num);
    }
    return num;
}
module.exports.readFloat = readFloat
module.exports.readFloatRange = readFloatRange
module.exports.readInt = readInt
module.exports.checkContinue = checkContinue
module.exports.readEnter = readEnter
module.exports.readzeroOne = readzeroOne
module.exports.readzeroTwo = readzeroTwo
module.exports.readzeroThree = readzeroThree
module.exports.readQtyNotZero = readQtyNotZero
module.exports.readFloatAndP = readFloatAndP