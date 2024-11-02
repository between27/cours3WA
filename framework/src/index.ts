import { Collection } from "./framework/Collection";
import { User, UserProps } from "./user/User";
import { UserForm } from "./user/UserForm";
import { UserShow } from "./user/UserShow";


const rootElement  = document.getElementById("root")
const john = User.build({id:"12", name:"John", age: 20})

const  userShow= new UserShow(rootElement!, john)

const userForm = new UserForm(rootElement!,john)
userShow.render()