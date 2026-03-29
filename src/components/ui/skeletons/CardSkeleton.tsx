export default function CardSkeleton() {
  return (
    <li className="shrink-0 w-70 p-7 rounded bg-[#151B23]">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-lg w-full h-80 bg-[#0C1117] animate-pulse"></div>
        <div className="rounded-lg w-3/4 h-5 bg-[#0C1117] animate-pulse delay-75"></div>
        <div className="rounded-lg w-1/2 h-5 bg-[#0C1117] animate-pulse delay-100"></div>
      </div>
    </li>
  );
}
