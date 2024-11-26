import { Livre } from "./Livre";

export class Emprunteur {
    public listeLivre: Livre[] = []
    constructor(
        public nom: string,
        public email: string,
        
    ) {}


    retourDuLivre(livreEmprunte: Livre) {
        if (!this.listeLivre.includes(livreEmprunte)) throw new Error("Vous n'avez pas emprunté ce livre");
        
        let tab = this.listeLivre.filter((livre)=>{
            return livre != livreEmprunte
        })
        livreEmprunte.quantite++
        this.listeLivre = tab

    }
}