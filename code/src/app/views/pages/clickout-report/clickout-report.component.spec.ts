import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickoutReportComponent } from './clickout-report.component';

describe('ClickoutReportComponent', () => {
  let component: ClickoutReportComponent;
  let fixture: ComponentFixture<ClickoutReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickoutReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickoutReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
