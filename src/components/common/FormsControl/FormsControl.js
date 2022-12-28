import styles from "./FormsControl.module.css";
export const Textarea = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={styles.formsControl + " " + (hasError ? styles.error : "")} >
                <textarea {...props} {...input} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Input = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={styles.formsControl + " " + (hasError ? styles.error : "")} >
                <input {...props} {...input} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}