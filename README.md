# CountryApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Web server production

Run `https://salazarcg.github.io/appRouting/home` to view the website.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## New Scripts to create the project for production

Run `npm run build:github` to call the script and save it to githun for production.

"scripts": {
    "build:href": "ng build --base-href ./",
    "build:github": "npm run delete:docs && npm run build:href && npm run copy:dist",
    "delete:docs": "del docs",
    "copy:dist": "copyfiles dist/country-app/browser/* ./docs -f"
  },

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
