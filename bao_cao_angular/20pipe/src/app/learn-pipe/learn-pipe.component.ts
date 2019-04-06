import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  birthday = new Date("15 Aug 2015");
  person = { name: "Khoa Pham", age: 30 };
  address = Promise.resolve("123 Pham Nhu Xuong");
  constructor() { }

  ngOnInit() {
  }

}
