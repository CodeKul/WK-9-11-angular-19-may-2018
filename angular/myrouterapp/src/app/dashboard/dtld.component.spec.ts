import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtldComponent } from './dtld.component';

describe('DtldComponent', () => {
  let component: DtldComponent;
  let fixture: ComponentFixture<DtldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
