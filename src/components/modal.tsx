import { useEffect, useRef, useState } from "react";

function ModalComponent({
  label = "Modal",
  children,
  icon,
}: {
  label?: string;
  children?: React.ReactNode;
  icon?: any;
}) {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <div className="relative">
      <button
        onClick={toggleModal}
        className="bg-sky-500 text-white p-2 rounded-md shadow-md hover:bg-sky-600 transition-colors"
      >
        Open
      </button>
      {showModal && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-60"></div>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <div
              ref={modalRef}
              className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md animate__animated animate__fadeIn animate__faster"
            >
              <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4">
                <h3 className="text-lg font-semibold">{label}</h3>
                <button
                  onClick={toggleModal}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {icon ? icon : "✖️"}
                </button>
              </div>
              <div>{children}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ModalComponent;
