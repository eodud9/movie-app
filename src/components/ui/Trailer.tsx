export default function Trailer({ videoKey }: { videoKey: string | undefined }) {
  return (
    <>
      <h1 className="font-bold text-5xl">예고편</h1>
      <div className="w-full  mx-auto p-10">
        {videoKey && (
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}`}
            allowFullScreen
            className="aspect-video w-full h-full"
          />
        )}
        {!videoKey && <p>해당 컨텐츠는 예고편을 지원하지 않습니다 🥲</p>}
      </div>
    </>
  );
}
