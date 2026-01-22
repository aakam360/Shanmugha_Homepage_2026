//External Lib Import
import toast from "react-hot-toast";

class ToastMessage {
  static successMessage(msg) {
    return toast.success(msg, {
      duration: 4000,
      position: "top-right",
    });
  }
  static errorMessage(msg) {
    return toast.error(msg, {
      duration: 4000,
      position: "top-right",
    });
  }
  static LoadMessage(msg) {
    return toast.loading(msg, {
      duration: 3000,
      position: "top-right",
      
    });
  }
  static CustomMessage(msg) {
    return toast.success(msg, {
      duration: 4000,
      position: "top-right",
      style: {background:'#FF4D4A', color:'#ffff'},
    });
  }
}

export default ToastMessage;
