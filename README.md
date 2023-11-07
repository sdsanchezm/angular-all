# angular-all Notes

## misc

- install cli `npm install -g @angular/cli`
- initialize a projects (2 ways): 
    - `npm init @angular myApp`
    - `ng new my-app`
    - ng router can be a `no`, but normally yes.

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


## Bootstrap Install

- `ng new examlabcodes`
- `ng add @ng-bootstrap/ng-bootstrap`
- `ng add @ng-bootstrap/ng-bootstrap`

- Install Bootstrap: 
    ```ts
        "styles": [
            "node_modules/bootstrap/dist/css/bootstrap.min.css",
            "node_modules/bootstrap-icons/font/bootstrap-icons.css",
            "src/styles.css"
        ],
        "scripts": [
            "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
        ]
    ```


## Bootstrap modal

### First way (in the app component)
- html
    ```html
    <ng-template #longContentModal let-modal>
        <p>content</p>
    </ng-template>
    ```
- ts
    ```ts
        import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

        constructor(private modalService: NgbModal) { }

        @ViewChild('longContentModal') longContentModal: any;

        openLongContentModal() {
            const modalRef = this.modalService.open(this.longContentModal, { size: 'lg' });
        }
    ```

### Second way (in the app component)

- in a component, html
    ```html
    <button class="btn btn-primary" (click)="openModal()">Open Modal</button>

    <ng-template #content let-modal>
        <div class="modal-header">
            <h4 class="modal-title">the Modal</h4>
            <button type="button" class="close" (click)="modal.dismiss('Cross click')">
            </button>
        </div>
        <div class="modal-body">
            <p>This is the modal content.</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" (click)="modal.dismiss('Close click')">Close</button>
            <button type="button" class="btn btn-primary" (click)="modal.close('Save click')">Save</button>
        </div>
    </ng-template>


    ```
- ts
    ```ts
        import { Component, ViewChild } from '@angular/core';
        import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

        constructor(private modalService: NgbModal) { }

        @ViewChild('content')
        public content!: any;
        
        openModal() {
        const modalRef = this.modalService.open(this.content, { centered: true });
        modalRef.result.then(
            (result) => {
                console.log(`Closed with: ${result}`);
            },
            (reason) => {
                console.log(`Dismissed with: ${reason}`);
            }
        );
    }
    ```
- app module
    ```ts
    @NgModule({
        declarations: [
            AppComponent,
            Modal2Component
        ],
    ```

## Directives

- component code:

    ```ts
        public x1: boolean = true;
        public color = "red";
        public cities = ["praga", "beijing", "toronto", "lima"];
        public date1 = new Date();
        public name1 = "Jamecho Sanc";
        public object1 = {
            "username": "tichemaria",
            "useremail": "tichemaria@example.com"
        }
    ```

### *ngIf for conditional rendering

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

### Pipes in angular

- code 
    ```html
        <h2>{{ 8.345 | number:'1.2-3'}}</h2>
        <h2>{{ 8.345 | number:'1.4-5'}}</h2>
        <h2>{{ 8.345 | number:'3.1-2'}}</h2>

        <h2>{{ 0.345 | percent:'2.2-4' }}</h2>
        <h2>{{ 0.345 | percent:'1.2-4' }}</h2>

        <h2>{{ 0.214 | currency }}</h2>
        <h2>{{ 1.214 | currency:'EUR': 'code' }}</h2>

        <h2>{{ date1 }}</h2>
        <h2>{{ date1 | date:'short' }}</h2>
        <h2>{{ date1 | date:'shortDate' }}</h2>
        <h2>{{ date1 | date:'shortTime' }}</h2>

        <h2>{{ name1 }}</h2>
        <h2>{{ name1 | lowercase }}</h2>
        <h2>{{ name1 | uppercase }}</h2>
        <h2>{{ name1 | titlecase }}</h2>
        <h2>{{ name1 | slice:2:11 }}</h2>
        <h2>{{ object1 | json }}</h2>
    ```

### components data interaction

- General interaction:

~~~mermaid
graph TD
    odx1[ParentComponent]-- "Data<br>@Input()" --> odx2
    odx2[ChildComponent]-- "Data<br>@Output()" --> odx1
~~~

#### Example of component interaction, data flow and ngModelChange

- Parent Component
    - parent ts
        ```ts
        import { Component } from '@angular/core';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html'
        })
        export class AppComponent {

            constructor() {
                this.CtempParent = 0;
                this.FtempParent = 0;
            }

            CtempParent: number;
            handleC(n1: number) {
                const temp = n1 + 2;
                this.FtempParent = temp;
            }

            FtempParent: number;
            handleF(n2: number) {
                const temp = n2 + 1;
                this.CtempParent = temp;
            }
        }
        ```
    - parent html
    ```ts
    <h1>Parent Component</h1>
    <app-com1
        [Ctemp]="CtempParent" (CtempOutput)="handleC($event)"
        [Ftemp]="FtempParent" (FtempOutput)="handleF($event)"
    ></app-com1>

    ```

