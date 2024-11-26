"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const characterList = this.data.split("");
        const leftHand = characterList[leftIndex];
        characterList[leftIndex] = characterList[rightIndex];
        characterList[rightIndex] = leftHand;
        this.data = characterList.join("");
    }
}
exports.CharactersCollection = CharactersCollection;
