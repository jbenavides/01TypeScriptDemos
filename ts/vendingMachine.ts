/**
 * VendingMachine
 */

/// <reference path="./coin.ts" />


class VendingMachine {
    
    private paid = ko.observable(0);

    acceptCoin_NormalWay(coin: Quarter): void{

    }

    acceptCoin = (coin: Quarter): void =>{ 
        /*this.paid += coin.Value
        var element = document.getElementById("total");
        element.innerHTML = this.paid.toString();*/

        let oldTotal = this.paid();
        this.paid(oldTotal + coin.Value);

    };

}