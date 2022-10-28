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
      <ToastContainer autoClose="2000" theme="colored" />
    </>
  );
}

export default App;
