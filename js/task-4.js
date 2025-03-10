'use strict';
function getShippingCost(country) {
    let price;
    if (country = "China") {
        price = 170;
    } else if (country = "Chile") {
        price = 250;
    } else if (country = "Australia") {
        price = 170;
    } else if (country = "Jamaica") {
        price = 120;
    } else {
        return "Sorry, there is no delivery to your country"
    }
    switch (country) {
        case "China":
            return "Shipping to China will cost 100 credits";
        case "Chile":
            return "Shipping to Chile will cost 250 credits";
        case "Australia":
            return "Shipping to Australia will cost 170 credits";
        case "Jamaica":
            return "Shipping to Jamaica will cost 120 credits";
    }
}