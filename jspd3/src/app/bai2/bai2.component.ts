import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {
  name = "";
  constructor() { }

  ngOnInit() {
  }

  onSubmit(HelloForm) {
    this.name = HelloForm.value.hoten;
  }

}
