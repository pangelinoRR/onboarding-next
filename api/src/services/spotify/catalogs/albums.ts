import SpotifyCatalog from "./catalog";
import SpotifyPendingRequest from "./pending-request";

class SpotifyAlbumsCatalog extends SpotifyCatalog {
  /**
   * Search for an album.
   */
  search(
    query: string,
    limit?: number,
    offset?: number
  ): SpotifyPendingRequest {
    return this.request("/search", {
      params: {
        q: query,
        type: "album",
        limit: limit || this._defaults.limit,
        offset: offset || this._defaults.offset,
      },
    });
  }

  /**
   * Gets a specific album given its Spotify ID.
   */
  get(id: string): SpotifyPendingRequest {
    return this.request(`/albums/${id}`);
  }

  /**
   * Gets a lists of albums given their Spotify IDs.
   */
  list(ids: string[]): SpotifyPendingRequest {
    return this.request(`/albums`, {
      params: {
        ids: ids.join(","),
      },
    });
  }

  /**
   * Gets the tracks from a specific album, given
   * the artist's Spotify ID.
   */
  getTracksFrom(id: string): SpotifyPendingRequest {
    return this.request(`/albums/${id}/tracks`);
  }

  /**
   * Gets the new album releases.
   */
  getNewReleases(limit?: number, offset?: number): SpotifyPendingRequest {
    return this.request("/browse/new-releases", {
      params: {
        limit: limit || this._defaults.limit,
        offset: offset || this._defaults.offset,
      },
    });
  }
}

export default SpotifyAlbumsCatalog;
