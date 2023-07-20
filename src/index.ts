import axios, { AxiosInstance } from 'axios';
import { Config } from './types';
import AmqpHandler from './client/AmqpHandler';
import UserHandler from './client/UserHandler';
import UserBanListHandler from './client/UserBanListHandler';
import ContentHandler from './client/ContentHandler';

class BansApiClient {
	/**
	 * @private
	 * @internal
	 */
	private readonly url: string;

	/**
	 * @private
	 * @internal
	 */
	private readonly axiosInstance: AxiosInstance;

	/**
	 * @private
	 * @internal
	 */
	private readonly amqpEndpoint: string;

	public readonly amqpHandler: AmqpHandler;

	public readonly users: UserHandler;

	public readonly userBanLists: UserBanListHandler;

	public readonly content: ContentHandler;

	constructor(config: Config) {
		this.url = config.url ?? 'https://bans-api.suisei.app';
		this.amqpEndpoint = config.amqp.endpoint ?? 'bans-api.suisei.app:30555';

		this.amqpHandler = new AmqpHandler(`amqp://${config.amqp.username}:${config.apiKey}@${this.amqpEndpoint}`, config.amqp.topics);
		this.axiosInstance = axios.create({
			baseURL: this.url,
			headers: {
				'X-API-KEY': config.apiKey,
			},
		});

		this.users = new UserHandler(this.axiosInstance);
		this.userBanLists = new UserBanListHandler(this.axiosInstance);
		this.content = new ContentHandler(this.axiosInstance);
	}
}

export {
	BansApiClient,
	AmqpHandler,
	UserHandler,
	UserBanListHandler,
	ContentHandler,
};

export default BansApiClient;
// @ts-expect-error
export = BansApiClient;
