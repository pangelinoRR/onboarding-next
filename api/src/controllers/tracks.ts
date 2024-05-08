import { Request, Response } from "express";
import Spotify from "../services/spotify";
import {
  SpotifyGetRequest,
  SpotifyListRequest,
  SpotifySearchRequest,
} from "../types/controllers";

/**
 * Handler for the search route for the albums.
 */
const search = async (req: SpotifySearchRequest, res: Response) => {
  try {
    const spotify = await Spotify.sdk();
    const result = await spotify
      .tracks()
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
    const result = await spotify.tracks().get(req.params.id).get();

    return res.json({
      message: "Album fetched successfully",
      track: {
        ...result.data,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "Failed to fetch the album", error });
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
    const result = await spotify.tracks().list(ids).get();

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
  list,
};
