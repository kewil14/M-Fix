import { Address } from "./address.modal";
import { InstanceConfig } from "./instance-config.modal";

export class InstanceSaas{
    constructor(
        public id?: number,
        public code?: string,
        public status?: string,
        public libelle?: string,
        public description?: string,
        public address?: Address,
        public config?: InstanceConfig
    ) {}
}