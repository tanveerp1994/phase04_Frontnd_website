import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsampleComponent } from './contactsample.component';

describe('ContactsampleComponent', () => {
  let component: ContactsampleComponent;
  let fixture: ComponentFixture<ContactsampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
