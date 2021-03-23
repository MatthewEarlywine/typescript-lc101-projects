"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    ;
    Rocket.prototype.sumMass = function (items) {
        var payloadMass = 0;
        for (var i = 0; i < items.length; i++) {
            payloadMass += items[i].massKg;
        }
        ;
        return payloadMass;
    };
    ;
    Rocket.prototype.currentMassKg = function () {
        var mass = 0;
        mass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return mass;
    };
    ;
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        ;
        return false;
    };
    ;
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        ;
        return false;
    };
    ;
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        ;
        return false;
    };
    ;
    return Rocket;
}());
exports.Rocket = Rocket;
;
