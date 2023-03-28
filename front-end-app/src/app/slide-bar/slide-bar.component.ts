import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.scss']
})
export class SlideBarComponent {
  counter = 0
  range = Array(17).fill(0).map((x,i)=> {
    if(i % 4 == 0){
      this.counter++
      return ["strong-point point", "0" + this.counter]
    } else return ["point", ""]
  });
  constructor(){
  }
}
