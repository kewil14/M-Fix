import { DataStateEnum } from "../../config/data.state.enum";
import { Jeux } from "../../shared/models/jeux.model";

export interface JeuxState{
    dataState: DataStateEnum,
    game: Jeux,
    games: Jeux[],
    messages: string[],
}
