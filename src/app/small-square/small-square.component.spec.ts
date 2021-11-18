import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSquareComponent } from './small-square.component';

describe('SmallSquareComponent', () => {
  let component: SmallSquareComponent;
  let fixture: ComponentFixture<SmallSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
