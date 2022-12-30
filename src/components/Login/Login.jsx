import {Field, reduxForm} from "redux-form";
import {logout, sendAuthorization} from "../../redux/auth-reducer";
import {Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validations";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import style from "../common/FormsControl/FormsControl.module.css";

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input} type={"password"}
                           validate={[required]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
                </div>
                {
                    props.error &&
                    <div className={style.someInputError}>
                        {props.error}
                    </div>
                }
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

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {sendAuthorization, logout})(Login);