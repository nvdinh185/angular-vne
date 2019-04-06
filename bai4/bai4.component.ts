import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai4',
  templateUrl: './bai4.component.html',
  styleUrls: ['./bai4.component.css']
})
export class Bai4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(MuaHoaForm) {
    console.log(MuaHoaForm);
  }

}
