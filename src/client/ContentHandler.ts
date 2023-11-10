import { AxiosInstance } from 'axios';
import {
	ContentReport, ContentReportCreateBody, List, ListOptions,
} from '../types';

class ContentHandler {
	/**
	 * @private
	 * @internal
	 */
	private readonly axiosInstance: AxiosInstance;

	constructor(axiosInstance: AxiosInstance) {
		this.axiosInstance = axiosInstance;
	}

	/**
	 * Create a content report
	 * @param report - an object containing all the fields to create a report
	 */
	async create(report: ContentReportCreateBody): Promise<ContentReport> {
		const { data } = await this.axiosInstance.post('content/report', {
			...report,
			validTill: report.validTill ? report.validTill.toISOString() : undefined,
		});

		return data;
	}

	/**
	 * List all the content reports, paginated
	 * @param options - modify the offset or limit
	 */
	async list(options?: ListOptions): Promise<List<ContentReport>> {
		const { data } = await this.axiosInstance.get('content/list', {
			params: options,
		});

		return data;
	}

	/**
	 * Find a content report by id
	 * @param id - id of the report
	 */
	async findById(id: string | bigint): Promise<ContentReport> {
		const { data } = await this.axiosInstance.get(`content/report/${id.toString()}`);

		return data;
	}

	/**
	 * Finds all content reports containing the query in the link.
	 * @param query - query to search for
	 * @param caseInsensitive - Disable case sensitivity
	 */
	async find(query: string, caseInsensitive: boolean = false): Promise<ContentReport[]> {
		const { data } = await this.axiosInstance.get('content/find', {
			params: {
				query,
				caseInsensitive,
			},
		});

		return data;
	}

	/**
	 * Finds all content reports containing the query using full text search.
	 * @param query - query to search for
	 * @param caseInsensitive - Disable case sensitivity
	 */
	async search(query: string, caseInsensitive: boolean = false): Promise<ContentReport[]> {
		const { data } = await this.axiosInstance.get('content/search', {
			params: {
				query,
				caseInsensitive,
			},
		});

		return data;
	}
}

export default ContentHandler;
// @ts-expect-error
export = ContentHandler;
