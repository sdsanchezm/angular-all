import { Component, ElementRef, Input, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Clipboard } from '@angular/cdk/clipboard';

import { ExamlabcodesService } from './services/examlabcodes.service';

import { ExamLabcode } from './interfaces/examlabcodes.interfaces';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public tagbutton1!: ElementRef<HTMLElement>;

    @ViewChild('queryInput')
    public queryInput1!: ElementRef<HTMLInputElement>;

    public queryButton!: ElementRef<HTMLElement>;

    @ViewChild('longContentModal')
    public longContentModal!: any;

    @Input()
    public examLabCodesList: ExamLabcode[] = [];

    title = 'examlabcodes';

    public querySearch1 = '';

    public clipSuccess = false;

    // public examLabCodesListModal: ExamLabcode;

    constructor(private examlabcodesService: ExamlabcodesService, private modalService: NgbModal, private clipboard: Clipboard) { }

    query1(): void {
        const queryTxt = this.queryInput1.nativeElement.value;
        this.querySearch1 = queryTxt;
        console.log(queryTxt);
        this.examlabcodesService.searchExamCode2(queryTxt)
            .subscribe(response => {
                console.log({ codes: response });
                this.examLabCodesList = response;
            });
        this.queryInput1.nativeElement.value = '';
        this.queryInput1.nativeElement.focus();
    }

    query2(id: any): void {
        this.examlabcodesService.retrieveAnExam(id)
            .subscribe(response => {
                console.log({ codes: response });
                this.examLabCodesListModal = response;
            });
    }


    getData1() {
        console.log("clicked");
        this.examlabcodesService.searchExamCode2("jara");
    }

    getData2() {
        console.log('clicked');
        this.examlabcodesService.searchExamCode2('jara').subscribe(response => {
            console.log({ codes: response });
            this.examLabCodesList = response;
        });
    }

    openLongContentModal(examIdText: any) {
        this.query2(examIdText);
        const modalRef = this.modalService.open(this.longContentModal, { size: 'lg', scrollable: true });
        console.log(examIdText);

    }

    copyToClipboard(textToCopy: any) {
        this.clipSuccess = this.clipboard.copy(textToCopy);
        console.log(textToCopy);
    }

    public examLabCodesListTest: ExamLabcode[] = [{
        examId: '123',
        examNumber: "9999",
        examName: "ChikungunaTest",
        commonName: "Regular Chikunguna",
        fastingRequired: true,
        preparationDescription: "Regular Chikunguna Caring",
        observationForLaboratory: "No bservations",
        examPlace: "All Clinics",
        schedule: "All day",
        examCode: "QWE042",
        cupsCode: "ASD063",
        sampleDescription: "regular sampleDescription",
        sampleStability: "Regular sampleStability",
        clinicUtility: "Regular clinic Utility",
        mountingDays: "100 days",
        timeResults: "6 calendar days",
        sampleTechnic: "this is a samble technique",
        processingPlace: "Not Available"
    }];

    public examLabCodesListModal: ExamLabcode = {
        examId: '123',
        examNumber: "9999",
        examName: "ChikungunaModal",
        commonName: "Regular Chikunguna",
        fastingRequired: true,
        preparationDescription: "Regular Chikunguna Caring",
        observationForLaboratory: "No bservations",
        examPlace: "All Clinics",
        schedule: "All day",
        examCode: "QWE042",
        cupsCode: "ASD063",
        sampleDescription: "regular sampleDescription",
        sampleStability: "Regular sampleStability",
        clinicUtility: "Regular clinic Utility",
        mountingDays: "100 days",
        timeResults: "6 calendar days",
        sampleTechnic: "this is a samble technique",
        processingPlace: "Not Available"
    };


}
