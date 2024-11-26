import { Bibliotheque } from "./model/Bibliotheque";
import { Emprunteur } from "./model/Emprunteur";
import { Livre } from "./model/Livre";

const bibliotheque = new Bibliotheque
const naruto = new Livre("Naruto", "Kishimoto",2002)
const dragonBall = new Livre("Dragon ball", "Toriyama",1990)
console.log(dragonBall)
bibliotheque.ajouterUnLivre(naruto)
bibliotheque.ajouterUnLivre(naruto)
bibliotheque.ajouterUnLivre(dragonBall)
console.log( bibliotheque.listeLivre);
const john = new Emprunteur("John Doe","jonh@az.com")
const jane = new Emprunteur("Jane Doe","jane@az.com")
bibliotheque.enregistrerEmprunteur(john)
bibliotheque.enregistrerEmprunteur(jane)
console.log(bibliotheque.listeEmprunteur);
bibliotheque.enregistrerEmprunt(naruto, john)
bibliotheque.enregistrerEmprunt(dragonBall,john)
console.log(bibliotheque.listeLivre)
console.log(bibliotheque.listeEmprunteur)
console.log(bibliotheque.listeEmprunts)

john.retourDuLivre(naruto)
console.log(john.listeLivre)


