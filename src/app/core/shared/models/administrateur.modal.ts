import { User } from "./user.modal";

export class Administrateur{
    constructor(
        public id?:number,
        public user?:User,
        public idEspaceSaas?:number
    ){}
}