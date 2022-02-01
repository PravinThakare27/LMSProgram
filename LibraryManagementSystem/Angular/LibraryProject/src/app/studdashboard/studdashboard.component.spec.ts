import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuddashboardComponent } from './studdashboard.component';

describe('StuddashboardComponent', () => {
  let component: StuddashboardComponent;
  let fixture: ComponentFixture<StuddashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuddashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
