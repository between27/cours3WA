import { Emprunteur } from "./Emprunteur";
import { Livre } from "./Livre";



export class TransactionEmprunt {
    public dateEmprunt = new Date().toUTCString()
    public dateRetour = ""
    
    constructor(
        public livreEmprunte: Livre,
        public emprunteur: Emprunteur,
    ){
        const retour = new Date()
        let today =retour.getDate()
        retour.setDate(today + 14)
        this.dateRetour = retour.toUTCString()
        if (!this.livreEmprunte.disponibilite && this.livreEmprunte.quantite == 0) throw new Error(`${this.livreEmprunte.titre} n'est pas disponible`);
        if (this.emprunteur.listeLivre.length === 3) throw new Error("Vous ne pouvez emprunter que trois livres");
        this.emprunteur.listeLivre.push(this.livreEmprunte)
        this.livreEmprunte.quantite--
        this.livreEmprunte.disponibilite= false
    }
    



    



}