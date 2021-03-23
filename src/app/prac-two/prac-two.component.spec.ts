import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracTwoComponent } from './prac-two.component';

describe('PracTwoComponent', () => {
  let component: PracTwoComponent;
  let fixture: ComponentFixture<PracTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
