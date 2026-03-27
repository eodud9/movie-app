export default function CardSkeleton() {
  return (
    <li className="shrink-0 w-70 p-7 rounded bg-[#151B23] cursor-pointer hover:bg-amber-800 hover:-translate-y-4 transition-all">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-lg w-full h-80 bg-[#0C1117] animate-pulse"></div>
        <div className="rounded-lg w-full h-5 text-center text-lg font-semibold bg-[#0C1117] animate-pulse delay-75"></div>
        <div className="rounded-lg w-full h-5 bg-[#0C1117] animate-pulse delay-100"></div>
      </div>
    </li>
  );
}
