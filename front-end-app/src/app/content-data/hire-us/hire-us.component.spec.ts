import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireUsComponent } from './hire-us.component';

describe('HireUsComponent', () => {
  let component: HireUsComponent;
  let fixture: ComponentFixture<HireUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
