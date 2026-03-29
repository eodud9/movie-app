export default function SearchSkeleton() {
  return (
    <div className="rounded w-full flex flex-col items-center justify-center p-5 md:p-10">
      <h1 className="rounded w-1/2 h-20 bg-[#151B23] animate-pulse mb-10"></h1>
      <ul className="rounded grid grid-cols-4 gap-15 justify-items-center algin-center">
        <li className="rounded w-50 h-80 bg-[#151B23] animate-pulse mb-5"></li>
        <li className="rounded w-50 h-80 bg-[#151B23] animate-pulse mb-5"></li>
        <li className="rounded w-50 h-80 bg-[#151B23] animate-pulse mb-5"></li>
        <li className="rounded w-50 h-80 bg-[#151B23] animate-pulse mb-5"></li>
        <li className="rounded w-50 h-80 bg-[#151B23] animate-pulse mb-5"></li>
        <li className="rounded w-50 h-80 bg-[#151B23] animate-pulse mb-5"></li>
        <li className="rounded w-50 h-80 bg-[#151B23] animate-pulse mb-5"></li>
        <li className="rounded w-50 h-80 bg-[#151B23] animate-pulse mb-5"></li>
      </ul>
    </div>
  );
}
