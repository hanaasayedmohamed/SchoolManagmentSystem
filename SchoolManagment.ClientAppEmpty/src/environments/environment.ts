// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://localhost:5001/',
  generateTokenURL:  "Oauth/Token",
  liststudentsURl: "Students/GetAllStudents?",
  addnewStudent: "/Students",
  token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIyZTcwMWU2Mi0wOTUzLTRkZDMtOTEwYi1kYzZjYzkzY2NiMGQiLCJVc2VyTmFtZSI6ImhhbmFhIiwiRW1haWwiOiJhZG1pbkBhYnAuaW8iLCJSb2xlIjoiYWRtaW4iLCJuYmYiOjE2MTU5NDE0OTEsImV4cCI6MTYxNTk0NTA5MSwiaWF0IjoxNjE1OTQxNDkxfQ.U9v4FSGy1RgTFLjv3nntCV_6ZsVK-G-vP5HA3huAhdA"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
