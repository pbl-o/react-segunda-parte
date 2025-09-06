import { useState } from "react";

const Register = () => {
  //estados de input:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //estados de error
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleValidation = (e) => {
    e.preventDefault();

    if (password.length < 6 || password !== confirmPassword || (!email.trim() || !password.trim() || !confirmPassword.trim())) {
      setError(true);
      password.length < 6 && setErrorMessage("tu contraseña debe ser mayor a 6 caracteres");
      password !== confirmPassword && setErrorMessage("tu contraseña debe coincidir con la confirmación");
      (!email.trim() || !password.trim() || !confirmPassword.trim()) && setErrorMessage("Todos los campos deben ser rellenados");
      return;
    } 

    setError(false);
    alert('Succesfully Registered')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  };

  return (
    <>
      <h2 className="text-center pt-3">Register</h2>
      {error ? (
        <p className="text-center bg-danger text-light fw-bolder border w-50 rounded mx-auto">
          {errorMessage}
        </p>
      ) : (
        ""
      )}
      <form
        action=""
        onSubmit={handleValidation}
        className="border rounded p-3 mx-auto d-flex flex-column justify-conntent-center align-items-center w-50 my-4"
      >
        {/* email inout */}
        <div className="form-group p-4 d-flex flex-column">
          <label htmlFor="">Email</label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }} className="form-control" value={email}
            //required
          />
        </div>
        {/* password input */}
        <div className="form-group p-4 d-flex flex-column">
          <label htmlFor="">Password</label>
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }} className="form-control" value={password}
            //required
          />
        </div>
        {/* password confirm */}
        <div className="form-group p-4 d-flex flex-column">
          <label htmlFor="">Password confirmation</label>
          <input
            type="text"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }} className="form-control" value={confirmPassword}
            //required
          />
        </div>

        <button className="btn btn-dark col-6 " type="submit">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Register;
