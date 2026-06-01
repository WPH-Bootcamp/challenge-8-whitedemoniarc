import ErrorImage from "../../assets/success/mail-error/ErrMessage.png";

type ErrorModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ErrorModal = ({ isOpen, onClose }: ErrorModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative flex items-center justify-center min-h-screen px-4">
        <div
          className="
            w-full
            max-w-[500px]
            bg-[#050B14]
            border
            border-[#172033]
            rounded-[24px]
            overflow-hidden
          "
        >
          {/* Header */}
          <div className="bg-[#050B14] py-8 flex justify-center">
            <img
              src={ErrorImage}
              alt="Error"
              className="w-[170px] object-contain"
            />
          </div>

          {/* Body */}
          <div className="bg-black px-10 py-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong.
            </h2>

            <p className="text-gray-400 mb-8 leading-relaxed">
              We couldn't send your message. Please try again or check your
              connection.
            </p>

            <button
              onClick={onClose}
              className="
                w-full
                h-14
                rounded-full
                bg-[#FF6B47]
                hover:bg-[#ff5a33]
                text-white
                font-semibold
                transition-all
              "
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
