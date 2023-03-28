import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSectionComponent } from './slider-section.component';

describe('SliderSectionComponent', () => {
  let component: SliderSectionComponent;
  let fixture: ComponentFixture<SliderSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
