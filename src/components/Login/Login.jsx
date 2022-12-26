import {reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <div>
            <form>
                <div>
                    <input placeholder={"Login"}/>
                </div>
                <div>
                    <input placeholder={"Password"}/>
                </div>
                <div>
                    <input type={"checkbox"} /> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);
const Login = (props) => {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm />
        </div>
    )
}


export default Login;