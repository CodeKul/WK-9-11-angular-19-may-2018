import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MkrComponent } from './mkr.component';

describe('MkrComponent', () => {
  let component: MkrComponent;
  let fixture: ComponentFixture<MkrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MkrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
