import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import useDebounce from "../../hooks/useDebounce";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 1000);
  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedQuery) navigate(`/search?q=${debouncedQuery}`);
  }, [debouncedQuery]);

  return (
    <nav className="bg-[#151B23] py-5 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex gap-5 md:gap-7 items-center">
        <Link
          to="/"
          className="text-xl md:text-2xl font-extrabold text-indigo-500 hover:text-indigo-400 transition-colors"
        >
          MEDIA QUERY
        </Link>

        <Link to="/movies" className="text-sm md:text-lg font-bold hover:text-indigo-500 transition-colors">
          Movies
        </Link>
        <Link to="/tv-shows" className="text-sm md:text-lg font-bold hover:text-indigo-500 transition-colors">
          TV Shows
        </Link>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto items-center gap-2">
        <input
          type="text"
          placeholder="Search a Movie"
          className="w-full md:w-64 lg:w-120 border border-[#414345] px-4 py-2 rounded-lg outline-none focus:ring-1 focus:ring-indigo-500  transition-all placeholder:text-gray-500 text-sm md:text-base"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="shrink-0 bg-indigo-500  px-4 py-2 rounded-lg cursor-pointer transition-all text-white text-sm md:text-base font-semibold shadow-md active:scale-95">
          SEARCH
        </button>
      </form>
    </nav>
  );
}
