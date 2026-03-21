export default function Navbar() {
  return (
    <nav className="bg-[#151B23] text-center py-7">
      <input
        type="text"
        placeholder="Search a Movie"
        className="border border-[#414345] px-4 py-2 w-120 rounded-lg outline-none hover:border-[#595b5e] transition-colors"
      />
      <button className="bg-[#0C1117] hover:bg-[#1b2634]  px-3 py-2 ml-1 rounded cursor-pointer transition-colors">
        Search
      </button>
    </nav>
  );
}
