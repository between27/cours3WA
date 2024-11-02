import { View } from "../framework/view/View";
import { User, UserProps } from "./User";


export class UserForm extends View<User, UserProps> {




  template() {
    return `
            <div>
                <h1>User Form</h1>
                <label>Nom</label>
                <input />
                <button class="set-name">Update Name</button>
                <button class="set-age">Random Age</button>
            </div>
        `;
  }

  onSetAge=() =>{
    this.model.setRandomAge()
  }

  onSetNameClick = () => {
    const input = this.parent.querySelector('input')
    this.model.set({name: input!.value})
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAge,
      "click:.set-name": this.onSetNameClick
    };
  }



  onButtonClick() {
    console.log("Bouton Cliqué");
  }


}
