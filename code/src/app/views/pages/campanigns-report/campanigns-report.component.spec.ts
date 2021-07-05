import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanignsReportComponent } from './campanigns-report.component';

describe('CampanignsReportComponent', () => {
  let component: CampanignsReportComponent;
  let fixture: ComponentFixture<CampanignsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanignsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanignsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
