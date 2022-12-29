import {Field, reduxForm} from "redux-form";
import {logout, sendAuthorization} from "../../redux/auth-reducer";
import {Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validations";
import {connect} from "react-redux";

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input}  type={"password"}
                           validate={[required]} />
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
        props.sendAuthorization(formData.email, formData.password, formData.rememberMe);
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={ onSubmit } />
        </div>
    )
}


export default connect(null, {sendAuthorization, logout})(Login);