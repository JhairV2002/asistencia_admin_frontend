import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaComboboxComponent } from './categoria-combobox.component';

describe('CategoriaComboboxComponent', () => {
  let component: CategoriaComboboxComponent;
  let fixture: ComponentFixture<CategoriaComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaComboboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
