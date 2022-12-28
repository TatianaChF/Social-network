import styles from "./FormsControl.module.css";
const FormsControl = ({input, meta, child, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={styles.formsControl + " " + (hasError ? styles.error : "")} >
                <div>{props.child}</div>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = ({input, meta, ...props}) => {
    return <FormsControl {...props}><textarea {...props} {...input} /></FormsControl>
}
export const Input = ({input, meta, ...props}) => {
    return <FormsControl {...props}><input {...props} {...input} /></FormsControl>
}