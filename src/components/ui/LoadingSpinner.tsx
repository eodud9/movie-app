export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center gap-5 text-2xl">
      <div className="w-8 h-8 border-4 border-[#1d2c3f] border-t-transparent rounded-full animate-spin"></div>
      <p className="font-bold">Loading...</p>
    </div>
  );
}
