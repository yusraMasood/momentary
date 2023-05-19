import ReactNativeToastMessage from "react-native-toast";

function ToastMessage() {
  this.success = message => {
    if (typeof message !== "string") {
      message = "An error occured. Please try again later";
    }
    ReactNativeToastMessage.show(message);
  };

  this.error = message => {
    if (typeof message !== "string") {
      message = "An error occured. Please try again later";
    }

    ReactNativeToastMessage.show(message);
  };
}

export const Toast = new ToastMessage();