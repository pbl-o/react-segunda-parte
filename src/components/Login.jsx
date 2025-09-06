import { useState } from "react";


const Login = () => {

    //estados:
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage ] = useState('')

    const mailStored = 'email'
    const storedPass = 'thepassword'

    const handleValidation = (e) =>{

        e.preventDefault()

        if(mailStored !== email || storedPass !== password || password.length < 6 ){
            setError(true)
            mailStored !== email && setErrorMessage('email incorrect')
            storedPass !== password && setErrorMessage('contraseña incorrecta')
            password.length < 6 && setErrorMessage('contraseña demasiado corta')
            return
        }

        setError(false);
        alert('Login Succesful')
        setEmail('')
        setPassword('')



    }

    //Copia de register para adptar y probar visualización condicionada

  return (
    <>
       <h2 className="text-center pt-3">Login</h2>
             {error ? (
        <p className="text-center bg-danger text-light fw-bolder border w-50 rounded mx-auto">
          {errorMessage}
        </p>
      ) : (
        ""
      )}

      <form action="" onSubmit={handleValidation} className="border rounded p-3 mx-auto d-flex flex-column justify-conntent-center align-items-center w-50 my-4">
        {/* email inout */}
        <div className="form-group p-4 d-flex flex-column">
          <label htmlFor="">Email</label>
          <input type="text" onChange={(e)=>{
            setEmail(e.target.value)
          }} required className="form-control" value={email}/>
        </div>
        {/* password input */}
        <div className="form-group p-4 d-flex flex-column">
          <label htmlFor="">Password</label>
          <input type="text" onChange={(e)=>{
            setPassword(e.target.value)
          }} required className="form-control" value={password}/>
        </div>


        <button className="btn btn-dark col-6 " type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Login
