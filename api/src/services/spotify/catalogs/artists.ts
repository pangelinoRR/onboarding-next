import SpotifyCatalog from "./catalog";
import SpotifyPendingRequest from "./pending-request";

class SpotifyArtistCatalog extends SpotifyCatalog {
  /**
   * Search for an artist.
   */
  search(
    query: string,
    limit?: number,
    offset?: number
  ): SpotifyPendingRequest {
    return this.request("/search", {
      params: {
        q: query,
        type: "artist",
        limit: limit || this._defaults.limit,
        offset: offset || this._defaults.offset,
      },
    });
  }

  /**
   * Gets a specific artists given its Spotify ID.
   */
  get(id: string): SpotifyPendingRequest {
    return this.request(`/artists/${id}`);
  }

  /**
   * Gets a list of artists given their Spotify IDs.
   */
  list(ids: string[]): SpotifyPendingRequest {
    return this.request(`/artists`, {
      params: {
        ids: ids.join(","),
      },
    });
  }

  /**
   * Gets the albums from a specific artist, given
   * the artist's Spotify ID.
   */
  getAlbumsFrom(id: string): SpotifyPendingRequest {
    return this.request(`/artists/${id}/albums`);
  }

  /**
   * Gets the albums from a specific artist, given
   * the artist's Spotify ID.
   */
  getTopTracksFrom(id: string): SpotifyPendingRequest {
    return this.request(`/artists/${id}/top-tracks`);
  }
}

export default SpotifyArtistCatalog;
