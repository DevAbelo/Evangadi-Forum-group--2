// Assigned to EDOimport { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import classes from "./login.module.css"; // Import your CSS file
import { useContext, useRef, useState } from "react";
import { AppState } from "../../Context/DataContext";
function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const {user,setUser} = useContext(AppState);
  async function handleSubmit(e) {
    e.preventDefault();
    const emailValue = emailRef.current.value.trim();
    const passwordValue = passwordRef.current.value;

    // Form validation
    if (!emailValue || !passwordValue) {
      setErrorMessage("Please provide all required information.");
      return;
    }

    try {
      const response = await axios.post("/users/login", {
        email: emailValue,
        password: passwordValue,
      });
      if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          setUser(response.data.username);
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "Something went wrong!");
      } else {
        setErrorMessage("Network error. Please try again later.");
      }
    }
  }

  return (
    <section className={classes.signIn_container}>
      <h1>Login to your account</h1>
      <p>
        Don't have an account?
        <a class="lnk-toggler" data-panel="panel-signup" href="#">
          Create a new account?
        </a>
      </p>
      {errorMessage && <p className={classes.error_message}>{errorMessage}</p>}
      <form onSubmit={handleSubmit} className={classes.signIn_form}>
        <div className={classes.label_in}>
          {/* <label>Email: </label> */}
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter your email"
            required
          />
          {/* </div> */}
          {/* <div> */}
          {/* <label>Password: </label> */}
          <input
            ref={passwordRef}
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <p class="forgotPwd">
          <a class="lnk-toggler" data-panel="panel-forgot" href="#">
            Forgot password ?
          </a>
        </p>
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
}

export default SignIn;
