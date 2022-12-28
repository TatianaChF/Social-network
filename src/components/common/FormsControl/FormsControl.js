import style from "./FormsControl.module.css";
const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={style.formsControl}>
            <textarea {...props} {...input} className={style.error}/>
        </div>
    )
}

export default Textarea;