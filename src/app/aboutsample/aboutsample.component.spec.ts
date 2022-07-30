import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutsampleComponent } from './aboutsample.component';

describe('AboutsampleComponent', () => {
  let component: AboutsampleComponent;
  let fixture: ComponentFixture<AboutsampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutsampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
