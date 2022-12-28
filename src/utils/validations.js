export const required = value => {
    if (value) return undefined;
    else return "Field is required!";
}
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return "Text length is greater than maximum length";
    return undefined;
}