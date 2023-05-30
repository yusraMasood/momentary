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
export const getMessage = json => {
  switch (typeof json) {
    case 'string': {
      return json;
    }
    case 'object': {
      if (Array.isArray(json)) {
        var data = json[0];
        return getMessage(data);
      } else {
        if (json.errors) {
          const data = json.errors;
          if (typeof data === 'object') {
            const values = Object.values(data);
            return getMessage(values);
          } else {
            return getMessage(data);
          }
        } else {
          if (json.message) {
            return getMessage(json.message);
          } else if (json.error) {
            return getMessage(json.error);
          } else {
            return message;
          }
        }
      }
    }
    default: {
      return message;
    }
  }
};

export const Toast = new ToastMessage();