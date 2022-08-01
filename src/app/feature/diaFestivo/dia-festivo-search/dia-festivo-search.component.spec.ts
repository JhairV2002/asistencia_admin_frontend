import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaFestivoSearchComponent } from './dia-festivo-search.component';

describe('DiaFestivoSearchComponent', () => {
  let component: DiaFestivoSearchComponent;
  let fixture: ComponentFixture<DiaFestivoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaFestivoSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaFestivoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
