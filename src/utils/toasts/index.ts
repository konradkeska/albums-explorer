import { PositionOptions, toast } from "react-toastify";

import eng from "lang/eng";

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

const onError = (message = `${eng.ERROR_OCCURED}.. 😟`, autoClose = 3500) => {
  toast(message, getToast("danger", autoClose));
};

const onSuccess = (message = `${eng.SUCCESS}! 👌`, autoClose = 3500) => {
  toast(message, getToast("success", autoClose));
};

const onInform = (message = `${eng.SOME_MESSAGE}. 💁`, autoClose = 3500) => {
  toast(message, getToast("secondary", autoClose));
};

export { onError, onSuccess, onInform };
