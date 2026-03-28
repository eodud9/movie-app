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
    <nav className="bg-[#151B23] py-7 px-10 flex justify-between items-center">
      <div className="flex gap-7">
        <Link to="/" className="text-2xl font-bold hover:text-indigo-700 transition-colors">
          Home
        </Link>
        <Link to="/movies" className="text-2xl font-bold hover:text-indigo-700 transition-colors">
          Movies
        </Link>
        <Link to="/tv-shows" className="text-2xl font-bold hover:text-indigo-700 transition-colors">
          TV Shows
        </Link>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search a Movie"
          className="border border-[#414345] px-4 py-2 w-120 rounded-lg outline-none hover:border-indigo-500/70 focus:border-indigo-500/70 hover:placeholder:text-indigo-500/70 focus:placeholder:text-indigo-500/70  transition-colors"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-[#0C1117] hover:bg-indigo-700  px-3 py-2 rounded cursor-pointer transition-colors text-white">
          SEARCH
        </button>
      </form>
    </nav>
  );
}
