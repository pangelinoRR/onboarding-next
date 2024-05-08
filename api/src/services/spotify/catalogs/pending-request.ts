import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class SpotifyPendingRequest {
  private _axios: AxiosInstance;
  private _url: string;
  private _configuration?: AxiosRequestConfig;

  /**
   * Spotify Pending Request constructor.
   */
  constructor(
    axios: AxiosInstance,
    url: string,
    configuration?: AxiosRequestConfig
  ) {
    this._axios = axios;
    this._url = url;
    this._configuration = configuration;
  }

  /**
   * Executes the pending request using the
   * axios instance.
   */
  async get(): Promise<AxiosResponse> {
    return await this._axios.get(this._url, this._configuration);
  }
}

export default SpotifyPendingRequest;
