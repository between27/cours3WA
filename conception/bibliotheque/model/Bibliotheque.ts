import { Emprunteur } from "./Emprunteur";
import { Livre } from "./Livre";
import { TransactionEmprunt } from "./TransactionEmprunt";

type Emprunt = [Livre, Emprunteur, number]

export class Bibliotheque {
    public listeLivre: Livre[] = []
    public listeEmprunteur: Emprunteur[] = []
    public listeEmprunts: TransactionEmprunt[] = []



    ajouterUnLivre(livre: Livre){
        livre.quantite +=1
        livre.disponibilite = true
        
        if (!this.listeLivre.includes(livre)) {
            this.listeLivre.push(livre)
        }
    }

    enregistrerEmprunteur(emprunteur : Emprunteur){
        this.listeEmprunteur.push(emprunteur)
    }

    enregistrerEmprunt(livre: Livre, emprunteur: Emprunteur){
        this.listeEmprunts.push(new TransactionEmprunt(livre,emprunteur))
    }
 }