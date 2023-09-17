/**
 * Settings for the client
 */
export interface Config {
	/**
	 * The API key retrieved from the developer portal.
	 */
	apiKey: string;

	/**
	 * URL to the API, only needs to be set when targeting staging or development environments.
	 */
	url?: string;

	amqp: {
		/**
		 * The username used to connect to RabbitMQ.
		 */
		username: string;

		/**
		 * Which topics to subscribe to.
		 */
		topics: Array<'user' | 'userbanlist' | 'content'>;

		/**
		 * Endpoint of RabbitMQ, only needs to be set when targeting staging or development environments.
		 */
		endpoint?: string;
	}
}

/**
 * AMQP Types
 */
export interface Event {
	type: 'create' | 'update' | 'delete';
	topic: 'user' | 'userbanlist' | 'content';
	data: UserReport | UserBanList | ContentReport;
}

/**
 * API response types
 */
export interface DiscordUser {
	/**
	 * Id of the user.
	 */
	id: string;

	/**
	 * Last known username of the user by the API.
	 */
	lastKnownUsername: string;

	/**
	 * List of all the known previous usernames by the API.
	 */
	pastUsernames: string[];
}

export type UserReportType = 'NORMAL' | 'COMPROMISED';

export interface UserReport {
	/**
	 * Id of the report.
	 */
	id: bigint;

	/**
	 * Additional information about the user.
	 */
	user: DiscordUser;

	/**
	 * Id of the reported user.
	 */
	userId: string;

	/**
	 * Additional information about the moderator.
	 */
	moderator: DiscordUser;

	/**
	 * Id of the moderator who created the report.
	 */
	moderatorId: string;

	/**
	 * The type of the user report.
	 */
	type: UserReportType;

	/**
	 * Reason for the report.
	 */
	reason: string;

	/**
	 * List of links to images/files that show proof.
	 */
	proof: string[];

	/**
	 * AND of valid and appealed properties.
	 */
	active: boolean;

	/**
	 * If the report is valid.
	 */
	valid: boolean;

	/**
	 * If the report has been successfully appealed.
	 */
	appealed: boolean;

	/**
	 * If the report is inactive, this field will contain the reason why.
	 */
	inactiveReason: string | null;
}

export interface UserBanList {
	/**
	 * Id of the ban list.
	 */
	id: string;

	/**
	 * List of user id's
	 */
	users: string[];

	/**
	 * Additional information about the moderator.
	 */
	moderator: DiscordUser;

	/**
	 * Id of the moderator who created the report.
	 */
	moderatorId: string;

	/**
	 * Reason for the report.
	 */
	reason: string;

	/**
	 * List of links to images/files that show proof.
	 */
	proof: string[];

	/**
	 * If the report is valid.
	 */
	valid: boolean;

	/**
	 * If the list in invalid, this field will contain the reason why.
	 */
	invalidateReason: string;
}

export type ContentReportType = 'DOX' | 'PASTLIFE' | 'UNRELEASED' | 'MISC';

export interface ContentReport {
	/**
	 * Id of the report.
	 */
	id: bigint;

	/**
	 * The type of the content report.
	 */
	type: ContentReportType;

	/**
	 * Reason for the report.
	 */
	reason: string | null;

	/**
	 * Link to the reported content.
	 */
	link: string;

	/**
	 * Time till which the report is valid as string.
	 */
	validTill: string | null;
}

export interface List<T = any> {
	reports: T[];
	total: number;
}

export interface UserBanListList {
	lists: UserBanList[];
	total: number;
}

/**
 * API request types
 */

// User controller
export interface UserReportCreateBody {
	/**
	 * Id of the reported user.
	 */
	userId: string;

	/**
	 * Id of the moderator creating the report
	 */
	moderatorId: string;

	/**
	 * The type of the user report.
	 */
	type: UserReportType;

	/**
	 * Reason for the report.
	 */
	reason: string;

	/**
	 * List of links to images/files that show proof, optional.
	 */
	proof?: string[];
}

export interface UserFindReports {
	/**
	 * Id of the reported user.
	 */
	userId?: string;

	/**
	 * Id of the moderator creating the report
	 */
	moderatorId?: string;

	/**
	 * The type of the user report.
	 */
	type?: UserReportType;

	/**
	 * AND of valid and appealed properties.
	 */
	active?: boolean;

	/**
	 * If the report is valid.
	 */
	valid?: boolean;

	/**
	 * If the report has been successfully appealed.
	 */
	appealed?: boolean;
}

// User ban list controller
export interface UserBanListCreateBody {
	/**
	 * List of user id's.
	 */
	users: string[];

	/**
	 * Id of the moderator creating the report
	 */
	moderatorId: string;

	/**
	 * Reason for the report.
	 */
	reason: string;

	/**
	 * List of links to images/files that show proof, optional.
	 */
	proof?: string[];
}

// Content controller
export interface ContentReportCreateBody {
	/**
	 * The type of the content report.
	 */
	type: ContentReportType;

	/**
	 * Reason for the report.
	 */
	reason: string;

	/**
	 * Link to the reported content.
	 */
	link: string;

	/**
	 * Time till which the report is valid.
	 */
	validTill?: Date;
}

// Misc
export interface ListOptions {
	limit?: number;
	offset?: number;
}
