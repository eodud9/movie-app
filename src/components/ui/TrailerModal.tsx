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

  return (
    <dialog
      ref={dialog}
      className={`fixed m-auto rounded-xl w-full max-w-4xl bg-[#0C1116] backdrop:transition-all backdrop:duration-300
  ${isClosing ? "backdrop:bg-black/0" : "backdrop:bg-black/70  "} transition-all duration-300 origin-center
  ${isClosing ? "opacity-0 scale-95" : isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      onCancel={(e) => {
        e.preventDefault();
        handleClose();
      }}
      onClick={(e) => {
        if (e.target === dialog.current) handleClose();
      }}
    >
      <button onClick={handleClose} className="absolute top-4 right-4 text-white text-xl z-10 cursor-pointer">
        ✕
      </button>
      <div className="max-w-5xl mx-auto aspect-video">
        {videoKey && (
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
            allowFullScreen
            allow="autoplay; encrypted-media"
            className=" w-full h-full rounded-lg"
          />
        )}
        {!videoKey && <p>해당 컨텐츠는 예고편을 지원하지 않습니다 🥲</p>}
      </div>
    </dialog>
  );
}
