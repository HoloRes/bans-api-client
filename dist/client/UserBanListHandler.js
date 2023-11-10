"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class UserBanListHandler {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }
    /**
     * Create a new user ban list
     * @param report - an object containing all the fields to create a report
     */
    create(report) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.axiosInstance.post('user/banlist/create', report);
            return data;
        });
    }
    /**
     * Add proof to an existing ban list
     * @param id - id of the report
     * @param proof - list of links to images/files that show proof
     */
    addProof(id, proof) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.axiosInstance.post(`user/banlist/${id.toString()}/proof`, {
                proof,
            });
            return data;
        });
    }
    /**
     * List all the user ban lists, paginated
     * @param options - modify the offset or limit
     */
    list(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.axiosInstance.get('user/banlist/list', {
                params: options,
            });
            return data;
        });
    }
    /**
     * Finds all ban lists containing the query using full text search.
     * @param query - query to search for
     * @param caseInsensitive - Disable case sensitivity
     */
    search(query, caseInsensitive = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.axiosInstance.get('user/banlist/search', {
                params: {
                    query,
                    caseInsensitive,
                },
            });
            return data;
        });
    }
    /**
     * Find ban lists containing the user id.
     * @param id - user id to search for
     */
    findUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.axiosInstance.get('user/banlist/findUser', {
                params: {
                    id,
                },
            });
            return data;
        });
    }
    /**
     * Find a user ban list by id
     * @param id - id of the report
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.axiosInstance.get(`user/banlist/${id.toString()}`);
            return data;
        });
    }
}
exports.default = UserBanListHandler;
module.exports = UserBanListHandler;
