import MailImage from "../../assets/success/Message.png";

type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999]">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* modal */}
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
          <div className="p-10 text-center">
            <div
              className="
    flex
    justify-center
    mb-8
  "
            >
              <img
                src={MailImage}
                alt="Success"
                className="
      w-[180px]
      h-auto
      object-contain
    "
              />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Message Received!
            </h2>

            <p className="text-gray-400 mb-8">
              Thanks for reaching out — we'll get back to you as soon as
              possible.
            </p>

            <button
              onClick={onClose}
              className="
                w-full
                h-14
                rounded-full
                bg-[#FF6B47]
                text-white
                font-semibold
              "
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
