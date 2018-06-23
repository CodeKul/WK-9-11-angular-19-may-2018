import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpLyfComponent } from './cmp-lyf.component';

describe('CmpLyfComponent', () => {
  let component: CmpLyfComponent;
  let fixture: ComponentFixture<CmpLyfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpLyfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpLyfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
