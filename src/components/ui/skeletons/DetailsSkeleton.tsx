export default function DetailsSkeleton() {
  return (
    <div className="bg-[#151B23] p-15 flex gap-10 mb-10">
      <div className="w-180 h-150 rounded bg-[#0C1117] animate-pulse"></div>
      <section className="w-full flex flex-col items-center justify-center gap-8 p-10">
        <h1 className="w-full h-20 bg-[#0C1117] animate-pulse font-extrabold text-7xl uppercase"></h1>
        <p className="w-full h-15 bg-[#0C1117] animate-pulse text-3xl font-semibold"></p>
        <p className="w-full flex gap-10">
          <div className="p-3  w-1/3 bg-[#0C1117] animate-pulse"></div>
          <div className="p-3  w-1/3 bg-[#0C1117] animate-pulse"></div>
          <div className="p-3  w-1/3 bg-[#0C1117] animate-pulse"></div>
        </p>
        <p className="w-full bg-[#0C1117] animate-pulse h-1/2 text-xl text-center font-light"></p>
      </section>
    </div>
  );
}
