export class Livre {
    public quantite: number = 0
    public disponibilite = false
    constructor(
        public titre: string,
        public auteur: string,
        public annee: number,
    ){}}