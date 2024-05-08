import { authenticate } from "./spotify/auth";
import SpotifyClient from "./spotify/client";
import SpotifyArtistCatalog from "./spotify/catalogs/artists";
import SpotifyAlbumsCatalog from "./spotify/catalogs/albums";
import SpotifyTracksCatalog from "./spotify/catalogs/tracks";

class Spotify {
  /**
   * Class static instance to be return as part
   * of the singleton pattern.
   */
  private static _instance: Spotify;

  /**
   * Access token for the external API.
   */
  private _token?: string;

  /**
   * Spotify Client instance.
   */
  private _client?: SpotifyClient;

  /**
   * Private constructor to ensure the class
   * can't be instantiated outside its own class.
   */
  private constructor() {}

  /**
   * Sets up the service, authenticating to the
   * external Spotify API and saving the returned token.
   */
  private async setup(): Promise<void> {
    if (!this._token) {
      this._token = await authenticate();
    }

    this._client = new SpotifyClient(this._token);
  }

  /**
   * Returns the instance of the singleton.
   */
  public static async sdk(): Promise<Spotify> {
    /**
     * Initialize instance of the singleton, if not yet
     * initialized.
     */
    if (!Spotify._instance) {
      Spotify._instance = new Spotify();
      await Spotify._instance.setup();
    }

    return Spotify._instance;
  }

  /**
   * Gives access to the Artists catalog
   */
  artists(): SpotifyArtistCatalog {
    if (!this._client) {
      throw new Error("Spotify service not initialized");
    }

    return this._client.artists();
  }

  /**
   * Gives access to the Albums catalog
   */
  albums(): SpotifyAlbumsCatalog {
    if (!this._client) {
      throw new Error("Spotify service not initialized");
    }

    return this._client.albums();
  }

  /**
   * Gives access to the Tracks catalog
   */
  tracks(): SpotifyTracksCatalog {
    if (!this._client) {
      throw new Error("Spotify service not initialized");
    }

    return this._client.tracks();
  }
}

export default Spotify;
