import { Component } from "@angular/core"

@Component({
    selector: 'app-parrent',
    template: `
        <h2>{{ value }}</h2>
        <app-child (myClick)="changeValue($event)"></app-child>
    `,
})

export class ParrentComponent {
    value = 0;
    changeValue(isAdd: boolean){
        if(isAdd){
            this.value = this.value + 1;
        } else {
            this.value = this.value - 1;
        }
    }
}