import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

//En Button.jsx se usan props convencioanales, en CardPizza.jsx se usan props via destructuring.

function App() {

  /* Como no está indicado el conectar los botones con las secciones de la app,
  coloqué este "selector" para observar los contenidos requeridos y aislados.
  
  //Solución provisoria 
  
  Cambiar el contenido de "visible" a home para llevar al componente home, register para ir al componente register y login para el componente login.
 */
  let visible = 'register'

  return (
    <>
      <MyNavbar />
     { visible === 'home' ? <Home /> : ''} 
     { visible === 'register' ? <Register /> : ''}
     { visible === 'login' ? <Login /> : ''} 
      <Footer />

     
    </>
  );
}

export default App;
