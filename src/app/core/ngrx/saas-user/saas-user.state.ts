import { DataStateEnum } from "../../config/data.state.enum";
import { SaasUser } from "../../shared/models/saas-user.modal";

export interface SaasUserState{
    dataState: DataStateEnum,
    saasUser: SaasUser,
    saasUsers: SaasUser[],
    messages: string[],
}
