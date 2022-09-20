import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Dashboard></Dashboard>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
