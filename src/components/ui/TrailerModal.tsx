import { useEffect, useRef, useState } from "react";

export default function TrailerModal({ videoKey, onClose }: { videoKey: string | undefined; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (dialog.current) dialog.current.showModal();

    // 다음 프레임에서 visible 적용
    requestAnimationFrame(() => {
      setIsVisible(true);
    });

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      dialog.current?.close();
      onClose();
    }, 300); // duration과 맞추기
  };

  // TrailerModal.tsx 수정 제안
  return (
    <dialog
      ref={dialog}
      className={`fixed m-auto rounded-2xl w-[95%] max-w-5xl bg-[#0C1116] overflow-hidden shadow-2xl
    transition-all duration-300 ease-out origin-center
    ${isClosing ? "opacity-0 scale-95" : isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      onCancel={(e) => {
        e.preventDefault();
        handleClose();
      }}
      onClick={(e) => {
        if (e.target === dialog.current) handleClose();
      }}
    >
      {/* 닫기 버튼: 우측 상단 여백 확보 및 호버 효과 */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-50 p-2 bg-black/20 rounded-full cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="aspect-video w-full bg-black">
        {videoKey ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="border-none"
          ></iframe>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">트레일러를 찾을 수 없습니다.</div>
        )}
      </div>
    </dialog>
  );
}
