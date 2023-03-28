import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { ContentDataComponent } from './content-data/content-data.component';
import { MainComponent } from './content-data/main/main.component';
import { SliderSectionComponent } from './content-data/slider-section/slider-section.component';
import { AboutSectionComponent } from './content-data/about-section/about-section.component';
import { ContactComponent } from './content-data/contact/contact.component';
import { HireUsComponent } from './content-data/hire-us/hire-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideBarComponent,
    ContentDataComponent,
    MainComponent,
    SliderSectionComponent,
    AboutSectionComponent,
    ContactComponent,
    HireUsComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
