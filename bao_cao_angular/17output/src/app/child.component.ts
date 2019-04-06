import { Component, Output, EventEmitter } from "@angular/core"

@Component({
    selector: "app-child",
    template: `
        <button (click)="addForParrent()">ADD</button>
        <button (click)="subForParrent()">SUB</button>
    `,
})

export class ChildComponent{
    @Output() myClick = new EventEmitter<boolean>();
    addForParrent(){
        this.myClick.emit(true);
    }
    subForParrent(){
        this.myClick.emit(false);
    }
}