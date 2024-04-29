import { SearchAPIResponse } from "./types";
const API_KEY = "fcd492e73eaf5db3fc46164916b00df9";
const API_URL = `https://ws.audioscrobbler.com/2.0/?api_key=${API_KEY}&format=json&`;

export type Method = "artist" | "track" | "album";

async function searchMusic(
  query: string,
  method: Method
): Promise<Array<string>> {
  const searchParams = new URLSearchParams({
    method: `${method}.search`,
    [method]: query,
  });
  try {
    const response = await fetch(API_URL + searchParams);
    if (!response.ok) {
      throw new Error("Error al obtener datos de la API");
    }
    const data: SearchAPIResponse = await response.json();

    if (method === "artist") {
      return data.results.artistmatches.artist.map((artist) => artist.name);
    }
    if (method === "track") {
      return data.results.trackmatches.track.map((track) => track.name);
    }
    return data.results.albummatches.album.map((album) => album.name);
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    throw error;
  }
}

export { searchMusic };
