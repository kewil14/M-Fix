import { CategoryEnum, StatusEnum } from "../../config/data.state.enum";

export class Jeux {
    constructor(
        public id?: number,
        public name?: string,
        public status?: StatusEnum ,
        public category?: CategoryEnum,
        public description?: string,
    ){}
}
