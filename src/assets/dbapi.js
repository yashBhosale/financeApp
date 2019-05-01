"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Product_1 = require("./Models/Product");
var Transaction_1 = require("./Models/Transaction");
var TEST = true;
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function () {
        var connection;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!TEST) return [3 /*break*/, 2];
                    return [4 /*yield*/, typeorm_1.createConnection("test")];
                case 1:
                    connection = _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, typeorm_1.createConnection("prod")];
                case 3:
                    connection = _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/, connection];
            }
        });
    });
}
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var connection;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connectToDatabase()];
                case 1:
                    connection = _a.sent();
                    return [4 /*yield*/, connection.synchronize()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, connection.close()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function insertTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function () {
        var connection, newProducts, _i, transactions_1, transaction, product, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connectToDatabase()];
                case 1:
                    connection = _a.sent();
                    newProducts = [];
                    _i = 0, transactions_1 = transactions;
                    _a.label = 2;
                case 2:
                    if (!(_i < transactions_1.length)) return [3 /*break*/, 7];
                    transaction = transactions_1[_i];
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, connection.createQueryBuilder()
                            .select("product")
                            .from(Product_1.Product, "product")
                            .where("product.name = :product_name", { product_name: transaction.product_type })
                            .execute()];
                case 4:
                    product = _a.sent();
                    transaction.product_type = product[0].product_id;
                    console.log(Object.keys(product[0]));
                    connection.createQueryBuilder()
                        .insert()
                        .into(Transaction_1.Transaction)
                        .values([transaction])
                        .execute();
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    console.log("hello!");
                    console.log(err_1);
                    newProducts.push({ name: transaction.product_type, category: 'unknown', transactions: [] });
                    return [3 /*break*/, 6];
                case 6:
                    _i++;
                    return [3 /*break*/, 2];
                case 7: return [4 /*yield*/, connection.close()];
                case 8:
                    _a.sent();
                    if (!(newProducts.length > 0)) return [3 /*break*/, 10];
                    return [4 /*yield*/, insertProducts(newProducts)];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10: return [4 /*yield*/, connection.connect()];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, connection.close()];
                case 12:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function insertProducts(products) {
    return __awaiter(this, void 0, void 0, function () {
        var connection, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connectToDatabase()];
                case 1:
                    connection = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, connection.createQueryBuilder()
                            .insert()
                            .into(Product_1.Product)
                            .values(products)
                            .execute()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_2 = _a.sent();
                    console.log(err_2);
                    return [3 /*break*/, 5];
                case 5: return [4 /*yield*/, connection.close()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function findTransaction() {
    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); });
}
function findProduct() {
    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); });
}
function deleteTransaction() {
    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); });
}
function deleteProduct() {
    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); });
}
function testFunctions() {
    return __awaiter(this, void 0, void 0, function () {
        var productData, transactions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, init()];
                case 1:
                    _a.sent();
                    productData = [
                        {
                            name: "Dance",
                            category: "Ticket",
                            transactions: []
                        },
                        {
                            name: "Class",
                            category: "Ticket",
                            transactions: []
                        },
                        {
                            name: "Water Bottle",
                            category: "Water Bottle",
                            transactions: []
                        },
                    ];
                    return [4 /*yield*/, insertProducts(productData)];
                case 2:
                    _a.sent();
                    transactions = [
                        {
                            product_type: "Dance",
                            transaction_date: Date.now,
                            amount: 5
                        },
                        {
                            product_type: "Water Bottle",
                            transaction_date: Date.now,
                            amount: 1
                        }
                    ];
                    return [4 /*yield*/, insertTransactions(transactions)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
testFunctions();
