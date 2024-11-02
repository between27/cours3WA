import { User } from "../../user/User";
import { HasEvent } from "../interfaces/HasEvent.interface";
import { HasId } from "../interfaces/HasId.interface";
import { Model } from "../model/Model";

export abstract class View<T extends Model<P>, P extends HasId > {
    constructor(
        public parent: Element,
         public model: T
        ) {
        this.bindModel()
      }

      abstract eventsMap(): { [key: string]: () => void } 
      abstract template(): string

      bindModel (){
        this.model.on("change", ()=> this.render())
      }

      bindEvents(fragment: DocumentFragment) {
        const eventsMap = this.eventsMap();
    
        for (let eventKey in eventsMap) {
          const [eventName, selector] = eventKey.split(":");
          fragment.querySelectorAll(selector).forEach((element) => {
            element.addEventListener(eventName, eventsMap[eventKey]);
          });
        }
      }

      render() {
        this.parent.innerHTML =""
        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.parent.append(templateElement.content);
      }
}