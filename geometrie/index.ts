interface Forme {
    centre: Point
    aire(): number
    perimetre() : number
}


class Point {
    constructor(
        public x: number,
        public y: number
    ){}
}
class Cercle implements Forme {

    
    constructor(public rayon: number, public centre: Point) {}


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
