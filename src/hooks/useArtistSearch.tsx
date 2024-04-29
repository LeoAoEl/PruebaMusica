import { useState, useEffect } from "react";
import { searchAPI } from "../services/SearchApi";

const useArtistSearch = (query: string) => {
  const [artistName, setArtistName] = useState("");

  useEffect(() => {
    const fetchArtis = async () => {
      try {
        const name = await searchAPI(query, "artist.search");
        setArtistName(name);
      } catch (error) {
        console.error("Error al buscar Artista", error);
      }
    };
    fetchArtis();
    return () => {};
  }, [query]);
  return artistName;
};

export default useArtistSearch;
