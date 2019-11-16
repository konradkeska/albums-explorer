import { PositionOptions, toast } from "react-toastify";
import "./toasts.scss";

const getToast = (
  type: "danger" | "success" | "secondary",
  autoClose = 3500,
) => ({
  autoClose,
  bodyClassName: "toast__font",
  className: `toast--${type}`,
  closeButton: false,
  position: "bottom-right" as PositionOptions,
  progressClassName: `toast--${type}__progress-bar`,
});

const onError = (message = "An error occured.. 😟", autoClose = 3500) => {
  toast(message, getToast("danger", autoClose));
};

const onSuccess = (message = "Success! 👌", autoClose = 3500) => {
  toast(message, getToast("success", autoClose));
};

const onInform = (message = "Some message. 💁", autoClose = 3500) => {
  toast(message, getToast("secondary", autoClose));
};

export { onError, onSuccess, onInform };
