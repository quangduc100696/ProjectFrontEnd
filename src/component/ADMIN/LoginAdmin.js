import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { login_admin_request } from "../../actions/user/index";
import { useForm } from "react-hook-form";
function LoginAdmin(props) {
  const history = useHistory();
  const { login } = props;
  const { handleSubmit, register, errors } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitLogin =async () => {
   await login({email,password})
  };
  return !sessionStorage.getItem("emailAdmin") ? (
    <div className="container">
      <div className="col-lg-12 col-md-12">
        <div className="login_part_form">
          <div className="login_part_form_iner">
            <h3>
              Welcome Back ! <br />
              Please Sign in now
            </h3>
            <form className="row contact_form">
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
                {/* <button className="btn_3">log in</button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <p>Ban da login</p>
      {history.push("/admin/home")}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
    login(data) {
      dispatch(login_admin_request(data));
    },
  });
export default connect(null,mapDispatchToProps) (LoginAdmin);
