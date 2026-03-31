import { type MovieDetailsResult, type TvshowsDetails } from "../../api/media";
import NoImg from "../../assets/no-image.png";

export default function Details({
  data,
  modalOpen,
}: {
  data: MovieDetailsResult | TvshowsDetails;
  modalOpen: () => void;
}) {
  const imgUrl = `https://image.tmdb.org/t/p/w780/${data.details.poster_path}`;
  return (
    <div className="bg-[#151B23] p-6 md:p-15 flex flex-col lg:flex-row gap-6 md:gap-10 mb-10 shadow-2xl rounded-xl overflow-hidden">
      <div className="w-full lg:w-1/2 relative group aspect-2/3 rounded-lg overflow-hidden mx-auto">
        <img
          src={data.details.poster_path ? imgUrl : NoImg}
          alt={data.details.title || data.details.name || ""}
          className="w-full h-full  object-center rounded-lg transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition-all duration-300 cursor-pointer"
          onClick={modalOpen}
        >
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-indigo-500 text-white text-3xl pl-1 shadow-lg">
            ▶
          </div>
        </div>
      </div>
      <section className="flex flex-col w-full items-center lg:items-start gap-4 md:gap-6 p-5 md:p-10">
        <h1 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight text-center lg:text-left">
          {data.details.title || data.details.name || ""}
        </h1>
        {data.details.tagline && (
          <p className="text-lg md:text-xl text-indigo-400 italic text-center lg:text-left">"{data.details.tagline}"</p>
        )}

        <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-6 text-sm text-gray-400 font-medium">
          <span className="bg-gray-800 py-1 px-3 rounded-full">
            {data.details.release_date || data.details.first_air_date}
          </span>
          <span className="bg-gray-800 py-1 px-3 rounded-full">⭐️ {data.details.vote_average.toFixed(1)}</span>
          <span className="bg-gray-800 py-1 px-3 rounded-full">
            {data.details.production_companies && "Produce by: " + data.details.production_companies[0].name}
          </span>
        </div>
        <hr className="w-full border-gray-800" />
        <p className="text-base md:text-lg leading-relaxed max-w-3xl text-gray-300 text-center lg:text-left">
          {data.details.overview || "상세 설명이 없습니다."}
        </p>
        <button
          onClick={() => {
            modalOpen();
          }}
          className="mt-4 px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold flex items-center gap-2 cursor-pointer transition-all rounded-xl hover:shadow-indigo-500/20 active:scale-95 shadow-lg"
        >
          ▶ 트레일러 보기
        </button>
      </section>
    </div>
  );
}
