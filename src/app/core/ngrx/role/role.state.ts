import { DataStateEnum } from "../../config/data.state.enum";
import { GroupRoleItemDto } from "../../shared/dto/group-role-item-dto.modal";
import { RoleItem } from "../../shared/models/role-item.module";
import { Role } from "../../shared/models/role.module";

export interface RoleState{
    dataState: DataStateEnum,
    role: Role,
    roleItem: RoleItem,
    roles: Role[],
    groupRoles: GroupRoleItemDto[],
    items: RoleItem[],
    messages: string[],
}
