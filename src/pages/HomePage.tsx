import { dataNowPlaying, dataPopular, dataTopRated } from "../api/movie";

// data 확인용
console.log(dataNowPlaying);
console.log(dataPopular);
console.log(dataTopRated);

export default function HomePage() {
  return (
    <section className="flex flex-col p-20 gap-10">
      <div>
        <h1 className="text-4xl font-bold mb-5">Now Playing</h1>
        <ul className="flex gap-4 overflow-x-scroll">
          {dataNowPlaying.results.map((movie) => (
            <li
              key={movie.id}
              className="shrink-0 flex flex-col items-center gap-4 p-7 rounded bg-[#151B23] cursor-pointer hover:bg-amber-800 transition-all"
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="Movie Image"
                className="w-50 h-80"
              />
              <span className="max-w-11/12 text-center text-lg font-semibold">{movie.original_title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-5">Popular</h1>
        <ul className="flex gap-4 overflow-x-scroll">
          {dataPopular.results.map((movie) => (
            <li
              key={movie.id}
              className="shrink-0 flex flex-col items-center gap-4 p-7 rounded bg-[#151B23] cursor-pointer hover:bg-amber-800 transition-all"
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="Movie Image"
                className="w-50 h-80"
              />
              <span className="max-w-2/3 text-center text-lg font-semibold">{movie.original_title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-4xl font-bold">Top Rated</h1>
        <ul className="flex gap-4 overflow-x-scroll">
          {dataTopRated.results.map((movie) => (
            <li
              key={movie.id}
              className="shrink-0 flex flex-col items-center gap-4 p-7 rounded bg-[#151B23] cursor-pointer hover:bg-amber-800 transition-all"
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="Movie Image"
                className="w-50 h-80"
              />
              <span className="max-w-11/12 text-center text-lg font-semibold">{movie.original_title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
