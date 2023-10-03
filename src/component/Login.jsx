import React from "react";

const Login = () => {
  return (
    <div className="container" style={{width:"500px", height:"500px", padding:"30px"}}>
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Login</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Register</button>
  </li>
  </ul>

<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
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
        <input type="email" id="loginName" className="form-control" />
        <label className="form-label" for="loginName">Email or username</label>
      </div>

      <div className="form-outline mb-2">
        <input type="password" id="loginPassword" className="form-control" />
        <label className="form-label" for="loginPassword">Password</label>
      </div>

      <div className="row mb-2">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="form-check mb-3 mb-md-0">
            <input className="form-check-input" type="checkbox" value="" id="loginCheck"  />
            <label className="form-check-label" for="loginCheck"> Remember me </label>
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center">
          <a href="#!">Forgot password?</a>
        </div>
      </div>
        
      <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

      <div className="text-center">
        <p>Not a member? Register</p>
      </div>
    </form>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
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
        <input type="text" id="registerName" className="form-control" />
        <label className="form-label" for="registerName">Name</label>
      </div>

      <div className="form-outline mb-2">
        <input type="text" id="registerUsername" className="form-control" />
        <label className="form-label" for="registerUsername">Username</label>
      </div>

      <div className="form-outline mb-2">
        <input type="email" id="registerEmail" className="form-control" />
        <label className="form-label" for="registerEmail">Email</label>
      </div>

      <div className="form-outline mb-2">
        <input type="password" id="registerPassword" className="form-control" />
        <label className="form-label" for="registerPassword">Password</label>
      </div>

      <div className="form-outline mb-2">
        <input type="password" id="registerRepeatPassword" className="form-control" />
        <label className="form-label" for="registerRepeatPassword">Repeat password</label>
      </div>

      <div className="form-check d-flex justify-content-center mb-2">
        <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
          aria-describedby="registerCheckHelpText" />
        <label className="form-check-label" for="registerCheck">
          I have read and agree to the terms
        </label>
      </div>

      <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
    </form>
  </div>
  
</div>
</div>  );
};

export default Login;
