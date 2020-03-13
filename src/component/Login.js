import React from "react";
import './Login.css'

const Login = (props) => {
    return (
        <form className="login" onSubmit={props.onLogin}>
            <div className="form-group">
                <label htmlFor="login" className="i-input-label">Login</label>
                <input
                    id="login"
                    className="form-control i-input"
                    type="text"
                    placeholder="Login"
                    onChange={props.onChangeLogin}
                >
                </input>
            </div>
            <div className="form-group">
                <label htmlFor="password" className="i-input-label">Password</label>
                <input
                    id="password"
                    className="form-control i-input"
                    type="password"
                    placeholder="Password"
                    onChange={props.onChangePswd}
                >
                </input>
            </div>
            <div className="text-center">
                <button className="btn btn-primary" type="submit">Log In</button>
            </div>
        </form>
    );
};
Login.defaultProps = {
    onChangeLogin: () => {},
    onChangePswd: () => {},
    onLogin: () => {}
}

export default Login;