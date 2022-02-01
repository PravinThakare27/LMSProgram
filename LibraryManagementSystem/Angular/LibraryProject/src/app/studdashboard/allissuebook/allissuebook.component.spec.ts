import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllissuebookComponent } from './allissuebook.component';

describe('AllissuebookComponent', () => {
  let component: AllissuebookComponent;
  let fixture: ComponentFixture<AllissuebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllissuebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllissuebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
