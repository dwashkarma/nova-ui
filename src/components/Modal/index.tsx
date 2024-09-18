import { useEffect, useRef } from "react";

function Modal({
  children,
  open,
  onClose,
  className = "text-black",
}: {
  children?: React.ReactNode;
  open: true | false;
  onClose: () => void;
  className?: string;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  return (
    <div className="relative">
      {open && (
        <>
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <div
              ref={modalRef}
              className={`${className} bg-white flex flex-col items-start rounded-lg border shadow p-6 w-full max-w-md animate__animated animate__fadeIn animate__faster`}
            >
              <div>{children}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Modal;
