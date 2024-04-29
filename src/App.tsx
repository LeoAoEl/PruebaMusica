import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

function App() {
  const [results, setResults] = useState([] as Record<string, unknown>[]);

  const handleResults = (results: Record<string, unknown>[]) => {
    setResults(results);
  };
  return (
    <main className="bg-slate-800 h-screen flex items-center justify-center">
      <section className="max-w-[1400px] w-full px-4 md:px-8">
        <h1 className="text-6xl font-bold text-white text-center py-4">
          Busca artisa, album o canción
        </h1>
        <SearchBar handleResults={handleResults} />
      </section>
      <section>
        <SearchResults results={results} />
      </section>
    </main>
  );
}

export default App;
