import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrositeLeadsComponent } from './microsite-lead-report-by-domains.component';

describe('MicrositeLeadsComponent', () => {
  let component: MicrositeLeadsComponent;
  let fixture: ComponentFixture<MicrositeLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrositeLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrositeLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
