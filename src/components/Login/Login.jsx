import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <div>
            <form>
                <div>
                    <Field placeholder={"Login"} component={"input"} />
                </div>
                <div>
                    <Field placeholder={"Password"} component={"input"} />
                </div>
                <div>
                    <Field type={"checkbox"} component={"input"} /> remember me
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