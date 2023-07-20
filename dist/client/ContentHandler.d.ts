import { AxiosInstance } from 'axios';
import { ContentReport, ContentReportCreateBody, List, ListOptions } from '../types';
declare class ContentHandler {
    /**
     * @private
     * @internal
     */
    private readonly axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    /**
     * Create a content report
     * @param report - an object containing all the fields to create a report
     */
    create(report: ContentReportCreateBody): Promise<ContentReport>;
    /**
     * List all the content reports, paginated
     * @param options - modify the offset or limit
     */
    list(options?: ListOptions): Promise<List<ContentReport>>;
    /**
     * Find a content report by id
     * @param id - id of the report
     */
    findById(id: string | bigint): Promise<ContentReport>;
    /**
     * Finds all content reports containing the query in the link.
     * @param query - query to search for
     * @param caseInsensitive - Disable case sensitivity
     */
    find(query: string, caseInsensitive?: boolean): Promise<ContentReport[]>;
    /**
     * Finds all content reports containing the query using full text search.
     * @param query - query to search for
     * @param caseInsensitive - Disable case sensitivity
     */
    search(query: string, caseInsensitive?: boolean): Promise<ContentReport[]>;
}
export default ContentHandler;
export = ContentHandler;
