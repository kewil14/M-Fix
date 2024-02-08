import { InstanceSaas } from "../models/instance-saas.modal";
import { SaasUser } from "../models/saas-user.modal";

export class SaasDto {
    constructor(
        public saasUser?: SaasUser,
        public instanceSaas?: InstanceSaas
    ) {}
}