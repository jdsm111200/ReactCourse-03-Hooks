import { useContext } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  /**
   * * Regresa el contexto más cercano al componente
   * Ejemplo: si hay un UserContext.Provider en el árbol de componentes
   * y dentro tiene otro UserContext.Provider, el que se va a tomar es el más cercano
   * es decir el de dentro
   */
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const onLongin = () => {
    setUser({
      id: 1,
      name: "John Doe",
      email: "john.d@example.com",
    });

    navigate("/home");
  };

  return (
    <>
      <h1>Login</h1>
      <hr />
      <div className="card col-md-6 mx-auto">
        <div className="card-body">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="email" />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
          <button className="btn btn-primary mt-3" onClick={onLongin}>
            Login
          </button>
        </div>
      </div>
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
