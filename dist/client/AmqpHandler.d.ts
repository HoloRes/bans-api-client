/// <reference types="node" />
import EventEmitter from 'node:events';
import { ContentReport, Event, UserBanList, UserReport } from '../types';
declare interface AmqpHandler {
    on(event: 'user', listener: (data: Omit<Event, 'data'> & {
        data: UserReport;
    }) => void): this;
    on(event: 'userbanlist', listener: (data: Omit<Event, 'data'> & {
        data: UserBanList;
    }) => void): this;
    on(event: 'content', listener: (data: Omit<Event, 'data'> & {
        data: ContentReport;
    }) => void): this;
}
/**
 * Handles events received from RabbitMQ.
 */
declare class AmqpHandler extends EventEmitter {
    /**
     * @private
     * @internal
     */
    private conn;
    constructor(url: string, topics: Array<'user' | 'userbanlist' | 'content'>);
    /**
     * @param url
     * @param topics
     * @private
     * @internal
     */
    private connect;
}
export default AmqpHandler;
export = AmqpHandler;
