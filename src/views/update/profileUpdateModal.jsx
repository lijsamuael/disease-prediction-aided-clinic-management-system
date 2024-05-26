const Modal = ({ onClose, children }) => {
    return (
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <div
            className="fixed inset-0 transition-opacity"
            onClick={onClose}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="z-20 overflow-hidden bg-white rounded-lg shadow-xl">
            <div className="w-full px-10 py-2">{children}</div>
          </div>
        </div>
      </div>
    );
  };
export default Modal;
  