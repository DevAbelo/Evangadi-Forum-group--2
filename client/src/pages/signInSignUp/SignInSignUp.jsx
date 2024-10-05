import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="signUp">
      <div className="signUp--container">
        <h4 className="signUp--title">Join the network</h4>

        <p className="signUp--subtitle">
          Already have an account? <a href="#">Sign in</a>
        </p>

        <form className="signUp__form">
          <input type="text" placeholder="username" required />
          <div>
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <div>
            <p>
              I agree to the
              <a href="">privacy policy</a> and
              <a href=""> terms of service</a>.
            </p>
          </div>
          <button>Agree and Join</button>
          <h4>
            <a href="">Already have an account?</a>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
