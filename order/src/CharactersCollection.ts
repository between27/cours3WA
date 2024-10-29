import { Sortable } from "./Sortable"

export class CharactersCollection implements Sortable {
    constructor(public data: string) {}

    get length() {
        return this.data.length
    }


    compare(leftIndex: number, rightIndex: number){
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    }

    swap(leftIndex:number, rightIndex:number) {
        const characterList =this.data.split("")

        const leftHand = characterList[leftIndex]
        characterList[leftIndex] = characterList[rightIndex]
        characterList[rightIndex] = leftHand

        this.data = characterList.join("")
    }

}