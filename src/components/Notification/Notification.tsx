import { ToastContainer, toast } from "react-toastify";

export const Notification: React.FC = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      style={{ top: 0, color: "#254e58" }}
    />
  );
};

export const notify = (message: string) => {
  toast.info(message, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
