import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TeleconnexDailyProgressCoReportComponent } from "./teleconnex-daily-progress-co-report.component";

describe("TeleconnexDailyProgressCoReportComponent", () => {
  let component: TeleconnexDailyProgressCoReportComponent;
  let fixture: ComponentFixture<TeleconnexDailyProgressCoReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeleconnexDailyProgressCoReportComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeleconnexDailyProgressCoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
