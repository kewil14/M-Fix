 import { InstanceSaas } from "./instance-saas.modal";
import { User } from "./user.modal";

export class SaasUser{
    constructor(
        public id?:number,
        public user?:User,
        public idEspaceSaas?:number,
        public instanceSaas?: InstanceSaas
    ){}
}