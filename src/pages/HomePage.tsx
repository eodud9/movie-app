export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col gap-10 justify-center items-center italic">
      <h1 className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text font-extrabold text-transparent text-9xl">
        Movie App
      </h1>
      <p className="text-xl bg-linear-to-r from-violet-500 to-pink-500 bg-clip-text font-semibold text-transparent">
        Every great story begins with a single frame.
      </p>
    </div>
  );
}
