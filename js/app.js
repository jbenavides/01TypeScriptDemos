/**
 * Quarter
 */
var Quarter = (function () {
    function Quarter() {
        this.value = .25;
    }
    Object.defineProperty(Quarter.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (newValue) {
            this.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Quarter.prototype.getImageUrl = function () {
        return "img/Quarter.png";
    };
    return Quarter;
}());
/**
 * VendingMachine
 */
/// <reference path="./coin.ts" />
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.acceptCoin = function (coin) {
            /*this.paid += coin.Value
            var element = document.getElementById("total");
            element.innerHTML = this.paid.toString();*/
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.Value);
        };
    }
    VendingMachine.prototype.acceptCoin_NormalWay = function (coin) {
    };
    return VendingMachine;
}());
/// <reference path="vendingMachine.ts" />
var machine = new VendingMachine();
ko.applyBindings(machine);
/**
 * HelloWorld
 */
var HelloWorld = (function () {
    function HelloWorld() {
    }
    return HelloWorld;
}());
//# sourceMappingURL=app.js.map