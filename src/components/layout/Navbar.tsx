import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-[#151B23] py-7 px-10 flex justify-between items-center">
      <div>
        <Link to="/" className="text-2xl font-bold hover:text-[#1b2634] transition-colors">
          Home
        </Link>
      </div>
      <div className="overflow-hidden">
        <input
          type="text"
          placeholder="Search a Movie"
          className="border border-[#414345] px-4 py-2 w-120 rounded-lg outline-none hover:border-[#595b5e] focus:border-[#595b5e] transition-colors"
        />
        <button className="bg-[#0C1117] hover:bg-[#1b2634]  px-3 py-2 rounded cursor-pointer transition-colors">
          Search
        </button>
      </div>
    </nav>
  );
}
