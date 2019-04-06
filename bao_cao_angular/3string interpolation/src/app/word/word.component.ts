import { Component } from '@angular/core'

@Component({
    selector: 'app-word',
    templateUrl: './word.component.html',
    styleUrls: ['./word.component.css']
})

export class WordComponent {
    en: string = "Hello";
    vn: string = "Xin chao";
}