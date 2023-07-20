import EventEmitter from 'node:events';
import amqplib from 'amqplib';
import {
	ContentReport, Event, UserBanList, UserReport,
} from '../types';

declare interface AmqpHandler {
	on(event: 'user', listener: (data: Omit<Event, 'data'> & { data: UserReport }) => void): this;
	on(event: 'userbanlist', listener: (data: Omit<Event, 'data'> & { data: UserBanList }) => void): this;
	on(event: 'content', listener: (data: Omit<Event, 'data'> & { data: ContentReport }) => void): this;
}

/**
 * Handles events received from RabbitMQ.
 */
class AmqpHandler extends EventEmitter {
	/**
	 * @private
	 * @internal
	 */
	private conn: amqplib.Connection | null = null;

	constructor(url: string, topics: Array<'user' | 'userbanlist' | 'content'>) {
		super();

		// eslint-disable-next-line no-void
		void this.connect(url, topics);
	}

	/**
	 * @param url
	 * @param topics
	 * @private
	 * @internal
	 */
	private async connect(url: string, topics: Array<'user' | 'userbanlist' | 'content'>) {
		this.conn = await amqplib.connect(url);

		const channel = await this.conn.createChannel();
		const queue = await channel.assertQueue('', { exclusive: true });

		// eslint-disable-next-line no-restricted-syntax
		for (const topic of topics) {
			// eslint-disable-next-line no-await-in-loop
			await channel.bindQueue(queue.queue, 'bans-api', topic);
		}

		await channel.consume(queue.queue, (msg) => {
			if (!msg) return;
			const data = JSON.parse(msg.content.toString()) as Event;

			this.emit(data.topic, data);
		});
	}
}

export default AmqpHandler;
// @ts-expect-error
export = AmqpHandler;
