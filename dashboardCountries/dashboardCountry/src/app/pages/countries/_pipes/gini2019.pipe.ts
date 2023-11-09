import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'gini2019'
})
export class Gini2019Pipe implements PipeTransform {

    // transform(value: unknown, ...args: unknown[]): unknown {
    //     return null;
    // }

    transform(data: any): number | undefined {
        console.log(data);
        if (data && data['2019'] ) {
            // return 2.2;
            return data['2019'];
        }
        if (data && data['2016'] ) {
            // return 2.2;
            return data['2016'];
        }
        // return 3.3;
        return undefined;
    }
}
