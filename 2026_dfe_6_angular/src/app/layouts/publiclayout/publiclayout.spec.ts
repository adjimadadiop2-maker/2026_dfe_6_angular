import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publiclayout } from './publiclayout';

describe('Publiclayout', () => {
  let component: Publiclayout;
  let fixture: ComponentFixture<Publiclayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Publiclayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Publiclayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
