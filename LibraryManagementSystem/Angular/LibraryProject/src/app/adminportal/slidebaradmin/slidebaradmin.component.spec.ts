import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidebaradminComponent } from './slidebaradmin.component';

describe('SlidebaradminComponent', () => {
  let component: SlidebaradminComponent;
  let fixture: ComponentFixture<SlidebaradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidebaradminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidebaradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
