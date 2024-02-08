import { User } from "../../shared/models/user.modal";
import { Administrateur } from "../../shared/models/administrateur.modal";
import { DataStateEnum } from "../../config/data.state.enum";
import { SaasUser } from "../../shared/models/saas-user.modal";

export interface ProfileState {
  dataState: DataStateEnum,
  user: User,
  saasUser: SaasUser,
  administrateur: Administrateur,
  isLogin: boolean,
  messages: string[]
}
