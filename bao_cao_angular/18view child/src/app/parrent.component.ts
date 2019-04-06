import { Component, ViewChild } from "@angular/core"
import { ChildComponent } from './child.component'

@Component({
    selector: 'app-parrent',
    template: `
        <button (click)="onAddForChild()">Add for child</button>
        <app-child></app-child>
    `,
})

export class ParrentComponent {
    @ViewChild(ChildComponent)
    myChild: ChildComponent;
    onAddForChild(){
        this.myChild.value++;
    }
}