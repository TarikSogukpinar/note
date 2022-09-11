import "bootstrap/dist/css/bootstrap.min.css";
import 'react-notifications/lib/notifications.css';
import './App.css';
import Dashboard from "./components/Dashboard";
import Container from "react-bootstrap/esm/Container"
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Container className="main">
        <Dashboard></Dashboard>
      </Container>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
