import React, { useState } from "react";
import Classes from "./signUp.module.css";
import { BiHide, BiShow } from "react-icons/bi";
import axios from "../../Api/axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ visible }) => {
  const { setShow } = visible;
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!userName || !firstName || !lastName || !email || !password) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post("users/register", {
        username: userName,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      });
      console.log("User Registerd")
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      if (error.response) {
      console.log(error.response.data)
        setError(error.response.data.message); // Show server error message
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };
  return (
    <div className={Classes.signup_container}>
      <h2>Join the network</h2>
      <p style={{color:"red",textAlign:"center"}}>{error}</p>
      <div className={Classes.login_link}>
        Already have an account?{" "}
        <Link onClick={() => setShow(false)}>Sign in</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            size="65"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            style={{ borderColor: error && !userName ? "red" : "" }}
          />
        </div>
        <div className={Classes.inputfirst}>
          <div>
            <input
              size="27"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={{ borderColor: error && !firstName ? "red" : "" }}
            />
          </div>

          <div>
            <input
              className={Classes.lastName}
              size="26"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              style={{ borderColor: error && !lastName ? "red" : "" }}
            />
          </div>
        </div>
        <div>
          <input
            size="65"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ borderColor: error && !email ? "red" : "" }}
          />
        </div>
        <div className={Classes.password_field}>
          <input
            size="65"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ borderColor: error && !password ? "red" : "" }}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={Classes.toggle_password}
          >
            {showPassword ? <BiShow /> : <BiHide />}
          </button>
        </div>
        <div className={Classes.paragrap}>
          <p>
            I agree to the
            <a href="https://www.evangadi.com/legal/privacy/">
              {" "}
              privacy policy{" "}
            </a>
            and{" "}
            <a href="https://www.evangadi.com/legal/terms/">terms of service</a>
            .
          </p>
        </div>
        <button type="submit">Agree and Join</button>
      </form>

      <div className={Classes.login_link}>
        <a href="/login">Already have an account?</a>
      </div>
    </div>
  );
};

export default SignUp;
