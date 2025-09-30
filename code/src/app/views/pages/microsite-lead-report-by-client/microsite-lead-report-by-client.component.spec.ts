import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrositeLeadReportByClientComponent } from './microsite-lead-report-by-client.component';

describe('MicrositeLeadReportByClientComponent', () => {
  let component: MicrositeLeadReportByClientComponent;
  let fixture: ComponentFixture<MicrositeLeadReportByClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrositeLeadReportByClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrositeLeadReportByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
