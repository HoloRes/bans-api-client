"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.ContentHandler = exports.UserBanListHandler = exports.UserHandler = exports.AmqpHandler = exports.BansApiClient = void 0;
const axios_1 = __importDefault(require("axios"));
const AmqpHandler_1 = __importDefault(require("./client/AmqpHandler"));
const UserHandler_1 = __importDefault(require("./client/UserHandler"));
const UserBanListHandler_1 = __importDefault(require("./client/UserBanListHandler"));
const ContentHandler_1 = __importDefault(require("./client/ContentHandler"));
class BansApiClient {
    constructor(config) {
        var _a, _b;
        this.url = (_a = config.url) !== null && _a !== void 0 ? _a : 'https://bans-api.suisei.app/v1';
        this.amqpEndpoint = (_b = config.amqp.endpoint) !== null && _b !== void 0 ? _b : 'bans-api.suisei.app:30555';
        this.amqpHandler = new AmqpHandler_1.default(`amqp://${config.amqp.username}:${config.apiKey}@${this.amqpEndpoint}`, config.amqp.topics);
        this.axiosInstance = axios_1.default.create({
            baseURL: this.url,
            headers: {
                'X-API-KEY': config.apiKey,
            },
        });
        this.users = new UserHandler_1.default(this.axiosInstance);
        this.userBanLists = new UserBanListHandler_1.default(this.axiosInstance);
        this.content = new ContentHandler_1.default(this.axiosInstance);
    }
}
exports.default = BansApiClient;
module.exports = BansApiClient;
