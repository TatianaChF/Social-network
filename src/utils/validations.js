const required = value => {
    if (value) return undefined;
    else return "Field error!";
}