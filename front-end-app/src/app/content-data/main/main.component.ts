import { Component, AfterContentInit} from '@angular/core';


const transitionTime = 5 * 1000;
class SliderColection{
  pics = ['/assets/img/main/astronaut.png', '/assets/img/main/shutle.png', '/assets/img/main/shutle.png']
  width =  0;
  transition = transitionTime / 1000
  curentImg = 'assets/img/main/astronaut.png'
  curentIndex = 0
  progressBarWidth = 0

  change = () => {
    
    if(this.curentIndex == this.pics.length - 1){
      this.curentIndex = 0
      this.transition = 0
      this.width = 0
      setTimeout(() => {
        this.transition = transitionTime / 1000
        this.width = 33
      }, 100)
    } else{
      this.curentIndex++
      this.width = 33 * (1 + this.curentIndex)
    }  
    this.curentImg = this.pics[this.curentIndex]
  }

}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements AfterContentInit{
  sliderColection = new SliderColection();
  
  
  ngAfterContentInit(): void { 
    console.log((<HTMLImageElement>document.getElementById("MainImage")));
    setTimeout(() => {
      this.sliderColection.width = 33
      setInterval(this.sliderColection.change, transitionTime)
    }, 100)
  }
}
