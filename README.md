# angular-all Notes

## misc

- install cli `npm install -g @angular/cli`
- initialize a projects (2 ways): 
    - `npm init @angular myApp`
    - `ng new my-app`

- help
    - `ng --help`
    - `ng generate --help`
    - `ng build --help`

- serve
    - `ng serve`

- angular file:
    - `angular.json`

- tree-shaking
    - is a concept that means: remove all not required when building

- each folder inside `app` is a component
    - Component help `ng g component --help` 

- Create a component `ng g c heroes/hero`
    - this creates `hero.component.css` // styles appplied only to the component
    - and creates `hero.component.html`
    - and creates `hero.component.spec.ts` // creates the select `app-hero` (can be changes to `app-heroes-hero`)
    - and creates `hero.component.ts`
    - registers the component, under `app.module.ts` (`@NgModule` at `declarations`)
- create another component `ng g c heroes/list`
    
## scripts

- `ng: ng`
- `start: ng serve -o`
- `build: ng build`
- `watch: ng build --watch --configuration development`
- `test: ng test`

### two way data binding

- a change in a template, will also change the public property
- the idea is prioritize the one-way data binding

### private modified in a component

- When using provate, the method cannot be used outside of the class


## Modern Tools for efficient development

- Nodejs
- VsCode
- Chrome
- Postman
- Git
- Docker Desktop
- ...
- Mongo Compass

- Angular CLI [https://angular.io/cli]
    - Install `npm install -g @angular/cli`
        


- VsCode plugins:
    - [https://marketplace.visualstudio.com/items?itemName=Angular.ng-template]
    - Angular Snippets [https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2]

- Source: [https://gist.github.com/Klerith/4816679624c1cb528f8e05d902fd7cff]

