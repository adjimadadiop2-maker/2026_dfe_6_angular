import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Administrationlayouts } from './administrationlayouts';

describe('Administrationlayouts', () => {
  let component: Administrationlayouts;
  let fixture: ComponentFixture<Administrationlayouts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Administrationlayouts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Administrationlayouts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
