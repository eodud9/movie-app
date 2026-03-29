import CardSkeleton from "./CardSkeleton";

export default function SliderSkeletion() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-48 h-8 bg-[#151B23] animate-pulse ml-2 rounded"></div>
      <ul className="flex gap-4 overflow-x-hidden px-5 py-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </ul>
    </div>
  );
}
