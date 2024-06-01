import { Link } from "react-router-dom";
import Wrapper from "../styles/wrappers/RegisterWrapper";
import RedButton from "../components/RedButton";

export default function Register() {
  return (
    <Wrapper>
      <div className="left-col">
        <div className="header-logo">
          <img src="../assets/logo.svg" />
          <p>Cartzilla</p>
        </div>
        <div>
          <div>
            <h1 className="welcome-text">Create an account</h1>
            <p className="create-new">
              I already have an account?
              <Link className="link" to="/login">
                {" "}
                Sign in
              </Link>
            </p>
          </div>
          <div className="inputs">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Repeat password" />
          </div>

          <RedButton text="Create an account" type="submit" />
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
