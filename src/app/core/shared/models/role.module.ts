import { RoleItem } from "./role-item.module";

export class Role{
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public type?: string,
        public idReference?: number,
        public roles?:Array<RoleItem>
    ){}
}
