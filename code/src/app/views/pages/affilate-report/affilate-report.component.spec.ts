import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffilateReportComponent } from './affilate-report.component';

describe('AffilateReportComponent', () => {
  let component: AffilateReportComponent;
  let fixture: ComponentFixture<AffilateReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffilateReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffilateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
