import {environment} from '../../../environments/environment';

const API_CUSTOMER = environment.baseUrlCustomers;
const API_INSTANCE_SAAS = environment.baseUrlInstanceSaas;
const API_GAMES = environment.baseUrlGame

export const API_URLS = {
  CUSTOMERS_URL: API_CUSTOMER,
  INSTANCE_SAAS_URL: API_INSTANCE_SAAS,
  GAME_URL: API_GAMES,
};


export const APP_LINK = {
  LINK_AUTH_LOGIN: '/auth/login',
  LINK_AUTH_RESET_PASSWORD: '/auth/reset-password',
  LINK_AUTH_NEW_PASSWORD: '/auth/new-password',
  LINK_DASHBOARD_SAAS: '/saas',
  LINK_DASHBOARD_ADMIN: '/admin',
  LINK_LISTE_SAAS: '/admin/dashboard/saas'
}