import { Link } from "react-router-dom";
import Wrapper from "../styles/wrappers/LoginWrapper";
import RedButton from "../components/RedButton";

export default function Login() {
  return (
    <Wrapper>
      <div className="left-col">
        <div className="header-logo">
          <img src="../assets/logo.svg" />
          <p>Cartzilla</p>
        </div>
        <div>
          <div>
            <h1 className="welcome-text">Welcome Back</h1>
            <p className="create-new">
              Do not have an account?{" "}
              <Link className="link" to="/register">
                Create an account
              </Link>
            </p>
          </div>
          <div className="inputs">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="checkbox-div">
            <div>
              <input type="checkbox" />
              <p>Remember for 30 days</p>
            </div>

            <p>Forgot Password?</p>
          </div>
          <RedButton text="Sign in" type="submit" />
          <div className="login-options">
            <p>Or continue with</p>
            <div>
              <div>
                <img src="../assets/google-icon.svg" />
                Google
              </div>
              <div>
                <img src="../assets/facebook-icon.svg" />
                Facebook
              </div>
              <div>
                <img src="../assets/apple-icon.svg" />
                Apple
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>All right reserver. Made by Kuxala</p>
        </div>
      </div>
      <div className="right-col">
        <img src="../assets/login-image.png" className="col-image" />
      </div>
    </Wrapper>
  );
}
