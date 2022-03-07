import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TeleconnexDailyProgressReportComponent } from "./teleconnex-daily-progress-report.component";

describe("TeleconnexDailyProgressReportComponent", () => {
  let component: TeleconnexDailyProgressReportComponent;
  let fixture: ComponentFixture<TeleconnexDailyProgressReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeleconnexDailyProgressReportComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeleconnexDailyProgressReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
