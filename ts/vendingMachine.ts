/**
 * VendingMachine
 */

/// <reference path="./coin.ts" />
/// <reference path="./product.ts" />
/// <reference path="./productFactory.ts" />



enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}


class Cell{
    
    constructor(public product: Product) {
                
    }

    stock = ko.observable(3);
    sold = ko.observable(false);
}



class VendingMachine {
    
    private paid = ko.observable(0);
    cells = ko.observableArray([]);
    selectedCell = ko.observable(new Cell(new Initial()));
    acceptedCoins: Coins.Coin[] = [new Coins.Dime(), new Coins.Quarter(), new Coins.Half(), new Coins.Dollar()]
    canPay = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0);

    set size(givenSize: VendingMachineSize){
        this.cells([]);

        for(let index=0; index < givenSize; index++){
            let product = productFactory.GetProduct();
            this.cells.push(new Cell(product));
        }
    }

    acceptCoin_NormalWay(coin: Coins.Quarter): void{

    }

    acceptCoin = (coin: Coins.Quarter): void =>{ 
        /*this.paid += coin.Value
        var element = document.getElementById("total");
        element.innerHTML = this.paid.toString();*/

        let oldTotal = this.paid();
        this.paid(oldTotal + coin.value);

    };

    select = (cell: Cell): void =>{
        cell.sold(false);
        this.selectedCell(cell);
    }

    pay = (): void => {
        if(this.selectedCell().stock() < 1){
            alert("I'm sorry, we are out of them!");
            return;
        }

        let currentPaid = this.paid();
        this.paid(Math.round((( currentPaid - this.selectedCell().product.price)*100))/100);
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock - 1);
        this.selectedCell().sold(true);
    }


}