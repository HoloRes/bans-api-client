import { AxiosInstance } from 'axios';
import {
	ListOptions, UserBanList, UserBanListCreateBody, UserBanListList,
} from '../types';

class UserBanListHandler {
	/**
	 * @private
	 * @internal
	 */
	private readonly axiosInstance: AxiosInstance;

	constructor(axiosInstance: AxiosInstance) {
		this.axiosInstance = axiosInstance;
	}

	/**
	 * Create a new user ban list
	 * @param report - an object containing all the fields to create a report
	 */
	async create(report: UserBanListCreateBody): Promise<UserBanList> {
		const { data } = await this.axiosInstance.post('/user/banlist/create', report);

		return data;
	}

	/**
	 * Add proof to an existing ban list
	 * @param id - id of the report
	 * @param proof - list of links to images/files that show proof
	 */
	async addProof(id: string | bigint, proof: string[]): Promise<UserBanList> {
		const { data } = await this.axiosInstance.post(`/user/banlist/${id.toString()}/proof`, {
			proof,
		});

		return data;
	}

	/**
	 * List all the user ban lists, paginated
	 * @param options - modify the offset or limit
	 */
	async list(options?: ListOptions): Promise<UserBanListList> {
		const { data } = await this.axiosInstance.get('/user/banlist/list', {
			params: options,
		});

		return data;
	}

	/**
	 * Finds all ban lists containing the query using full text search.
	 * @param query - query to search for
	 * @param caseInsensitive - Disable case sensitivity
	 */
	async search(query: string, caseInsensitive: boolean = false): Promise<UserBanList[]> {
		const { data } = await this.axiosInstance.get('/user/banlist/search', {
			params: {
				query,
				caseInsensitive,
			},
		});

		return data;
	}

	/**
	 * Find a user ban list by id
	 * @param id - id of the report
	 */
	async findById(id: string): Promise<UserBanList> {
		const { data } = await this.axiosInstance.get(`/user/banlist/${id.toString()}`);

		return data;
	}
}

export default UserBanListHandler;
// @ts-expect-error
export = UserBanListHandler;
