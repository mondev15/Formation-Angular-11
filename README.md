## Installations && Configurations
 
# le Tests unitaires

  ## Remplacement de Karma/Jasmin par Jest

  npm remove karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter

  rm src/karma.conf.js src/test.ts

  ## Installation de Jest
  npm install -D jest @angular-builders/jest @types/jest
  ## Mise à jour de la configuration Typescript
  ### Dans le fichier src/tsconfig.spec.json
   {
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "module": "commonjs",
    "outDir": "../out-tsc/spec",
    "types": ["jest"]
  },
  "files": ["polyfills.ts"],
  "include": ["**/*.spec.ts", "**/*.d.ts"]
}
### Dans le fichier tsconfig.json
"compilerOptions": {
    ...
    "types": ["jest"]
}

### Dans le fichier angular.json remplacer le build angular Karma par Jest:

"projects": {
    ...
    "[your-project]": {
         ...
         "architect": {
                ...
                "test": {
                          "builder": "@angular-builders/jest:run"

  ### Ajouter un fichier permettant la surcharge de la configuration de Jest, src/jest.config.js
  const {defaults} = require('jest-config');
 
 
module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"]
}

ET voilà la configuration est terminée… c’était quand même simple 😉

Il ne reste plus qu’à exécuter vos tests.

ng test
  ## Jest
  https://charith-hettiarachchi.medium.com/why-use-jest-over-karma-for-angular-testing-b56ffa82f8

  https://blog.ineat-conseil.com/2019/04/angular-remplacer-karma-jasmine-par-jest/
  ## Lancer tous les tests
   ng test
  ## Lancer un test 
  ng test --innclude='**/nav.component.spec.ts'
  ## Lancer un test en ChromeHeadless
  ng test --browsers ChromeHeadless  --innclude='**/nav.component.spec.ts'
# Documetations
- https://rxjs-dev.firebaseapp.com/guide/observable
- https://blog.bitsrc.io/incremental-vs-virtual-dom-eb7157e43dca
- https://www.positronx.io/angular-7-ngif-else-then-work-like-a-pro/
- https://github.com/FortAwesome/angular-fontawesome

## Installation

NodeJS; AngularCli
-ng --version
-ng add @ng-bootstrap/ng-bootstrap
-ng add ng add @fortawesome/angular-fontawesome@0.8.2
-npm install moment
-npm install dayjs
-npm install webpack-bundle-analyzer
-npm install -g json-server
## plugins

angular essentials; sass; todolist; tabnine
- gitlens pour l'historique du code

## Tests Unitaires
- Karma : utiliser pour faire les tests unitaires
- Jest: permet d'aller plus loin dans les test et il est moins lourd
- Karma et Jasmine sont ajouté par défault lors de la création d'un projet angular
- polifills : émultation pour les versions antérieurs d'angular
- aot: précompilcation qui permet à une application de démarrer rapidement
- angular.json : configuration pour l'exécution de l'application angular(script, prod)

## Module UI
Créer un module ui dans une application angular

## Icons
Créer un module contenant les components(un component pour chaque icone)

## ajout d'un composant dans les exports
ng g component footer --export

## Binding
Event Binding: avec les paranthèse
ng-content: il n'est jamais rendu dans le DOM, il ne faut pas mettre les elements clickable dans le ng-content

## Lazy Loading
chargement des pages : voir documentation

## optimisatiion du chargement
- dans angular.json: ajouter l'option aot: true
- lazyloading : charger uniquement les modules nécessaires (core)
le reste en lazy loading
- preloading strategy
- webpack-bundle-analyzer : pour mésurer les sizes des librairies utilisées (moment.js vs dayjs)

## Définitions des composants dans une application
- Créer des composants stupides : ce sont des composants statiques réutilisables dans toutes l'application et qui ne comportent aucune logique
 Exemple: Tableau, Bouttons, Formulaire, ...

 ## Principe de Pareto et les maquettes fonctionnelles
 - 20% de fonctionnalités répondent à 80% des besoins
 - Exemple Voiture, Ordinateur, ....
 - Capitaliser sur les composants réutilisables pour gagner du temps
 - Répérer les gabarits de page qui ont une utilité identique
 - Répérer les components stupides
 - Exemple d'utilisation : Adobe, les logiciels sont faciles à utiliser si on en connait un

 ## Appel de fonction dans une page HTML
  - Eviter d'appeller les fonctions dans les pages html qui seront appelées plusieurs fois à cause des lifecycle
  - Utiliser plutôt les pipes: un pipe est une classe

## Directives
utilisées par des éléments html <td myDirective> par exemple
  @HostBinding('class') public tdClassName!: string;
   -> ajouter une propriété class à mon Td dans un composant parent

## Sharing data between child and parent
- @Input() and @Output() give a child component a way to communicate with its parent component. 
- @Input() allows a parent component to update data in the child component. 
- Conversely, @Output() allows the child to send data to a parent component.
# Crm2AtosMai

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
#   c r m 2 - a t o s - m a i 
 
 
