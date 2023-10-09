# angular-all Notes

## misc

- install cli `npm install -g @angular/cli`
- initialize a projects (2 ways): 
    - `npm init @angular myApp`
    - `ng new my-app`
    - ng router can be no, but normally yes.

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

### no DOM javascript in Angular

- if dom is manipulated, when working with angular, some memory leak problems may happen, so it's not recommended
- angular has its own libs for dom manipulation


### components dissapear (*ngIf)

- `*ngIf="false"`
- `*ngIf === "Spiderman"`
- `<button *ngIf="name !== 'batman'" class="btn btn-primary mx-2" (click)="changeHero()">`
- `*ngIf="age !== '25'"`

- Example:
    - conditional components:
        ```js
        <div *ngIf="deletedHero">
            <h2 class="text-danger">Deleted Hero: {{ deletedHero }}</h2>
        </div>

        <h2 *ngIf="!deletedHero">no deletions...</h2>
        ```

    - better approach using ng-template and local reference:
        - local reference is the workd with the hashtag symbol `#nothingWasDeleted` in this case
        ```js
        <ul class="list-group my-2">
            <li *ngFor="let name of heroNames" class="list-group-item">{{name}}</li>
        </ul>

        <div *ngIf="deletedHero else nothingWasDeleted">
            <h2 class="text-danger">Deleted Hero: {{ deletedHero }}</h2>
        </div>

        <ng-template #nothingWasDeleted>
            <h2 *ngIf="!deletedHero">no deletions...</h2>
        </ng-template>

        <button *ngIf="heroNames.length > 0" (click)="removeLastHero()" class="btn btn-danger btn-sm">
            Delete Hero
        </button>
        ```

### component iteration (*ngFor)

- `<li *ngFor="let name of heroNames" class="list-group-item">{{name}}</li>`

### ng-template

- `<ng-template>` is like having a <> that does not affect the html rendered into the page

### modules ins angular

- a module in angular, is a class with a decorator
- a module works like a grouper that encapsulates functionalities, protected it from the external world and easier to share


## FileSystem recommended in angular (of a component)


- `ng g m <name>`
- then create the FS
    - components
    - pages 
        - (components that contains more components)
    - services
    - interfaces

## Create a component from CLI

- `ng g c .\dbz\components\list`
- `ng g c .\dbz\components\addCharacter`


## ngFor example

- Code Example
```ts
    <li *ngFor="
    let character of characterList;
    let i = index;
    let isFirst = first;
    let isLast = last;
    let isEven = even;
    let isOdd = odd;
    " class="list-group-item">
        <span class="text-primary">{{ i+1 }}. </span>
        <span class="fw-bold">{{character.name}} -> {{character.power}}</span>
        <span class="text-secondary"> is first?: {{ isFirst }}</span>
        <span class="text-secondary"> is last?: {{ isLast }}</span>
        <span class="text-secondary"> is even?: {{ isEven }}</span>
        <span class="text-secondary"> is odd?: {{ isOdd }}</span>
    </li>
```

## [class] in angular usage

- Example code

```ts
    " [class]="'list-group-item'"
```

## ngClass usage

- Example code
```ts
    <li *ngFor="
    let character of characterList;
    let i = index;
    let isFirst = first;
    let isLast = last;
    let isEven = even;
    let isOdd = odd;
    " class="list-group-item"
    [ngClass]="{
        'list-group-item-success': isLast,
        'list-group-item-primary': isEven
}">
    <!-- " class="list-group-item {{ i === 0 ? 'list-group-item-success' : '' }}"> -->
    <!-- " class="list-group-item list-group-item-success"> -->
        <span class="text-primary">{{ i+1 }}. </span>
        <span class="fw-bold">{{character.name}} -> {{character.power}}</span>
        <span class="text-secondary"> is first?: {{ isFirst }}</span>
        <span class="text-secondary"> is last?: {{ isLast }}</span>
        <span class="text-secondary"> is even?: {{ isEven }}</span>
        <span class="text-secondary"> is odd?: {{ isOdd }}</span>
    </li>
```


## @Input() Example

- `@Input()` this decorator, indicates that the component can receive a property named: "characterList"
- `@Input('asd')` there also can be a name here
- example code

