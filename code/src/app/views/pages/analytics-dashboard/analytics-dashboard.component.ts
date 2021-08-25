import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { delay, finalize, take, tap } from 'rxjs/operators';
import { AuthNoticeService, AuthService, Login } from "../../../core/auth";

@Component({
  selector: 'kt-analytics-dashboard',
  templateUrl: './analytics-dashboard.component.html',
  styleUrls: ['./analytics-dashboard.component.scss']
})
export class AnalyticsDashboardComponent implements OnInit {
  totalLeadsByPhone: any = 0;
  totalLeadsByPhoneEmitter$ = new BehaviorSubject<any>(this.totalLeadsByPhone);
  totalLeadsByPhoneIsLoading = false;

  totalLeadsByPhoneAcq: any = 0;
  totalLeadsByPhoneAcqEmitter$ = new BehaviorSubject<any>(this.totalLeadsByPhoneAcq);
  totalLeadsAcqByPhoneIsLoading = false;

  totalLeadsByPhonePartner: any = 0;
  totalLeadsByPhonePartnerEmitter$ = new BehaviorSubject<any>(this.totalLeadsByPhonePartner);
  totalLeadsPartnerByPhoneIsLoading = false;

  constructor(
    private auth: AuthService,
    private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getPhoneLeads();
  }

  getPhoneLeads() {
    this.totalLeadsByPhoneIsLoading = true;
    this.auth.getTotalLeadsByPhone('').pipe(tap((res) => {
      this.totalLeadsByPhoneEmitter$.next(res.apiData[0].count);
    }), finalize(() => {
      this.totalLeadsByPhoneIsLoading = false;
      this.cdr.detectChanges();
    })).subscribe();

    this.totalLeadsAcqByPhoneIsLoading = true;
    this.auth.getTotalLeadsByPhone('acq').pipe(tap((res) => {
      this.totalLeadsByPhoneAcqEmitter$.next(res.apiData[0].count);
    }), finalize(() => {
      this.totalLeadsAcqByPhoneIsLoading = false;
      this.cdr.detectChanges();
    })).subscribe();

    this.totalLeadsPartnerByPhoneIsLoading = true;
    this.auth.getTotalLeadsByPhone('partner').pipe(tap((res) => {
      this.totalLeadsByPhonePartnerEmitter$.next(res.apiData[0].count);
    }), finalize(() => {
      this.totalLeadsPartnerByPhoneIsLoading = false;
      this.cdr.detectChanges();
    })).subscribe();
  }
}
