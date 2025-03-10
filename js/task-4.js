'use strict';
function getShippingCost(country) {
    let price;
    if (country === "China") {
        price = 170;
    } else if (country === "Chile") {
        price = 250;
    } else if (country === "Australia") {
        price = 170;
    } else if (country === "Jamaica") {
        price = 120;
    } else {
        return "Sorry, there is no delivery to your country"
    }
    switch (country) {
        case "China":
            return `Shipping to ${country} will cost ${price} credits`;
        case "Chile":
            return `Shipping to ${country} will cost ${price} credits`;
        case "Australia":
            return `Shipping to ${country} will cost ${price} credits`;
        case "Jamaica":
            return `Shipping to ${country} will cost ${price} credits`;
    }
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));