import axios from "axios";

export const authenticate: () => Promise<string> = async function () {
  const clientId: string | undefined = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret: string | undefined = process.env.SPOTIFY_CLIENT_SECRET;

  try {
    const result = await axios.post(
      "https://accounts.spotify.com/api/token",
      {
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return result.data.access_token as string;
  } catch (error) {
    throw error;
  }
};
