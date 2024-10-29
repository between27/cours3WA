import { CharactersCollection } from "./CharactersCollection";
import { NumberCollection } from "./NumberCollection";
import { Sortable } from "./Sortable";

export class Sorter {
  constructor(public collection: Sortable) {}

  sort() {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j,j+1)) {
         this.collection.swap(j,j+1)
        }
      }
    }
  }
}
