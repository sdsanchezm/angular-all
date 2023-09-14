# Documentation



## Initialization

- Install ng clie
    - `npm install -g @angular/cli`
- Initialize app
    - `npm init @angular gifs-app` (didn't work)
        - `ng new gifs-app` (did work)
- to serve
    - `ng serve`

- the idea with the FS (File System) is to create reusable components, modularized and single Responsability

- Create the gifs module:
    - `ng g m gifs`
    - this creates a folder named "gifs" and the module in it named "gifs.module.ts"

- Create the shared module:
    - `ng g m shared`
    - this creates a folder named "shared" and the module in it named "shared.module.ts"

- Add the imports to the app.module.ts file
    - 
    ```ts
    imports: [
        BrowserModule,
        GifsModule,
        SharedModule
    ],
    ```
    - and 
    ```ts
    import { GifsModule } from './gifs/gifs.module';
    ```
- Generate a new component into the shared folder:
    - cli
        - `ng g component shared/components/sidebar`
            - this will create a compelte module (css, html, spec.ts, ts) files
    - it is also possible manually create folders and files

- Update the parent module to include the new module created:
    - "shared/shared.module.ts" file:
    ```ts
      exports: [
        SidebarComponent
    ]
    ```

- in the gifs folder, create the folders:
    - **components** 
    - **services** - services in general
    - **helpers** - additional methods or functions that will assist generally
    - **pages** - pages is an space that group multiple components (for example will group search-bar (a discrete component) and results (a discrete component))

- create the home component into the pages folder:
    - `ng g component gifs/pages/home`
    - change the name of the component to "home-page" to all files (not required but nice to organize)
    - Update parent module (gifs.module.ts) in this case to:
        - declarations
        - export
    - After export it in the parent module, then update app.component.html and include the selector
        - `<gifs-home-page>`

- Manually create a new component into the `components` folder, named `search-box`
    - create the folder `components/search-box`
    - create the file `search-box.component.ts`
    - update "gifs.module.ts" and include the declaration of the `SearchBoxComponent`
    - then, update the `app.component.ts` to include the selector

- Create another component:
    - `ng g component gifs/components/cardList`
    - ensure that the parent component, HomePageComponent includes the tag `app-card-list`
    - ensure that the parent module `gifs.module.ts` includes the `CardListComponent` in the declaration


## Nice form behaviour

- handle the enter and data in forms
```html
<input
    type="text"
    class="form-control"
    placeholder="Search..."
    (keyup.enter)="searchTag(txtTagInput.value)"
    #txtTagInput
>
```

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'gifs-search-box',
    templateUrl: 'search-box.component.html'
})

export class SearchBoxComponent {

    constructor() { }

    searchTag(newTag: string) {
        console.log({newTag});
    }
}

```

## Creating a service

- create the file `gifs.service.ts` into "gifs/services"
- looks liek this:
```ts
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {
    constructor() { }

}
```

- the snippet `@Injectable({providedIn: 'root'})` is for the service to have access to all components and viceversa


## consumig a service in a component

- here, the service was injected, created a public property and created a getter so the property can be used in the template
    ```ts
    export class SidebarComponent {

        constructor(private gifsService: GifsService ) {}
        get gifs() {
            return this.gifsService.tagsHistory;
        }

        public kk1: string[] = ["asd", "qwe"];
    }
    ```
- This is how the ngFor is used:
    - 
    ```html
        <button *ngFor="let gif of gifs;" class="list-group-item list-group-item-action">
            {{ gif | titlecase }}
        </button>
    ```

## Environment Variables

- Create a `environment/env.dev.ts` file
    ```ts
    export const env_dev = {
        api_key: 'blablabla',
        api_url: 'https://somne-end-point/q/'
    }
    ```
- call it from services
    ```ts
    import { env_dev } from 'src/environment/env.dev';
    ```
- add the `environment` folder to the .gitignore file
    ```
    # environment
    environment/
    ```

## importing httpClient

- should be imported in the `app.module.ts` file
    - `import { HttpClientModule } from '@angular/common/http';`
    - also, registered into the imports in the same file
    - Modules are imported into the "imports" array in the module file


- Import the module
    - `import { HttpClient } from '@angular/common/http';`

- Make the DI (dep Injection in the service)
    - `constructor( private http: HttpClient ) { }`





