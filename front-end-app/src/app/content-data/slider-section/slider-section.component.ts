import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'

let path = "assets/img/slider/slider-pic"
let allImg = [path + '1.png', path + '2.png', path + '3.png']
let allTexts = ['VICTORY', 'METIRW & SMITH', 'ALEX NOVAK']


@Component({
  selector: 'app-slider-section',
  templateUrl: './slider-section.component.html',
  styleUrls: ['./slider-section.component.scss']
})
export class SliderSectionComponent {
  able = true;
  transition = 1
  curent = [
    {
      img : allImg[2],
      text: allTexts[2]
    },
    {
      img : allImg[0],
      text: allTexts[0]
    },
    {
      img : allImg[1],
      text: allTexts[1]
    },
    {
      img : allImg[2],
      text: allTexts[2]
    },
    {
      img : allImg[0],
      text: allTexts[0]
    }

  ]

  constructor(@Inject(DOCUMENT) private _document: HTMLDocument) {
  }
  clickBtn(side: string){
    if(!this.able){
      return
    }
    this.able = false
    var next:HTMLCollection; var pre:HTMLCollection; var sliderContent:HTMLCollection;
    sliderContent = this._document.getElementsByClassName('slider-content');
    if(side == 'left'){
      next = this._document.getElementsByClassName('slider-el-1');
      pre = this._document.getElementsByClassName('slider-el-2');
      next[0]?.classList.add('center-el');
      pre[0].classList.remove('center-el');
      sliderContent[0].classList.add('left')
      var nextIndex = allTexts.indexOf(this.curent[0].text)
      var nextCurent = Object.assign(this.curent)
      setTimeout(() => {this.transition = 0}, 1000)
      setTimeout(() => {
        nextCurent.pop()
        if(nextIndex == 0){
          nextCurent.unshift({
            img: allImg[allImg.length-1],
            text: allTexts[allTexts.length-1]
          })
        } else{
          nextCurent.unshift({
            img: allImg[nextIndex-1],
            text: allTexts[nextIndex-1]
          })
        }
      sliderContent[0].classList.remove('left')
      }, 1100)
      setTimeout(() => {this.transition = 1; this.able = true}, 1200)

    } else if(side == 'right'){
      next = this._document.getElementsByClassName('slider-el-3');
      pre = this._document.getElementsByClassName('slider-el-2');
      next[0]?.classList.add('center-el');
      pre[0].classList.remove('center-el');
      sliderContent[0].classList.add('right')
      var nextIndex = allTexts.indexOf(this.curent[this.curent.length-1].text)
      var nextCurent = Object.assign(this.curent)
      setTimeout(() => {this.transition = 0}, 1000)
      setTimeout(() => {
        nextCurent.shift()
        if(nextIndex == allImg.length - 1){
          nextCurent.push({
            img: allImg[0],
            text: allTexts[0]
          })
        } else{
          nextCurent.push({
            img: allImg[nextIndex+1],
            text: allTexts[nextIndex+1]
          })
        }
      sliderContent[0].classList.remove('right')
      }, 1100)
      setTimeout(() => {this.transition = 1; this.able = true}, 1200)
    }
    }
}

