import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import SpotifyWebApi from "spotify-web-api-node";

const scope = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-read-playback-state",
    "playlist-read-currently-playing",
    "playlist-read-recently-played",
    "streaming",
    "user-library-read",
    // "user-library-modify",  
    "user-top-read",
    "user-follow-read",
    "playlist-modify-playback-state"
].join(',')

const params = {
    scope: scopes,
};

const queryParamString = new URLSearchParams(params)

const LOGIN_URL = "https://account.spotify.com/authorize?" + queryParamString.toString();

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

export default spotifyApi;
export { LOGIN_URL };