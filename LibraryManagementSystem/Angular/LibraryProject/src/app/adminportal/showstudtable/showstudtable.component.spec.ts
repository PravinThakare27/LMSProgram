import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowstudtableComponent } from './showstudtable.component';

describe('ShowstudtableComponent', () => {
  let component: ShowstudtableComponent;
  let fixture: ComponentFixture<ShowstudtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowstudtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowstudtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
