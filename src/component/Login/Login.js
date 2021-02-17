import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { connect } from "react-redux";
import { login_user_request } from "../../actions/user/index";
import { useForm } from "react-hook-form";
function Login(props) {
  const { login } = props;
  const { handleSubmit, register, errors } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitLogin = () => {
    login({email,password})
  };
  return (
    <div>
      <Header />
      <main>
        {/* Hero Area Start*/}
        <div className="slider-area ">
          <div className="single-slider slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>Login</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Area End*/}
        {/*================login_part Area =================*/}
        <section className="login_part section_padding ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="login_part_text text-center">
                  <div className="login_part_text_iner">
                    <h2>New to our Shop?</h2>
                    <p>
                      There are advances being made in science and technology
                      everyday, and a good example of this is the
                    </p>
                    <a href="#" className="btn_3">
                      Create an Account
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="login_part_form">
                  <div className="login_part_form_iner">
                    <h3>
                      Welcome Back ! <br />
                      Please Sign in now
                    </h3>
                    <form
                      className="row contact_form"
                    >
                      <div className="col-md-12 form-group p_star">
                        <label>Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Username"
                          value={email}
                          ref={register({
                            required: "Vui lòng điền Email",
                          })}
                        />
                        <span id="err">
                          {errors.email && errors.email.message} <br />
                        </span>
                      </div>
                      <div className="col-md-12 form-group p_star">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          value={password}
                          ref={register({
                            required: "Vui lòng điền password",
                          })}
                        />
                        <span id="err">
                          {errors.password && errors.password.message} <br />
                        </span>
                      </div>
                      <div className="col-md-12 form-group">
                        <button onClick={handleSubmit(submitLogin)} className="btn_3">
                          log in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================login_part end =================*/}
      </main>
      <Footer />
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  login(data) {
    dispatch(login_user_request(data));
  },
});
export default connect(null, mapDispatchToProps)(Login);
