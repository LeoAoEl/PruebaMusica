import { useState, useEffect } from "react";
import { searchAPI } from "../services/SearchApi";

const useTrackSearch = (query: string) => {
  const [trackName, setTrackName] = useState("");

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const name = await searchAPI(query, "track.search");
        setTrackName(name);
      } catch (error) {
        console.error("Error al buscar canción", error);
      }
    };
    fetchTrack();
    return () => {};
  }, [query]);

  return trackName;
};
export default useTrackSearch;
