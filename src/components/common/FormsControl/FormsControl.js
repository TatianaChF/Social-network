import styles from "./FormsControl.module.css";
const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={styles.formsControl + " " + styles.error} >
            <textarea {...props} {...input} />
        </div>
    )
}

export default Textarea;