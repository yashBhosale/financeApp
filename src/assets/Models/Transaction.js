"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Product_1 = require("./Product");
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "id" }),
        __metadata("design:type", Number)
    ], Transaction.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Product_1.Product; }, function (product) { return product.transactions; }),
        typeorm_1.JoinColumn({ name: "product_type" }),
        __metadata("design:type", Product_1.Product)
    ], Transaction.prototype, "product_type", void 0);
    __decorate([
        typeorm_1.Column('datetime'),
        __metadata("design:type", Date)
    ], Transaction.prototype, "transaction_date", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Transaction.prototype, "amount", void 0);
    Transaction = __decorate([
        typeorm_1.Entity("Transaction")
    ], Transaction);
    return Transaction;
}());
exports.Transaction = Transaction;
exports.default = Transaction;
