const users_db = [

];

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    register() {
        const registeredUser = {
            name: this.name,
            email: this.email,
            password: this.password
        };

        users_db.push(registeredUser);

        return registeredUser;
    }
}

export default User;