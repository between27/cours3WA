class Helper {
    static randint(inf: number, sup: number): number {
        return Math.floor(Math.random() * (sup - inf + 1) + inf);
      }

    static monthInFiveYearCB() {
        let month = new Date().getMonth().toString()
        if (parseInt(month) < 10) month = "0"+month
        const year = new Date().getFullYear()+5
        return month + "/" + year.toString()
    }
}


class CB {
constructor(public numero: string,
    public CVV: number,
    public exp: string){}
}

class Compte{
    constructor(
        public id: number,
        public solde: number = 0,
        public carte?: CB
    ){}

    retirer(somme : number) {
        if (somme < this.solde) this.solde -= somme
        else throw new Error ("Solde Insuffisant")
    }

    ajouter(somme: number) {
        this.solde += somme
    }
}

class Client {
constructor(
    public nom :string,
    public prenom: string,
    public salaire: number,
    public ville: string,
    public compte?: Compte
){}

}

class Banque {
    public liste: Array<Client> = []

    constructor(
        public nom: string,
    ){}

    private genereNumeroDeCompte() {
        let chaine =''
        for (let i =0; i<=6;i++) {
            chaine+= Helper.randint(0,9).toString()
        }
        return parseInt(chaine)
    }

    private genereNumeroDeCB() {
        let chaine = ''
        for (let i=0;i <=18;i++) {
            if (i=== 4 || i === 9 || i === 14 ) chaine += " "
            else chaine+= Helper.randint(0,9).toString()
        }
        return chaine
    }

    private genereNumeroCVV() {
        let chaine = ''
        for (let i=0; i<3; i++) {
            chaine+= Helper.randint(0,9).toString()
        }
        return parseInt(chaine)
    }
    

    ajouterClient(client: Client) {
        if (client.compte) throw new Error("Ce client a déja un compte") 
        this.liste.push(client)
        const compte = new Compte(this.genereNumeroDeCompte(),0)
        client.compte = compte
    }

    demandeCB(client: Client) {
        if (client.compte) throw new Error("Ce client n'a pas de compte")
        if (client.compte!.carte) throw new Error( "Ce client a déja une CB")
        const carte = new CB(this.genereNumeroDeCB(),this.genereNumeroCVV(),Helper.monthInFiveYearCB())
        client.compte!.carte = carte
    }
}

const john = new Client("John", "Doe", 1500, "Nancy")
const jane = new Client("Jane", "Doe", 2000, "Strasbourg")
console.log(john)
const sg = new Banque("SG")
console.log("liste de clients : " +sg.liste)
sg.ajouterClient(john)
console.log(sg.liste)
john.compte?.ajouter(500)
console.log(john)
sg.demandeCB(john)
console.log(john)
john.compte?.retirer(200)
sg.ajouterClient(jane)
console.log(sg.liste)


