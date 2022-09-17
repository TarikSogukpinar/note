import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications/lib/notifications.css";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Container from "react-bootstrap/esm/Container";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
