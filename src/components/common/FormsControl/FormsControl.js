const Textarea = ({input, meta, ...props}) => {
    return (
        <div>
            <textarea {...props} {...input} />
        </div>
    )
}

export default Textarea;