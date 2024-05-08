import { Request, Response } from "express";
import Spotify from "../services/spotify";
import {
  SpotifyGetRequest,
  SpotifyListRequest,
  SpotifySearchRequest,
  SpotifySpecifiedIdRequest,
} from "../types/controllers";

/**
 * Handler for the search route for the artists.
 */
const search = async (req: SpotifySearchRequest, res: Response) => {
  try {
    const spotify = await Spotify.sdk();
    const result = await spotify
      .artists()
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
 * Handler for the get route for the artists.
 */
const get = async (req: SpotifyGetRequest, res: Response) => {
  try {
    const spotify = await Spotify.sdk();
    const result = await spotify.artists().get(req.params.id).get();

    return res.json({
      message: "Artist fetched successfully",
      artist: {
        ...result.data,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "Failed to fetch the artist", error });
  }
};

/**
 * Handler for the artist's albums route.
 */
const getAlbumsByArtistId = async (
  req: SpotifySpecifiedIdRequest,
  res: Response
) => {
  try {
    const spotify = await Spotify.sdk();
    const result = await spotify.artists().getAlbumsFrom(req.params.id).get();

    return res.json({
      message: "Artist's albums fetched successfully",
      albums: {
        ...result.data,
      },
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to fetch the artist's albums", error });
  }
};

/**
 * Handler for the artist's top tracks.
 */
const getTopTracksByArtistId = async (
  req: SpotifySpecifiedIdRequest,
  res: Response
) => {
  try {
    const spotify = await Spotify.sdk();
    const result = await spotify
      .artists()
      .getTopTracksFrom(req.params.id)
      .get();

    return res.json({
      message: "Artist's top tracks fetched successfully",
      ...result.data,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to fetch the artist's top tracks", error });
  }
};

/**
 * Handler for the list route for the artists.
 */
const list = async (req: SpotifyListRequest, res: Response) => {
  if (!req.query?.ids) {
    return res.status(400).json({
      message: "Missing query parameter 'ids'",
    });
  }

  try {
    const parameterIds = req.query?.ids as string;
    const ids = parameterIds.split(",");

    const spotify = await Spotify.sdk();
    const result = await spotify.artists().list(ids).get();

    return res.json({
      message: "Artists listed successfully",
      ...result.data,
    });
  } catch (error) {
    res.status(400).json({ message: "Failed to list the artists", error });
  }
};

export default {
  search,
  get,
  getAlbumsByArtistId,
  getTopTracksByArtistId,
  list,
};
