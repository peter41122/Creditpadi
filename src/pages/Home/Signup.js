import React from "react";
import { useNavigate } from "react-router-dom";
import googleImg from "../../assets/images/auth/google.png";
import phoneImg from "../../assets/images/auth/phone.png";

function Signup() {
  const navigate = useNavigate();

  const handleClick = (route, data) => {
    navigate(route, data);
  };

  return (
    <div className="authframe">
      <div className="signup-content row g-0">
        <div className="left-panel d-none d-md-block col-6 col-md-6">
          <div className="brand my-auto">
            <a className="navbar-brand" href="/">
              Creditpadi
            </a>
          </div>
        </div>
        <div className="right-panel col-12 col-md-6">
          <div className="container">
            <div className="row g-3 justify-content-end mx-1 my-auto">
              <div className="col-auto">
                <label className="col-form-label">Already a member?</label>
              </div>
              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-default rounded-pill px-4"
                  onClick={() => handleClick("/signin")}
                >
                  Sign In
                </button>
              </div>
            </div>
            <div className="container p-5 m-auto">
              <form>
                <div className="my-5">
                  <h3 className="page-title text-center">
                    Sign Up for an account
                  </h3>
                </div>
                <div className="d-grid gap-4 social-sign-btn-group">
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-default"
                  >
                    <img
                      className="img-fluid float-start"
                      src={googleImg}
                      alt="GoogleLogo"
                      width={35}
                    />
                    <span className="m-auto">Sign Up with Google</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-default"
                  >
                    <img
                      className="img-fluid float-start"
                      src={phoneImg}
                      alt="PhoneLogo"
                      width={30}
                    />
                    Sign Up with Phone Number
                  </button>
                </div>
                <div className="hr-area my-5">
                  <hr />
                  <span className="hr-area-context">
                    Or create an account with your email
                  </span>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-5">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="firstname"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-7">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="lastname"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="Email address"
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-default btn-lg rounded-pill px-4 w-100"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Signup };
