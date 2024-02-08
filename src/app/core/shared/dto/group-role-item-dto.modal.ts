import { RoleItem } from "../models/role-item.module";

export class GroupRoleItemDto {
    constructor(
        public group?: string,
        public items?: Array<RoleItem>
    ) {}
}