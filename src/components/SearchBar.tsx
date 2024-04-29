import useSearch from "../hooks/useSearch";
import { Method } from "../services/SearchApi";
interface SearchProps {
  handleResults: (results: string[]) => void;
}

const SearchBar = ({ handleResults }: SearchProps) => {
  const { query, setQuery, setMethod } = useSearch(handleResults);
  const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleChangeMethod = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMethod(e.target.value as Method);
  };

  return (
    <section className="flex flex-col items-center space-y-4">
      <input
        type="text"
        value={query}
        onChange={handleChangeQuery}
        className="border border-gray-300 rounded-md px-4 py-2"
        placeholder="Ingrese su búsqueda..."
      />
      <select
        onChange={handleChangeMethod}
        className="border border-gray-300 rounded-md px-4 py-2"
      >
        <option value="artist">Artista</option>
        <option value="album">Álbum</option>
        <option value="track">Canción</option>
      </select>
    </section>
  );
};

export default SearchBar;
