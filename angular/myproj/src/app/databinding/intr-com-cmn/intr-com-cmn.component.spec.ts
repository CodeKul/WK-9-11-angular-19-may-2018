import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrComCmnComponent } from './intr-com-cmn.component';

describe('IntrComCmnComponent', () => {
  let component: IntrComCmnComponent;
  let fixture: ComponentFixture<IntrComCmnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrComCmnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrComCmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
