import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../Auth/AuthService"
import { service } from "../services/config/service";

const Login = () => {
  const history = useNavigate();
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const [email, setemail] = useState("");
  const [mobno, setmobno] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);



  const handleLogin = ()=>{
    setloading(true);
    const authRequest = {
      userName : name,
      userPassword : password,
    };
    AuthService.login(name, password).then((res)=>{
      if(res==="success"){
        setloading(false);
        history("/");
      }
    }).catch(function(error){
      console.log(error);
      setloading(false);
      if(error.status ===401) console.log(error.message);
      else console.log("Something went wrong!!!");
    });
  };
  const handleSignUp = ()=>{
    setloading(true);
    const authRequest = {
      userName : name,
      userGender: gender,
      userEmail : email,
      userMobNo : mobno,
      userPassword : password,
    };
    service.register(authRequest).then((res)=>{
      if(res==="success"){
        setloading(false);
        history("/login");
      }
    }).catch(function(error){
      console.log(error);
      setloading(false);
      if(error.status ===401) console.log(error.message);
      else console.log("Something went wrong!!!");
    });
  };
    

  return (
    <div
      className="container"
      style={{ width: "500px", height: "500px", padding: "30px" }}
    >
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Login
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Register
          </button>
        </li>
      </ul>

      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          <form>
            <div className="text-center mb-3">
              <p>Sign in with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fa fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fa fa-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fa fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fa fa-github"></i>
              </button>
            </div>

            <p className="text-center">or:</p>

            <div className="form-outline mb-2">
              <label className="form-label" for="loginName">
                Email or username
              </label>
              <input type="name" id="loginName" className="form-control" value={name} onChange={(event)=>setname(event.target.value)}/>
            </div>

            <div className="form-outline mb-2">
              <label className="form-label" for="loginPassword">
                Password
              </label>
              <input
                type="password"
                id="loginPassword"
                className="form-control"
                value={password}
                onChange={(event)=>setpassword(event.target.value)}
              />
            </div>

            <div className="row mb-2">
              <div className="col-md-6 d-flex">
                <div className="form-check mb-3 mb-md-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="loginCheck"
                  />
                  <label className="form-check-label" for="loginCheck">
                    Remember me
                  </label>
                </div>
              </div>

              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-body">
                    <div className="modal-dialog" style={{ width: "300px" }}>
                      <div className="modal-content text-center">
                        <div className="modal-header h5 text-white bg-primary justify-content-center">
                          Password Reset
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body px-5">
                          <p className="py-2">
                            Enter your email address and we'll send you an email
                            with instructions to reset your password.
                          </p>
                          <label className="form-label" for="typeEmail">
                            Enter your Email
                          </label>
                          <div className="form-outline">
                            <input
                              type="email"
                              id="typeEmail"
                              placeholder="example@gmail.com"
                              className="form-control my-3"
                            />
                          </div>
                          <a href="#" className="btn btn-primary w-100">
                            Reset password
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <a>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Forgot Password
                  </button>
                </a>
              </div>
            </div>

            <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleLogin}>
              {loading?"Loading...":"Login"}
            </button>

            <div className="text-center">
              <p>Not a member? Register</p>
            </div>
          </form>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex="0"
        >
          <form>
            <div className="text-center mb-3">
              <p>Sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fa fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fa fa-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fa fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fa fa-github"></i>
              </button>
            </div>

            <p className="text-center">or:</p>

            <div className="form-outline mb-2">
              <label className="form-label" for="registerName">
                Name
              </label>
              <input type="text" id="registerName" className="form-control" onChange={(event)=>setname(event.target.value)}/>
            </div>

            <div className="form-outline mb-2">
              <label className="form-label" for="registerUsername">
                Gender
              </label>
              <input
                type="text"
                id="registerUsername"
                className="form-control"
                onChange={(event)=>setgender(event.target.value)}
              />
            </div>

            <div className="form-outline mb-2">
              <label className="form-label" for="registerEmail">
                Email
              </label>
              <input type="email" id="registerEmail" className="form-control" onChange={(event)=>setemail(event.target.value)}/>
            </div>

            <div className="form-outline mb-2">
              <label className="form-label" for="registerPassword">
                Password
              </label>
              <input
                type="password"
                id="registerPassword"
                className="form-control"
                onChange={(event)=>setpassword(event.target.value)}
              />
            </div>

            <div className="form-outline mb-2">
              <label className="form-label" for="registerRepeatPassword">
                Mobile No.
              </label>
              <input
                type="text"
                id="registerRepeatPassword"
                className="form-control"
                onChange={(event)=>setmobno(event.target.value)}
              />
            </div>

            <div className="form-check d-flex justify-content-center mb-2">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="registerCheck"
                checked
                aria-describedby="registerCheckHelpText"
              />
              <label className="form-check-label" for="registerCheck">
                I have read and agree to the terms
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-3" onClick={handleSignUp}>
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
