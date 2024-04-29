function SearchResults({ results }) {
  return (
    <div>
      <p>Resultados de la busqueda</p>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
