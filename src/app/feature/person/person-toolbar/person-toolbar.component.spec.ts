import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonToolbarComponent } from './person-toolbar.component';

describe('PersonToolbarComponent', () => {
  let component: PersonToolbarComponent;
  let fixture: ComponentFixture<PersonToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
