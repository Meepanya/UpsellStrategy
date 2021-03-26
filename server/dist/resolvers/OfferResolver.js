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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../mockData/data");
const Offer_1 = __importDefault(require("../schemas/Offer"));
const type_graphql_1 = require("type-graphql");
let default_1 = class default_1 {
    fetchOffers() {
        return data_1.offers;
    }
    ;
    getOffer(id) {
        return data_1.offers.find(offer => offer.id === id);
    }
    ;
    markAsCompleted(offerId) {
        const offer = data_1.offers.find(offer => {
            return offer.id === offerId;
        });
        if (!offer) {
            throw new Error(`Couldn't find the offer with id ${offerId}.`);
        }
        if (offer.upsell === true) {
            throw new Error(`Offer with id ${offer.id} is already for upselling`);
        }
        offer.upsell = true;
        return offer;
    }
    ;
};
__decorate([
    type_graphql_1.Query(returns => [Offer_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], default_1.prototype, "fetchOffers", null);
__decorate([
    type_graphql_1.Query(returns => Offer_1.default, { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], default_1.prototype, "getOffer", null);
__decorate([
    type_graphql_1.Mutation(returns => Offer_1.default),
    __param(0, type_graphql_1.Arg("offerId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], default_1.prototype, "markAsCompleted", null);
default_1 = __decorate([
    type_graphql_1.Resolver(of => Offer_1.default)
], default_1);
exports.default = default_1;
;
//# sourceMappingURL=OfferResolver.js.map