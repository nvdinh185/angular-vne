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

  constructor() {}

  ngOnInit() {
  }
  onSubmit(HinhTronForm) {
    let bankinh = HinhTronForm.value.bankinh;
    let dientich = HinhTronForm.value.dientich;
    if (bankinh != undefined && bankinh != "") {
      this.dblDT = parseFloat(bankinh) * parseFloat(bankinh) * 3.14;
    } else {
      this.dblBK = Math.sqrt((parseFloat(dientich)) / 3.14);
    }
  }
  getMessage(HinhTronForm) {
    let bankinh = HinhTronForm.value.bankinh;
    let dientich = HinhTronForm.value.dientich;
    if (((bankinh != undefined && bankinh != "")&&
    (dientich != undefined && dientich != ""))||
    ((bankinh == undefined || bankinh == "")&&
    (dientich == undefined || dientich == ""))) {
      this.check = false;
      return "Vui lòng nhập 1 trong 2 trường!";
    } else this.check = true;
  }

}
