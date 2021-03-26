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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../mockData/data");
const Product_1 = __importDefault(require("../schemas/Product"));
const type_graphql_1 = require("type-graphql");
let default_1 = class default_1 {
    getProduct() {
        console.log(data_1.product);
        return data_1.product;
    }
    ;
};
__decorate([
    type_graphql_1.Query(returns => Product_1.default, { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], default_1.prototype, "getProduct", null);
default_1 = __decorate([
    type_graphql_1.Resolver(_of => Product_1.default)
], default_1);
exports.default = default_1;
;
//# sourceMappingURL=ProductResolver.js.map