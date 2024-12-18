import { Sortable } from "./Sortable";

export class NumberCollection implements Sortable{
    constructor(public data: number[]){}

    get length() {
        return this.data.length
    }

    compare(leftIndex: number, rightIndex: number) {
        return this.data[leftIndex] > this.data[rightIndex]
    }

    swap(leftIndex: number, rightIndex: number) {
        const leftHand = this.data[leftIndex];
          this.data[leftIndex] = this.data[rightIndex];
          this.data[rightIndex] = leftHand;
    }
}