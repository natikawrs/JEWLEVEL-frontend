import Router from "./route/Router";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App w-[1300px]">
      <Router />
      <ToastContainer autoClose="2500" theme="colored" position="top-center" />
    </div>
  );
}

export default App;
