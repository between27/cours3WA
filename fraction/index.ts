class Fraction {
  private _numerateur;
  private _denominateur;

  constructor(numerateur: number, denominateur: number) {
    this._numerateur = numerateur;
    this._denominateur = denominateur;
  }

  public get numerateur() {
    return this._numerateur;
  }

  public get denominateur() {
    return this._denominateur;
  }

  public set numerateur(value: number) {
    this._numerateur = value;
  }

  set denominateur(value: number) {
    if (value === 0) throw new Error("Le dénominateur est différent de 0");

    this._denominateur = value;
  }

  division() {
    return this.numerateur / this.denominateur;
  }

  addition(fraction: Fraction) {
    const num =
      this.numerateur * fraction.denominateur +
      this.denominateur * fraction.numerateur;
    const den = this.denominateur * fraction.denominateur;
    return new Fraction(num, den);
  }
}
// inférence de type  quand on met une valeur à un attribut, celui-ci detecte automatiquement le type

const tiers = new Fraction(1, 3);
const quart = new Fraction(1, 4);

console.log(tiers.addition(quart));
