"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const node_events_1 = __importDefault(require("node:events"));
const amqplib_1 = __importDefault(require("amqplib"));
/**
 * Handles events received from RabbitMQ.
 */
class AmqpHandler extends node_events_1.default {
    constructor(url, topics) {
        super();
        /**
         * @private
         * @internal
         */
        this.conn = null;
        // eslint-disable-next-line no-void
        void this.connect(url, topics);
    }
    /**
     * @param url
     * @param topics
     * @private
     * @internal
     */
    connect(url, topics) {
        return __awaiter(this, void 0, void 0, function* () {
            this.conn = yield amqplib_1.default.connect(url);
            const channel = yield this.conn.createChannel();
            const queue = yield channel.assertQueue('', { exclusive: true });
            // eslint-disable-next-line no-restricted-syntax
            for (const topic of topics) {
                // eslint-disable-next-line no-await-in-loop
                yield channel.bindQueue(queue.queue, 'bans-api', topic);
            }
            yield channel.consume(queue.queue, (msg) => {
                if (!msg)
                    return;
                const data = JSON.parse(msg.content.toString());
                this.emit(data.topic, data);
            });
        });
    }
}
exports.default = AmqpHandler;
module.exports = AmqpHandler;
