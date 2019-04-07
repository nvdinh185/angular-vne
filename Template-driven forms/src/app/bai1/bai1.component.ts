import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {
  check: boolean;
  chuVi: number;
  dienTich: number;
  constructor() { }

  ngOnInit() {
  }

  getMessage(HCNForm) {
    let chieudai = HCNForm.value.chieudai;
    let chieurong = HCNForm.value.chieurong;
    if (chieudai == "" || chieurong == "") {
      this.check = false;
      return "Vui lòng nhập chiều dài và chiều rộng!"
    } else this.check = true;
  }

  onSubmit(HCNForm) {
    let chieudai = parseInt(HCNForm.value.chieudai);
    let chieurong = parseInt(HCNForm.value.chieurong);
    this.chuVi = (chieudai + chieurong) * 2;
    this.dienTich = chieudai * chieurong;
  }

}
