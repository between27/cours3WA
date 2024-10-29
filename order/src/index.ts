import { CharactersCollection } from "./CharactersCollection";
import { NumberCollection } from "./NumberCollection";
import { Sorter } from "./Sorter";
const numberCol = new NumberCollection([10,3,-5,0])
const charCol = new CharactersCollection("drasgon")
const sorter = new Sorter(numberCol)
sorter.sort()
console.log(sorter.collection)
const sorterC = new Sorter(charCol)
sorterC.sort()
console.log(charCol.data)