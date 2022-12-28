import {Field, reduxForm} from "redux-form";
import {sendAuthorization} from "../../redux/auth-reducer";
import {Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validations";

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} />
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
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