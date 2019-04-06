import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name = '';
  isHighLight = false;
  a = 'square';
  b = { circle: true };
  evenStyle = { color: 'red', fontSize: '20px', backgroundColor: 'gray' };
  oddStyle = { color: 'black', fontSize: '40px', backgroundColor: 'green' };
  constructor() { }

  ngOnInit() {
  }

}
