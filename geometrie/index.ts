class Point {
    constructor(
        x: number,
        y: number
    ){}
}
class Cercle {

    
    constructor(public rayon: number, centre: Point) {}


    aire() {
        return this.rayon **2 * Math.PI
    }

    perimetre() {
        return this.rayon *2 * Math.PI
    }
    
}

class Rectangle {


    constructor(
        public long:number,
        public larg: number,
        centre: Point) {
    }


    
    perimetre() {
        return (this.long + this.larg)*2
    }

    aire() {
        return (this.long * this.larg)
    }
}
