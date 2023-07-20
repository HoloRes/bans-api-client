import { AxiosInstance } from 'axios';
import { List, ListOptions, UserFindReports, UserReport, UserReportCreateBody } from '../types';
declare class UserHandler {
    /**
     * @private
     * @internal
     */
    private readonly axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    /**
     * Creates a new user report
     * @param report - an object containing all the fields to create a report
     */
    create(report: UserReportCreateBody): Promise<UserReport>;
    /**
     * Add proof to an existing report
     * @param id - id of the report
     * @param proof - list of links to images/files that show proof
     */
    addProof(id: string | bigint, proof: string[]): Promise<UserReport>;
    /**
     * List all the user reports, paginated
     * @param options - modify the offset or limit
     */
    list(options?: ListOptions): Promise<List<UserReport>>;
    /**
     * Find user reports using a query
     * @param query - query to search for
     */
    find(query: UserFindReports): Promise<UserReport[]>;
    /**
     * Find a user report by id
     * @param id - id of the report
     */
    findById(id: string | bigint): Promise<UserReport>;
    /**
     * Find reports by a Discord user id
     * @param id - Discord user id to search for
     */
    findByUserId(id: string): Promise<UserReport[]>;
}
export default UserHandler;
export = UserHandler;
