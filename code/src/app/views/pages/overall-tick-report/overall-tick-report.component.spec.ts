import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallTickReportComponent } from './overall-tick-report.component';

describe('OverallTickReportComponent', () => {
  let component: OverallTickReportComponent;
  let fixture: ComponentFixture<OverallTickReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallTickReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallTickReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
