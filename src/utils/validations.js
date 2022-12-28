export const required = value => {
    if (value) return undefined;
    else return "Field is required!";
}
export const maxLength30 = value => {
    if (value <= 30) return undefined;
    else return "The length of the post should not be more than 30 characters!";
}