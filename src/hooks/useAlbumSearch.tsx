import { useState, useEffect } from "react";
import { searchAPI } from "../services/SearchApi";

const useAlbumSearch = (query: string) => {
  const [albumName, setAlbumName] = useState("");

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const name = await searchAPI(query, "album.search");
        setAlbumName(name);
      } catch (error) {
        console.error("Error al buscar album", error);
      }
    };
    fetchAlbum();
    return () => {};
  }, [query]);
  return albumName;
};

export default useAlbumSearch;
