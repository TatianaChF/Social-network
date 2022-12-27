import {Field, reduxForm} from "redux-form";
import {sendAuthorization} from "../../redux/auth-reducer";

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={"login"} component={"input"} />
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={"input"} />
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"} /> remember me
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
    const onSubmit = (formData) => {
        console.log(formData);
        props.sendAuthorization();
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={ onSubmit } />
        </div>
    )
}


export default Login;