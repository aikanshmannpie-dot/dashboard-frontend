import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallQuesTickReportComponent } from './overall-ques-tick-report.component';

describe('OverallQuesTickReportComponent', () => {
  let component: OverallQuesTickReportComponent;
  let fixture: ComponentFixture<OverallQuesTickReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallQuesTickReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallQuesTickReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
