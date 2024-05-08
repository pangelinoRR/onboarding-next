import SpotifyCatalog from "./catalog";
import SpotifyPendingRequest from "./pending-request";

class SpotifyTracksCatalog extends SpotifyCatalog {
  /**
   * Search for a track.
   */
  search(
    query: string,
    limit?: number,
    offset?: number
  ): SpotifyPendingRequest {
    return this.request("/search", {
      params: {
        q: query,
        type: "track",
        limit: limit || this._defaults.limit,
        offset: offset || this._defaults.offset,
      },
    });
  }

  /**
   * Gets a specific track given its Spotify ID.
   */
  get(id: string): SpotifyPendingRequest {
    return this.request(`/tracks/${id}`);
  }

  /**
   * Gets a lists of tracks given their Spotify IDs.
   */
  list(ids: string[]): SpotifyPendingRequest {
    return this.request(`/tracks`, {
      params: {
        ids: ids.join(","),
      },
    });
  }
}

export default SpotifyTracksCatalog;
