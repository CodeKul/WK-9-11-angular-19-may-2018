import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoclRefsComponent } from './locl-refs.component';

describe('LoclRefsComponent', () => {
  let component: LoclRefsComponent;
  let fixture: ComponentFixture<LoclRefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoclRefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoclRefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
