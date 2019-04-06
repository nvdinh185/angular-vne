import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css']
})
export class Bai3Component implements OnInit {
  dblBK: number;
  dblDT: number;
  check;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(HinhTronForm) {
    if (HinhTronForm.value.bankinh != undefined && HinhTronForm.value.bankinh != "") {
      this.dblDT = parseFloat(HinhTronForm.value.bankinh) * parseFloat(HinhTronForm.value.bankinh) * 3.14;
    } else {
      this.dblBK = Math.sqrt((parseFloat(HinhTronForm.value.dientich)) / 3.14);
    }
  }
  getMessage(HinhTronForm) {
    if (((HinhTronForm.value.bankinh != undefined && HinhTronForm.value.bankinh != "")&&
    (HinhTronForm.value.dientich != undefined && HinhTronForm.value.dientich != ""))||
    ((HinhTronForm.value.bankinh == undefined || HinhTronForm.value.bankinh == "")&&
    (HinhTronForm.value.dientich == undefined || HinhTronForm.value.dientich == ""))) {
      this.check = false;
      return "Vui lòng nhập 1 trong 2 trường!";
    } else this.check = true;
  }

}
