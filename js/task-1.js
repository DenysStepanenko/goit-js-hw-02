'use strict';
function makeTransaction(quantity, pricePerDroid, custumerCredits) {
    const totalPrice = quantity * pricePerDroid;
    if (custumerCredits >= totalPrice) {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    } else {
        return "Insufficient funds!"
    }
}
console.log(makeTransaction(5, 3000, 23000)); 
