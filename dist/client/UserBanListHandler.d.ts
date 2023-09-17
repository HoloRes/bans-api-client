import { AxiosInstance } from 'axios';
import { ListOptions, UserBanList, UserBanListCreateBody, UserBanListList } from '../types';
declare class UserBanListHandler {
    /**
     * @private
     * @internal
     */
    private readonly axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    /**
     * Create a new user ban list
     * @param report - an object containing all the fields to create a report
     */
    create(report: UserBanListCreateBody): Promise<UserBanList>;
    /**
     * Add proof to an existing ban list
     * @param id - id of the report
     * @param proof - list of links to images/files that show proof
     */
    addProof(id: string | bigint, proof: string[]): Promise<UserBanList>;
    /**
     * List all the user ban lists, paginated
     * @param options - modify the offset or limit
     */
    list(options?: ListOptions): Promise<UserBanListList>;
    /**
     * Finds all ban lists containing the query using full text search.
     * @param query - query to search for
     * @param caseInsensitive - Disable case sensitivity
     */
    search(query: string, caseInsensitive?: boolean): Promise<UserBanList[]>;
    /**
     * Find ban lists containing the user id.
     * @param id - user id to search for
     */
    findUser(id: string): Promise<UserBanList[]>;
    /**
     * Find a user ban list by id
     * @param id - id of the report
     */
    findById(id: string): Promise<UserBanList>;
}
export default UserBanListHandler;
export = UserBanListHandler;
