import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Additems1Component } from './additems1.component';

describe('Additems1Component', () => {
  let component: Additems1Component;
  let fixture: ComponentFixture<Additems1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Additems1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Additems1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
