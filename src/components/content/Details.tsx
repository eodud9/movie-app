import { type MovieDetailsResult, type TvshowsDetails } from "../../api/media";

export default function Details({
  data,
  modalOpen,
}: {
  data: MovieDetailsResult | TvshowsDetails;
  modalOpen: () => void;
}) {
  return (
    <div className="bg-[#151B23] p-15 flex gap-10 mb-10 shadow-2xl rounded-lg">
      <div className="w-1/2 relative group">
        <img
          src={
            data.details.poster_path
              ? `https://image.tmdb.org/t/p/original/${data.details.poster_path}`
              : "../src/assets/no-image.png"
          }
          alt="Movie Image"
          className={data.details.poster_path ? "w-full h-full object-cover rounded-lg" : "w-80 h-80"}
        />
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition cursor-pointer"
          onClick={modalOpen}
        >
          ▶
        </div>
      </div>
      <section className="flex flex-col w-full items-center gap-8 p-10">
        <h1 className="text-5xl font-extrabold uppercase">{data.details.title || data.details.name}</h1>
        <p className="text-xl text-gray-400 italic">{data.details.tagline}</p>
        <div className="flex gap-6 text-sm text-gray-300">
          <span>{data.details.release_date || data.details.first_air_date}</span>
          <span>⭐️ {data.details.vote_average.toFixed(1)}</span>
          <span>{data.details.production_companies && "Produce by: " + data.details.production_companies[0].name}</span>
        </div>
        <hr className="border-gray-700" />
        <p className="text-base leading-relaxed max-w-2xl">{data.details.overview}</p>
        <button
          onClick={() => {
            modalOpen();
          }}
          className="px-5 py-3 bg-indigo-500 hover:bg-indigo-600 cursor-pointer transition-all rounded-lg"
        >
          ▶ 트레일러 보기
        </button>
      </section>
    </div>
  );
}
