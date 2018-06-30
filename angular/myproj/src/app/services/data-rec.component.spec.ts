import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecComponent } from './data-rec.component';

describe('DataRecComponent', () => {
  let component: DataRecComponent;
  let fixture: ComponentFixture<DataRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
