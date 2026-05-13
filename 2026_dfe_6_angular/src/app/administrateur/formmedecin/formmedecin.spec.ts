import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMedecin } from './formmedecin';

describe('FormMedecin', () => {
  let component: FormMedecin;
  let fixture: ComponentFixture<FormMedecin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMedecin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMedecin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
