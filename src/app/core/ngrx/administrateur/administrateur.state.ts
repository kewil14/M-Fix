import { DataStateEnum } from "../../config/data.state.enum";
import { Administrateur } from "../../shared/models/administrateur.modal";

export interface AdministrateurState{
    dataState: DataStateEnum,
    administrateur: Administrateur,
    administrateurs: Administrateur[],
    messages: string[],
}
