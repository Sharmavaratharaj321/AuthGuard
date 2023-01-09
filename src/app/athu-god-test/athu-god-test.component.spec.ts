import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthuGodTestComponent } from './athu-god-test.component';

describe('AthuGodTestComponent', () => {
  let component: AthuGodTestComponent;
  let fixture: ComponentFixture<AthuGodTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthuGodTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthuGodTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
