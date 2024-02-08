import { DataStateEnum } from "../../config/data.state.enum";
import { InstanceSaas } from "../../shared/models/instance-saas.modal";

export interface InstanceSaasState{
    dataState: DataStateEnum,
    instanceSaas: InstanceSaas,
    instanceSaass: InstanceSaas[],
    messages: string[],
}
