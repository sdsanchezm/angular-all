# integrate angular with bootstrap

1.  `npm install bootstrap bootstrap-icons`

2. in `angular.json`

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

3. `npm install @ng-bootstrap/ng-bootstrap`


4. in `app.module.ts`

```ts
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
  imports: [
    BrowserModule,
    SharedModule,
    NgbModule
  ],
```
  
5. Constructor example for an app component in `app.component.ts`

```ts
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
```


### misc
- [https://ng-bootstrap.github.io/#/home](https://ng-bootstrap.github.io/#/home)
- [https://www.freecodecamp.org/news/how-to-add-bootstrap-css-framework-to-an-angular-application/](https://www.freecodecamp.org/news/how-to-add-bootstrap-css-framework-to-an-angular-application/)