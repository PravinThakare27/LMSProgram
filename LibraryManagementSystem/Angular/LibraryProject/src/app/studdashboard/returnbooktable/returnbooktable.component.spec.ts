import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnbooktableComponent } from './returnbooktable.component';

describe('ReturnbooktableComponent', () => {
  let component: ReturnbooktableComponent;
  let fixture: ComponentFixture<ReturnbooktableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnbooktableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnbooktableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
