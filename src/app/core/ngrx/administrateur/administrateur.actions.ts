import { createAction, props } from "@ngrx/store";
import { Administrateur } from "../../shared/models/administrateur.modal";

//actions for manage local data
export const erreurAdministrateurs = createAction('[Administrateur] authentification/administrateur/erreurs', props<{messages: string[]}>());
export const setAdministrateur = createAction('[Administrateur] authentification/administrateur/setAdministrateur', props<{ administrateur: Administrateur}>());
export const deleteAdministrateur = createAction('[Administrateur] authentification/administrateur/deleteAdministrateur', props<{ administrateur: Administrateur }>());
export const addAdministrateur = createAction('[Administrateur] authentification/administrateur/addAdministrateur', props<{ administrateur: Administrateur}>());
export const loadAdministrateur = createAction('[Administrateur] authentification/administrateur/loadAdministrateur', props<{ administrateurs: Array<Administrateur>}>());

// actions for manage remote data
export const findAdministrateurId = createAction('[Administrateur] authentification/administrateur/findAdministrateurId', props<{id: any}>());
export const findAdministrateurs = createAction('[Administrateur] authentification/administrateur/findAdministrateurs');
export const findByToken = createAction('[Administrateur] authentification/administrateur/findByToken');
export const createAdministrateur = createAction('[Administrateur] authentification/administrateur/createAdministrateur', props<{ administrateur: Administrateur, idRole: any }>());
