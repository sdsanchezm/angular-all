import { Component } from '@angular/core';

import { RmserviceService } from '../_services/rmservice.service';

import { Character } from '../_interfaces/Character.interface';
import { Info } from '../_interfaces/CharacterPage.interface';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styles: [
        `.floating-badge {
            position: absolute;
            left: 10px;
            top: 50px;
        }`
    ]
})
export class CharacterComponent {

    public charactersData?: Character[] = [];
    public infoData?: Info | null;
    public currentPage: number = 1;
    public maxPages?: number | null = 42;
    public pagesArray: number[] = [];


    constructor(private _service: RmserviceService) { }

    ngOnInit(): void {
        this.loadData(this.currentPage);
        this.maxPages = this.infoData?.pages;
        console.log(this.maxPages);
        this.generatePagesArray(42);
    }

    loadData(page: number): void {
        this._service.getDataFromCharacterPage(page)
            .subscribe(data => {
                this.charactersData = data?.results;
                this.infoData = data?.info;
            });
    }

    nextPage(): void {
        console.log(this.infoData);

        if (this.infoData?.next) {
            this.currentPage++;
            this.loadData(this.currentPage);
        }
    }

    prevPage(): void {
        console.log(this.infoData);

        if (this.infoData?.prev) {
            this.currentPage--;
            this.loadData(this.currentPage);
        }
    }

    firstPage(): void {
        this.currentPage = 1;
        this.loadData(this.currentPage);
    }

    lastPage(): void {
        this.currentPage = 42;
        this.loadData(this.currentPage);
    }

    goToPage(page: string){
        this.currentPage = parseInt(page);
        this.loadData(this.currentPage);
        // console.log(page);

    }

    generatePagesArray(len: number): void {
        for (let i = 1; i <= len; i++ ){
            this.pagesArray.push(i)
        }
    }

}
