import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";

//En Button.jsx se usan props convencioanales, en CardPizza.jsx se usan props via destructuring.

function App() {
  return (
    <>
      <MyNavbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
