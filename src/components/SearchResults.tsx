import ResultItem from "./ResultItem";

function SearchResults({ results }) {
  return (
    <div className="pt-8">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
        {results.map((result, index) => (
          <ResultItem key={index} result={result} />
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
