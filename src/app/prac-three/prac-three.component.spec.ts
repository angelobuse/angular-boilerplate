import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracThreeComponent } from './prac-three.component';

describe('PracThreeComponent', () => {
  let component: PracThreeComponent;
  let fixture: ComponentFixture<PracThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
