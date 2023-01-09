import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthgodComponent } from './authgod.component';

describe('AuthgodComponent', () => {
  let component: AuthgodComponent;
  let fixture: ComponentFixture<AuthgodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthgodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthgodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
