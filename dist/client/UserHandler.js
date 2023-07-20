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
class UserHandler {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }
    /**
     * Creates a new user report
     * @param report - an object containing all the fields to create a report
     */
    create(report) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.axiosInstance.post('/user/report', report);
            return data;
        });
    }
    /**
     * Add proof to an existing report
     * @param id - id of the report
     * @param proof - list of links to images/files that show proof
     */
    addProof(id, proof) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.axiosInstance.post(`/user/report/${id.toString()}/proof`, {
                proof,
            });
            return data;
        });
    }
    /**
     * List all the user reports, paginated
     * @param options - modify the offset or limit
     */
    list(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.axiosInstance.get('/user/list', {
                params: options,
            });
            return data;
        });
    }
    /**
     * Find user reports using a query
     * @param query - query to search for
     */
    find(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.axiosInstance.post('/user/find', query);
            return data;
        });
    }
    /**
     * Find a user report by id
     * @param id - id of the report
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.axiosInstance.get(`/user/report/${id.toString()}`);
            return data;
        });
    }
    /**
     * Find reports by a Discord user id
     * @param id - Discord user id to search for
     */
    findByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.axiosInstance.get(`/user/check/${id}`);
            return data;
        });
    }
}
exports.default = UserHandler;
module.exports = UserHandler;
