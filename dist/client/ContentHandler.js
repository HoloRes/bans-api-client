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
class ContentHandler {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }
    /**
     * Create a content report
     * @param report - an object containing all the fields to create a report
     */
    create(report) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.axiosInstance.post('/content/report', Object.assign(Object.assign({}, report), { validTill: report.validTill ? report.validTill.toISOString() : undefined }));
            return data;
        });
    }
    /**
     * List all the content reports, paginated
     * @param options - modify the offset or limit
     */
    list(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.axiosInstance.get('/content/list', {
                params: options,
            });
            return data;
        });
    }
    /**
     * Find a content report by id
     * @param id - id of the report
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.axiosInstance.get(`/content/report/${id.toString()}`);
            return data;
        });
    }
    /**
     * Finds all content reports containing the query in the link.
     * @param query - query to search for
     * @param caseInsensitive - Disable case sensitivity
     */
    find(query, caseInsensitive = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.axiosInstance.get('/content/find', {
                params: {
                    query,
                    caseInsensitive,
                },
            });
            return data;
        });
    }
    /**
     * Finds all content reports containing the query using full text search.
     * @param query - query to search for
     * @param caseInsensitive - Disable case sensitivity
     */
    search(query, caseInsensitive = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.axiosInstance.get('/content/search', {
                params: {
                    query,
                    caseInsensitive,
                },
            });
            return data;
        });
    }
}
exports.default = ContentHandler;
module.exports = ContentHandler;
