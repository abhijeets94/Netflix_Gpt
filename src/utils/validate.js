export const checkValidData = (name, email, password) => {
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isNameValid) return "Enter a valid name"
    if(!isEmailValid) return "Email not valid";
    if (!isPasswordValid) return "Invalid Password"

    return null;

}