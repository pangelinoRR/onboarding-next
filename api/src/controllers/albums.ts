import { Request, Response } from "express";
import Spotify from "../services/spotify";
import {
  SpotifyGetRequest,
  SpotifyListRequest,
  SpotifySearchRequest,
  SpotifySpecifiedIdRequest,
} from "../types/controllers";

/**
 * Handler for the search route for the albums.
 */
const search = async (req: SpotifySearchRequest, res: Response) => {
  try {
    const spotify = await Spotify.sdk();
    const result = await spotify
      .albums()
      .search(
        req.query.q,
        req.query?.limit ? Number.parseInt(req.query.limit) : undefined,
        req.query?.offset ? Number.parseInt(req.query.offset) : undefined
      )
      .get();

    return res.json({
      message: "Search performed successfully",
      ...result.data,
    });
  } catch (error) {
    res.status(400).json({ message: "Failed to perform the search", error });
  }
};

/**
 * Handler for the get route for the albums.
 */
const get = async (req: SpotifyGetRequest, res: Response) => {
  try {
    const spotify = await Spotify.sdk();
    const result = await spotify.albums().get(req.params.id).get();

    return res.json({
      message: "Album fetched successfully",
      album: {
        ...result.data,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "Failed to fetch the album", error });
  }
};

/**
 * Handler for the albums's tracks route.
 */
const getTracksByAlbumId = async (
  req: SpotifySpecifiedIdRequest,
  res: Response
) => {
  try {
    const spotify = await Spotify.sdk();
    const result = await spotify.albums().getTracksFrom(req.params.id).get();

    return res.json({
      message: "Album's tracks fetched successfully",
      tracks: {
        ...result.data,
      },
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to fetch the albums's tracks", error });
  }
};

/**
 * Handler for the new released albums.
 */
const getNewReleases = async (req: Request, res: Response) => {
  try {
    const spotify = await Spotify.sdk();
    const result = await spotify.albums().getNewReleases().get();

    return res.json({
      message: "New releases fetched successfully",
      ...result.data,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to fetch the new releases", error });
  }
};

/**
 * Handler for the list route for the albums.
 */
const list = async (req: SpotifyListRequest, res: Response) => {
  if (!req.query?.ids) {
    return res.status(400).json({
      message: "Missing query parameter 'ids'",
    });
  }

  try {
    const parameterIds = req.query?.ids;
    const ids = parameterIds.split(",");

    const spotify = await Spotify.sdk();
    const result = await spotify.albums().list(ids).get();

    return res.json({
      message: "Albums listed successfully",
      ...result.data,
    });
  } catch (error) {
    res.status(400).json({ message: "Failed to list the albums", error });
  }
};

export default {
  search,
  get,
  getTracksByAlbumId,
  getNewReleases,
  list,
};
