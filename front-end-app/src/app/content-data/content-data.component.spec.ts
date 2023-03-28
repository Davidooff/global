import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDataComponent } from './content-data.component';

describe('ContentDataComponent', () => {
  let component: ContentDataComponent;
  let fixture: ComponentFixture<ContentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
