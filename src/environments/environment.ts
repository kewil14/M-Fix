// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// let serverAdress = 'http://95.111.255.47:9095'
let serverAdress = 'https://rms-backend.connecttechnology.io'

export const environment = {
  production: false,
  baseUrlCustomers: `${serverAdress}/api`,
  // baseUrlFile: 'http://95.111.255.47:9001/document/api',
  baseUrlFile: 'https://gateway.connecttechnology.io/document-api/document/api',

  // ceci est provisoire en attendant de passer par mon backend pour avoir la liste des jeux
  baseUrlGame: 'https://gateway.connecttechnology.io/loto-service-games',
  baseUrlPaiement: 'http://95.111.255.47:8282/interswitch-api'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
