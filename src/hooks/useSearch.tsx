import { useState, useEffect } from "react";
import { searchMusic, type Method } from "../services/SearchApi";

function useSearch(handleResults: (results: any) => void) {
  const [query, setQuery] = useState("");
  const [method, setMethod] = useState<Method>("artist");

  useEffect(() => {
    if (!query) return;

    const timeoutId = setTimeout(() => {
      searchMusic(query, method).then(handleResults);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, method, handleResults]);

  return {
    query,
    setQuery,
    method,
    setMethod,
  };
}

export default useSearch;
