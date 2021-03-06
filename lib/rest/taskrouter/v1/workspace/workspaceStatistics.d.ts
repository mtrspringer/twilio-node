/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the WorkspaceStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The SID of the Workspace
 */
declare function WorkspaceStatisticsList(version: V1, workspaceSid: string): WorkspaceStatisticsListInstance;

/**
 * Options to pass to fetch
 *
 * @property endDate - Only calculate statistics from this date and time and earlier
 * @property minutes - Only calculate statistics since this many minutes in the past
 * @property splitByWaitTime - A comma separated list of values that describes the thresholds to calculate statistics on
 * @property startDate - Only calculate statistics from on or after this date
 * @property taskChannel - Only calculate statistics on this TaskChannel.
 */
interface WorkspaceStatisticsInstanceFetchOptions {
  endDate?: Date;
  minutes?: number;
  splitByWaitTime?: string;
  startDate?: Date;
  taskChannel?: string;
}

interface WorkspaceStatisticsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkspaceStatisticsContext;
  /**
   * Constructs a workspace_statistics
   */
  get(): WorkspaceStatisticsContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface WorkspaceStatisticsPayload extends WorkspaceStatisticsResource, Page.TwilioResponsePayload {
}

interface WorkspaceStatisticsResource {
  account_sid: string;
  cumulative: object;
  realtime: object;
  url: string;
  workspace_sid: string;
}

interface WorkspaceStatisticsSolution {
  workspaceSid?: string;
}


declare class WorkspaceStatisticsContext {
  /**
   * Initialize the WorkspaceStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The SID of the Workspace to fetch
   */
  constructor(version: V1, workspaceSid: string);

  /**
   * fetch a WorkspaceStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WorkspaceStatisticsInstance) => any): Promise<WorkspaceStatisticsInstance>;
  /**
   * fetch a WorkspaceStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkspaceStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkspaceStatisticsInstance) => any): Promise<WorkspaceStatisticsInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class WorkspaceStatisticsInstance extends SerializableClass {
  /**
   * Initialize the WorkspaceStatisticsContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The SID of the Workspace
   */
  constructor(version: V1, payload: WorkspaceStatisticsPayload, workspaceSid: string);

  private _proxy: WorkspaceStatisticsContext;
  accountSid: string;
  cumulative: object;
  /**
   * fetch a WorkspaceStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WorkspaceStatisticsInstance) => any): Promise<WorkspaceStatisticsInstance>;
  /**
   * fetch a WorkspaceStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkspaceStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkspaceStatisticsInstance) => any): Promise<WorkspaceStatisticsInstance>;
  realtime: object;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
  workspaceSid: string;
}


declare class WorkspaceStatisticsPage extends Page<V1, WorkspaceStatisticsPayload, WorkspaceStatisticsResource, WorkspaceStatisticsInstance> {
  /**
   * Initialize the WorkspaceStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WorkspaceStatisticsSolution);

  /**
   * Build an instance of WorkspaceStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkspaceStatisticsPayload): WorkspaceStatisticsInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { WorkspaceStatisticsContext, WorkspaceStatisticsInstance, WorkspaceStatisticsInstanceFetchOptions, WorkspaceStatisticsList, WorkspaceStatisticsListInstance, WorkspaceStatisticsPage, WorkspaceStatisticsPayload, WorkspaceStatisticsResource, WorkspaceStatisticsSolution }
