export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col gap-10 justify-center items-center italic bg-[#0b0f13] ">
      <h1 className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text font-extrabold text-transparent text-4xl md:text-9xl tracking-tighter p-1">
        MEDIA QUERY
      </h1>
      <p className="text-md md:text-xl bg-linear-to-r from-pink-400 to-indigo-400 bg-clip-text font-medium text-transparent">
        Every great story begins with a single frame.
      </p>
    </div>
  );
}
