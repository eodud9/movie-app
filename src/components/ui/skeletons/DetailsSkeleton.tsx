export default function DetailsSkeleton() {
  return (
    <div className="bg-[#151B23] p-15 flex flex-col md:flex-row gap-10 mb-10 rounded">
      <div className="w-full md:w-1/2 aspect-2/3 rounded-lg bg-[#0C1117] animate-pulse"></div>

      <section className="w-full flex flex-col gap-8 p-10">
        <div className="w-full h-16 bg-[#0C1117] animate-pulse rounded"></div>
        <div className="w-2/3 h-8 bg-[#0C1117] animate-pulse rounded"></div>

        <div className="w-full flex gap-4">
          <div className="w-24 h-8 bg-[#0C1117] animate-pulse rounded-full"></div>
          <div className="w-24 h-8 bg-[#0C1117] animate-pulse rounded-full"></div>
          <div className="w-24 h-8 bg-[#0C1117] animate-pulse rounded-full"></div>
        </div>
        <div className="w-full h-40 bg-[#0C1117] animate-pulse rounded mt-4"></div>
      </section>
    </div>
  );
}
