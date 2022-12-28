import styles from "./FormsControl.module.css";
const FormsControl = ({input, meta, child, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={styles.formsControl + " " + (hasError ? styles.error : "")} >
                {props.child}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = ({input, meta, ...props}) => {

    return <FormsControl><textarea {...props} {...input} /></FormsControl>

}
export const Input = ({input, meta, ...props}) => {
    return <FormsControl><input {...props} {...input} /></FormsControl>
}