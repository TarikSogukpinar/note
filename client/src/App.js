import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";
import SnackbarProvider from "react-simple-snackbar";

function App() {
  return (
    <div className="App">
      <SnackbarProvider>
        <Navigation></Navigation>
        <Dashboard></Dashboard>
      </SnackbarProvider>
    </div>
  );
}

export default App;
