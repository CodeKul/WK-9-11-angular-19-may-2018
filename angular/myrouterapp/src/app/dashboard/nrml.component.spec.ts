import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrmlComponent } from './nrml.component';

describe('NrmlComponent', () => {
  let component: NrmlComponent;
  let fixture: ComponentFixture<NrmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
