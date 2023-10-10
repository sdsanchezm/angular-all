import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ExamLabcode, SearchResponse } from '../interfaces/examlabcodes.interfaces';

import { env_dev } from 'src/environment/env.dev';

@Injectable({
    providedIn: 'root'
})
export class ExamlabcodesService {

    // public examCodeList: ExamLabcode[] = [];
    public examCodeList: ExamLabcode[] = [];

    constructor(private http: HttpClient) { }


    searchExamCode1(tag: string): void {
        if (tag.length === 0) return;
        // this.cleanedTag(tag);

        console.log(`hi from service ${tag}`);


        // const params = new HttpParams()
        //     .set('api_key', env_dev.api_key)
        //     .set('q', tag)
        //     .set('limit', '2')

        // const headers = new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': `${env_dev.api_key}`,
        // });

        // .get(`${env_dev.api_url}`, { params })
        // .get(`${env_dev.api_url}`, { headers: headers })
        const api_url = `${env_dev.api_url}search?q=${tag}`;
        this.http
            .get<SearchResponse>(api_url)
            .subscribe(res => {
                console.log(`res: ${res}`);
                console.log(res);
                this.examCodeList = res.data;
                // console.log(res.data);
                console.log({ codes: this.examCodeList });
            })
    }

    // retrieve all exams from user input
    searchExamCode2(tag: string): Observable<ExamLabcode[]> {
        if (tag.length === 0) {
            // Return an empty observable if the tag is empty
            return new Observable<ExamLabcode[]>(observer => {
                observer.next([]);
                observer.complete();
            });
        }

        console.log(`hi from service ${tag}`);
        const api_url = `${env_dev.api_url}search?q=${tag}`;
        console.log(api_url);
        return this.http.get<ExamLabcode[]>(api_url);
    }

    // retrieves 1 exam to show in modal
    retrieveAnExam(id: any): Observable<ExamLabcode> {
        const api_url = `${env_dev.api_url}${id}`;
        // const api_url = `${env_dev.api_url}search?q=${tag}`;
        console.log(api_url);
        return this.http.get<ExamLabcode>(api_url);
    }



}
