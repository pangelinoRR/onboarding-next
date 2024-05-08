import { AxiosInstance, AxiosRequestConfig } from "axios";
import SpotifyPendingRequest from "./pending-request";

abstract class SpotifyCatalog {
  /**
   * Axios instance coming from the Spotify Client.
   */
  protected _client: AxiosInstance;

  /**
   * Defaults for search endpoints.
   */
  protected _defaults: { limit: number; offset: number };

  /**
   * Base Spotify Catalog constructor.
   */
  constructor(client: AxiosInstance) {
    this._client = client;
    this._defaults = { limit: 20, offset: 0 };
  }

  /**
   * Issues a new Pending Request, waiting
   * to be executed.
   */
  protected request(
    url: string,
    configuration?: AxiosRequestConfig
  ): SpotifyPendingRequest {
    return new SpotifyPendingRequest(this._client, url, configuration);
  }
}

export default SpotifyCatalog;
