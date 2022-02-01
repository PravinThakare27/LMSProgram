import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssubookComponent } from './issubook.component';

describe('IssubookComponent', () => {
  let component: IssubookComponent;
  let fixture: ComponentFixture<IssubookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssubookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssubookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
