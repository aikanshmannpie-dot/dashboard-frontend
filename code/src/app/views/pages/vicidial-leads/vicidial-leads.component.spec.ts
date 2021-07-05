import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VicidialLeadsComponent } from './vicidial-leads.component';

describe('VicidialLeadsComponent', () => {
  let component: VicidialLeadsComponent;
  let fixture: ComponentFixture<VicidialLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VicidialLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VicidialLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
