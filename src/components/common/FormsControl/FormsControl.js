import styles from "./FormsControl.module.css";
import {Field} from "redux-form";
import {required} from "../../../utils/validations";
const FormsControl = ({input, meta, child, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={styles.formsControl + " " + (hasError ? styles.error : "")} >
                <div>{props.children}</div>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormsControl {...props}><textarea {...restProps} {...input} /></FormsControl>
}
export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormsControl {...props}><input {...restProps} {...input} /></FormsControl>
}

export const createField = (placeholder, name, component, validate, props = {}, text = "") => {
    return (
        <div>
            <Field placeholder={placeholder} name={name}
                   component={component} validate={validate} {...props} /> {text}
        </div>
        )
}