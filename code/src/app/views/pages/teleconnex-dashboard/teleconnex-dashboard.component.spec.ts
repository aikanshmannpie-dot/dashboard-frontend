import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleconnexDashboardComponent } from './teleconnex-dashboard.component';

describe('TeleconnexDashboardComponent', () => {
  let component: TeleconnexDashboardComponent;
  let fixture: ComponentFixture<TeleconnexDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeleconnexDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeleconnexDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
