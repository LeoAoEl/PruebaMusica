const ResultItem = ({ result }) => {
  return (
    <li className="flex justify-center items-center rounded-full px-4 py-2 text-center transition-all cursor-pointer ease-in-out duration-300 hover:text-pretty  text-white border-2 border-white truncate">
      {result}
    </li>
  );
};

export default ResultItem;
