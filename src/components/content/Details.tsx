import { type MovieDetailsResult, type TvshowsDetails } from "../../api/media";

export default function Details({ data }: { data: MovieDetailsResult | TvshowsDetails }) {
  return (
    <div className="bg-[#151B23] p-15 flex gap-10 mb-10">
      <img
        src={`https://image.tmdb.org/t/p/original/${data.details.poster_path}`}
        alt="Movie Image"
        className="w-130 h-150 rounded"
      />
      <section className="flex flex-col items-center gap-8 p-10">
        <h1 className="font-extrabold text-7xl uppercase">{data.details.title || data.details.name}</h1>
        <p className="text-3xl font-semibold">{data.details.tagline}</p>
        <p className="w-full flex gap-10">
          <span className="w-1/3 text-center">{data.details.release_date || data.details.first_air_date}</span>
          <span className="w-1/3 text-center">⭐️・{data.details.vote_average.toFixed(1)}</span>
          <span className="w-1/3 text-center">
            {data.details.production_companies && "Produce by: " + data.details.production_companies[0].name}
          </span>
        </p>
        <p className="w-full text-xl text-center font-light">{data.details.overview}</p>
      </section>
    </div>
  );
}
