import { View } from "../framework/view/View";
import { User, UserProps } from "./User";


export class UserShow extends View<User, UserProps> {

    eventsMap(): { [key: string]: () => void; } {
        return {}
    }

    template(): string {
        return `
            <div>
                <h2>name: ${this.model.get("name")}</h2>
                <h2>age: ${this.model.get("age")}</h2>
            </div>
        `
    }
}