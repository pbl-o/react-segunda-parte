import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

/* 

Como no está indicado el conectar los botones con las secciones de la app, coloqué este "selector" para observar los contenidos requeridos y aislados.
  
Solución provisoria 
  
Cambiar el contenido de la variable visible a 'home' para llevar al componente home, 'register' para ir al componente register y 'login' para el componente login.
 
Para el Login, el email "almacenado" es: 'email' y la contraseña: 'thepassword'

 */

function App() {
  let visible = "register";

  return (
    <>
      <MyNavbar />
      {visible === "home" && <Home />}
      {visible === "register" && <Register />}
      {visible === "login" && <Login />}
      <Footer />
    </>
  );
}

export default App;
