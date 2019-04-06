import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  arPeople = [
    { name: "Teo", age: 18 },
    { name: "Ti", age: 15 },
    { name: "Tun", age: 16 }
  ]
  constructor() { }

  ngOnInit() {
  }

}
