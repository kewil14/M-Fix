
import { Role } from "./role.module";

export class UserFin{
    constructor(
        public accountNonExpired?: boolean,
        public accountNonLocked?: boolean,
        public authorities?: [],
        public credentialsNonExpired?: boolean,
        public enabled?: boolean,
        public image?: string,
        public isActive?: boolean, 
        public password?: string, 
        public preferredCurrency?: string, 
        public roles?: Role[], 
        public userCode?: string, 
        public userEmail?: string,
        public userNames?: string, 
        public firstname?: string, 
        public lastname?: string, 
        public userPassword?: string,  
        public userPhoneNumber?: string,  
        public username?: string,        
    ){}
}