```ts
export class ListComponent {

    @Input()
    public characterList: Character[] = [
        {
            name: 'Jamecho',
            power: 5000
        }
    ]
}
```

- to use it in a component: (tag: `app-dbz-list`)

```ts
<app-dbz-list [characterList]="characters"> </app-dbz-list>
```
- `character` comes from here:
```ts
<li *ngFor="
    let character of characterList;
```

## HttpClientModule (http get requests)

- importing in a module:
    - `import { HttpClientModule } from '@angular/common/http';`
    - and in imports: 
        ```
        imports: [
            BrowserModule,
            HttpClientModule,
            GifsModule,
            SharedModule
        ]
        ```
    - to use it in a service:
        - `import { HttpClient, HttpParams } from '@angular/common/http';`
        - `constructor( private http: HttpClient ) { }`
            ```
            const params = new HttpParams()
            .set('api_key', env_dev.api_key)
            .set('q', tag)
            .set('limit', '2')

            this.http.get<SearchResponse>(`${env_dev.api_url}`, { params })
            .subscribe( res => {
                console.log( res );
                this.gifList = res.data;
                console.log(res.data);
                console.log({gifs: this.gifList});
            })
            ```


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
        
## submit form in angular

- `<form class="row" (ngSubmit)="emitCharacter()">`
    - 
    ```ts
        emitCharacter(): void
        {
            console.log(this.character);
        }
    ```

## Services

- `ng generate service .\services\data`
- [https://angular.io/guide/singleton-services]
- 
     ```ts
    import { Injectable } from '@angular/core';

    @Injectable({providedIn: 'root'})
    export class ServiceNameService {
        constructor() { }

    }

     ```

### Installed uuid package

- `npm i uuid`
- `npm i --save-dev @types/uuid`


- VsCode plugins:
    - [https://marketplace.visualstudio.com/items?itemName=Angular.ng-template]
    - Angular Snippets [https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2]

- Source: [https://gist.github.com/Klerith/4816679624c1cb528f8e05d902fd7cff]


## Conditional Rendering

### *ngIf

- Different ways
    ```html
        <div *ngTemplateOutlet="false ? thenTag : elseTag"></div>
        <ng-template #thenTag><h2>Text here</h2></ng-template>
        <ng-template #elseTag><h2>No Text</h2></ng-template>

        <div *ngIf="false; then thenTag1 else elseTag1"></div>
        <ng-template #thenTag1><h2>Text here</h2></ng-template>
        <ng-template #elseTag1><h2>No Text</h2></ng-template>

        <div *ngIf="false; else thenTag2">
            <h2>Something here</h2>
        </div>
        <ng-template #thenTag2><h2>Text tag2</h2></ng-template>

        <div *ngIf="true;">
            <h2>nother Text</h2>
        </div>
    ```

### *ngSwitch

- general switch case in angular (with in component: `public color = "red"`)
    ```html
    <div [ngSwitch]="color">
        <div *ngSwitchCase="'red'">Red</div>
        <div *ngSwitchCase="'blue'">Blue</div>
        <div *ngSwitchCase="'yellow'">Yellow</div>
        <div *ngSwitchDefault>Select a color</div>
    </div>
    ```

### *ngFor

- options with `public cities = ["praga", "beijing", "toronto", "lima"];`
    ```html
    <div *ngFor="let city of cities">
        {{city}}
    </div>

    <div *ngFor="let city of cities; index as i">
        {{i}} {{city}}
    </div>

    <div *ngFor="let city of cities; first as f; last as l">
        {{l}} {{city}}
    </div>

    <div *ngFor="let city of cities; first as f; odd as o">
        {{o}} {{city}}
    </div>

    <div *ngFor="let city of cities; first as f; even as e">
        {{e}} {{city}}
    </div>
    ```

### components data interaction

~~~mermaid
graph TD
    subgraph ComponentDataFlow
        odx1[ParentComponent]-- Data<br>@Input() --> odx2
        odx2[ChildComponent]-- Data<br>@Output() --> odx1
    end
~~~

## misc

- each component should be self-sufficient (lowly coupling) , they should import details by themselves
- `()` -> event
- `[]` -> attribute
- `[()]` -> event and attribute at the same time, meaning: 2-way data binding
- include the keyword `debugger;` in the code to make stop the execution and explore in the browser