- Child Component
    - child html
    ```ts
    <p>com1 works!</p>
    <input type="number" [(ngModel)]="Ctemp" (ngModelChange)="emiter_C2F()" />
    <input type="number" [(ngModel)]="Ftemp" (ngModelChange)="emiter_F2C()" />
    ```
    - child ts
    ```ts
    import { Component, EventEmitter, Input, Output } from '@angular/core';
    @Component({
        selector: 'app-com1',
        templateUrl: './com1.component.html'
    })
    export class Com1Component {

        @Input() Ctemp: number;
        @Input() Ftemp: number;
        @Output() CtempOutput = new EventEmitter();
        @Output() FtempOutput = new EventEmitter();

        constructor() {
            this.Ctemp = 0;
            this.Ftemp = 0;
        }

        emiter_C2F(){
            const x1 = this.Ctemp;
            this.CtempOutput.emit(x1);
        }

        emiter_F2C(){
            const x2 = this.Ftemp;
            this.FtempOutput.emit(x2);
        }
    }
    ```
- Module:
    ```ts
    import { FormsModule } from '@angular/forms';
    imports: [
        BrowserModule,
        FormsModule
    ],
    ```


## Install Bootstrap ngx-bootstrap

- docs at: [https://valor-software.com/ngx-bootstrap/#/]
- `ng add ngx-bootstrap`
    - it wil automatically update:
        - Module: `BrowserAnimationsModule`
        - angular.json
        - package.json
- `npm install font-awesome`
    - add (to angular.json):
        - `./node_modules/font-awesome/css/font-awesome.min.css`

## Install Certificates

- Docs at [https://github.com/FiloSottile/mkcert]
- NC .Net at 3.28 
- `choco install mkcert`



## misc

- each component should be self-sufficient (lowly coupling) , they should import details by themselves
- `()` -> event
- `[]` -> attribute
- `[()]` -> event and attribute at the same time, meaning: 2-way data binding
- include the keyword `debugger;` in the code to make stop the execution and explore in the browser

- Angular scripts:
    - `ng g module <name>`
    - `ng g pipe <name>`
    - `ng g resolver <name>`
    - `ng g service <name>`
    - `ng g service-worker <name>`
    - `ng g web-worker <name>`

- `ng add ngx-bootstrap  --component dropdowns`
- doc at [https://valor-software.com/ngx-bootstrap/#/components/dropdowns?tab=api]


- Component dry run before executing
    - `ng g c members/member-list --skip-tests --dry-run`
    - `ng g c members/member-detail --skip-tests`
    - `ng new routing-app --routing --defaults`
    - `ng g m modules/shared --dry-run`:
        - `CREATE src/app/modules/shared/shared.module.ts`
    - `ng g m modules/shared --flat --dry-run`:
        - `CREATE src/app/modules/shared.module.ts`

- No Style, no Test files:
    + `ng g component shared/pages/homePage --inline-style --skip-tests`

- toastr
    - [https://www.npmjs.com/package/ngx-toastr]
    - ngx-toastr
    - `npm i ngx-toastr`
    - `@angular/animations`
    - in angular.json file:
        - `"node_modules/ngx-toastr/toastr.css"`
	
- installing a guard
    - `ng g g guards/auth --skip-tests --dry-run`


- npm install bootswatch
    - [https://bootswatch.com/]
    - `"node_modules/bootswatch/dist/[theme]/bootstrap.css",`
    - `"node_modules/bootswatch/dist/vapor/bootstrap.css",`
    - `"node_modules/bootswatch/dist/united/bootstrap.css",`


### misc Structure - routingl moduling and components organized structure

- `ng g m pages/rmcharacters --dry-run`
    - `CREATE src/app/pages/rmcharacters/rmcharacters.module.ts (198 bytes)`

- `ng g c pages/rmcharacters/episode --skip-tests --inline-style --dry-run`
    - `CREATE src/app/pages/rmcharacters/episode/episode.component.html (22 bytes)`
    - `CREATE src/app/pages/rmcharacters/episode/episode.component.ts (181 bytes)`
    - `UPDATE src/app/pages/rmcharacters/rmcharacters.module.ts (286 bytes)`

- `ng g c pages/rmcharacters/location --skip-tests --inline-style --dry-run`
    - `CREATE src/app/pages/rmcharacters/location/location.component.html (23 bytes)`
    - `CREATE src/app/pages/rmcharacters/location/location.component.ts (184 bytes)`
    - `UPDATE src/app/pages/rmcharacters/rmcharacters.module.ts (376 bytes)`

- `ng g m pages/rmcharacters/rmcharactersRouting --flat --dry-run`
    - `CREATE src/app/pages/rmcharacters/rmcharacters-routing.module.ts (205 bytes)`


### misc Structure - routing and moduling organized

- `ng new RoutingApp`
- `ng g c pages/home`
- `ng g c pages/about`
- `ng g m pages/about --dry-run`
- `ng g m pages/about/aboutRouting --flat --dry-run`
- `ng g m pages/home --dry-run`
- `ng g m pages/home/homeRouting --flat --dry-run`
- `ng g m appRouting --flat --dry-run`
- `ng g m pages/allPages --dry-run --flat`

- *Some Notes:*
    - Being carefull with importing and exporting modules is crucial, Components are declared
    - Double check if modules are being imported twice
    - the idea was to create and encapsulta componentes, modules and router in one main module to be imported in the app.module



