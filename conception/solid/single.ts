class User{}

// class UserService{
//     addUser(user: User){
//         console.log("ajout d'un user")
//         this.sendWelcomeEmail(user)
//         this.saveToDB(user)
//     }
//     sendWelcomeEmail(user: User){
//         console.log("Envoi d'un Email")
//     }
//     saveToDB(user:User){
//         console.log("Sauvegarde dans la DB");
        
//     }
// }

class UserService {

}


class UserRepository{
    save(user: User) {
        console.log("sauvegarde");
        
    }
}

class EmailService {
    sendWelcomeEmail() {
        console.log("Envoi Email");
    }
    sendResetPassword() {
        console.log("Envoi Email");
    }
}