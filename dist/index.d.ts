import { Config } from './types';
import AmqpHandler from './client/AmqpHandler';
import UserHandler from './client/UserHandler';
import UserBanListHandler from './client/UserBanListHandler';
import ContentHandler from './client/ContentHandler';
declare class BansApiClient {
    /**
     * @private
     * @internal
     */
    private readonly url;
    /**
     * @private
     * @internal
     */
    private readonly axiosInstance;
    /**
     * @private
     * @internal
     */
    private readonly amqpEndpoint;
    readonly amqpHandler: AmqpHandler;
    readonly users: UserHandler;
    readonly userBanLists: UserBanListHandler;
    readonly content: ContentHandler;
    constructor(config: Config);
}
export { BansApiClient, AmqpHandler, UserHandler, UserBanListHandler, ContentHandler, };
export default BansApiClient;
export = BansApiClient;
