import axios, { AxiosInstance } from "axios";
import SpotifyArtistCatalog from "./catalogs/artists";
import SpotifyAlbumsCatalog from "./catalogs/albums";
import SpotifyTracksCatalog from "./catalogs/tracks";

class SpotifyClient {
  private _client: AxiosInstance;

  /**
   * Spotify Client constructor.
   */
  constructor(token: string) {
    this._client = axios.create({
      baseURL: process.env.SPOTIFY_API_URL,
      timeout: 5000,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  /**
   * Gives access to the Artists catalog.
   */
  artists(): SpotifyArtistCatalog {
    return new SpotifyArtistCatalog(this._client);
  }

  /**
   * Gives access to the Albums catalog.
   */
  albums(): SpotifyAlbumsCatalog {
    return new SpotifyAlbumsCatalog(this._client);
  }

  /**
   * Gives access to the Tracks catalog.
   */
  tracks(): SpotifyTracksCatalog {
    return new SpotifyTracksCatalog(this._client);
  }
}

export default SpotifyClient;
