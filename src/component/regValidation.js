function Validation(values) {
    let error = {}

    //Email pattern that detects without space and letter.
    const email_pattern = /^[^\s]+@[^\s@]+\.[^\s@]+$/
    //Password pattern that detects atleast 1 digit, 1 small letter, 1 capital letter, minimum of 8 letters.
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === "") {
        error.email = "Name should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email didn't match"
    } else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Password didn't match"
    } else {
        error.password = ""
    }
    
    return error;
}

export default Validation;