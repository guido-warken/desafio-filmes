// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  listFilmsApiUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=41f35c2bf35bf539136f4f344dd6b922&language=pt-br&sort_by=popularity.desc',
  listGenresApiUrl: 'https://api.themoviedb.org/3/genre/movie/list?api_key=41f35c2bf35bf539136f4f344dd6b922&language=pt-BR'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
