import Modal from "./components/ui/Modal";
import { ToastContainer } from "react-toastify";
import Spinner from "./components/ui/Spinner";
import Router from "./router/Router";

function App() {
  return (
    <>
      <Spinner />
      <Modal />
      <Router />;
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
