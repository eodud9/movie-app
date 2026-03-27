import CardSkeleton from "./CardSkeleton";

export default function SliderSkeletion() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5"></h1>
      <ul className="flex gap-4 overflow-x-scroll px-5 py-10">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </ul>
    </div>
  );
}
