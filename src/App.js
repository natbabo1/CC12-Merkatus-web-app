import Modal from "./components/ui/Modal";
import Router from "./router/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Modal />
      <Router />;
      <ToastContainer autoClose="2000" theme="colored" />
    </>
  );
}

export default App;
