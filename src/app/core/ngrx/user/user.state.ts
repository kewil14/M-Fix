import { DataStateEnum } from "../../config/data.state.enum";
import { User } from "../../shared/models/user.modal";

export interface UserState{
    dataState: DataStateEnum,
    user: User,
    users: User[],
    messages: string[],
}
