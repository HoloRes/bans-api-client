import { AxiosInstance } from 'axios';
import {
	List, ListOptions, UserFindReports, UserReport, UserReportCreateBody,
} from '../types';

class UserHandler {
	/**
	 * @private
	 * @internal
	 */
	private readonly axiosInstance: AxiosInstance;

	constructor(axiosInstance: AxiosInstance) {
		this.axiosInstance = axiosInstance;
	}

	/**
	 * Creates a new user report
	 * @param report - an object containing all the fields to create a report
	 */
	async create(report: UserReportCreateBody): Promise<UserReport> {
		const { data } = await this.axiosInstance.post('/user/report', report);

		return data;
	}

	/**
	 * Add proof to an existing report
	 * @param id - id of the report
	 * @param proof - list of links to images/files that show proof
	 */
	async addProof(id: string | bigint, proof: string[]): Promise<UserReport> {
		const { data } = await this.axiosInstance.post(`/user/report/${id.toString()}/proof`, {
			proof,
		});

		return data;
	}

	/**
	 * List all the user reports, paginated
	 * @param options - modify the offset or limit
	 */
	async list(options?: ListOptions): Promise<List<UserReport>> {
		const { data } = await this.axiosInstance.get('/user/list', {
			params: options,
		});

		return data;
	}

	/**
	 * Find user reports using a query
	 * @param query - query to search for
	 */
	async find(query: UserFindReports): Promise<UserReport[]> {
		const { data } = await this.axiosInstance.post('/user/find', query);

		return data;
	}

	/**
	 * Find a user report by id
	 * @param id - id of the report
	 */
	async findById(id: string | bigint): Promise<UserReport> {
		const { data } = await this.axiosInstance.get(`/user/report/${id.toString()}`);

		return data;
	}

	/**
	 * Find reports by a Discord user id
	 * @param id - Discord user id to search for
	 */
	async findByUserId(id: string): Promise<UserReport[]> {
		const { data } = await this.axiosInstance.get(`/user/check/${id}`);

		return data;
	}
}

export default UserHandler;
// @ts-expect-error
export = UserHandler;
