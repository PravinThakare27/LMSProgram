import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbooktableComponent } from './showbooktable.component';

describe('ShowbooktableComponent', () => {
  let component: ShowbooktableComponent;
  let fixture: ComponentFixture<ShowbooktableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowbooktableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowbooktableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
