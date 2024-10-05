// Assigned to EDO
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const emailDom = useRef();
  const passwordDom = useRef();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;

    if (!emailValue || !passValue) {
      alert("please provide all required information");
      return;
    }
    try {
      await axios.post("/users/register", {
        email: emailValue,
        password: passValue,
      });
      alert("login SuccessFull");
      navigate("/");
    } catch (error) {
      alert("something went wrong!");
      // console.log(error.response);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Email: </span>
          <input ref={emailDom} type="email" placeholder="email" />
        </div>
        <br />
        <div>
          <span>Password: </span>
          <input ref={passwordDom} type="password" placeholder="password" />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default Login;
