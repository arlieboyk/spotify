



const authenticate = (email: string, password: string) => {

    if (email && password) {


        return { email, password }
    }
    else return null
}