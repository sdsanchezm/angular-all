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
    ```
    imports: [
        BrowserModule,
        GifsModule,
        SharedModule
    ],
    ```
    - and 
    ```
    import { GifsModule } from './gifs/gifs.module';
    ```
- Generate a new component into the shared folder:
    - cli
        - `ng g component shared/components/sidebar`
            - this will create a compelte module (css, html, spec.ts, ts) files
    - it is also possible manually create folders and files

- Update the parent module to include the new module created:
    - "shared/shared.module.ts" file:
    ```
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



