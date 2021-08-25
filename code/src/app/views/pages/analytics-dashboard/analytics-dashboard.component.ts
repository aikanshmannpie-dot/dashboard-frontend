import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { delay, finalize, take, tap } from 'rxjs/operators';
import { AuthNoticeService, AuthService, Login } from "../../../core/auth";
import * as Highcharts from 'highcharts';

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

  activeLastWeekLoading = false;
  activeMonthlyLoading = false;
  repeatWeeklyLoading = false;

  constructor(
    private auth: AuthService,
    private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getPhoneLeads();
    this.getActiveLastWeek();
    this.getActiveMonthly();
    this.getRepeatWeekly();
  }

  getRepeatWeekly() {
    this.repeatWeeklyLoading = true;
    this.auth.getRepeatWeekly().pipe(tap((res) => {
      if (res && res.status === 200) {
        let seriesData: Array<number> = res.apiData.map((x: { count: any; }) => { return Number(x.count) });
        Highcharts.chart('repeatWeekly', {
          chart: {
            type: "line",
          },
          title: {
            text: "Repeated Users Monthly",
          },
          xAxis: {
            categories: res.apiData.map((x: { date: any; }) => { return x.date }),
          },
          yAxis: {
            title: {
              text: "Repeated Users Report",
            },
          },
          series: [
            {
              name: "Repeated Users Report",
              data: seriesData,
              type: undefined,
            },
            {
              name: "average",
              data: Array.from({ length: seriesData.length }).map(x => seriesData.reduce((a, b) => (a + b)) / seriesData.length),
              type: undefined,
              lineColor: 'red'
            }
          ],
          credits: {
            enabled: false,
          },
        })
      }
    }),
      finalize(() => {
        this.repeatWeeklyLoading = false;
        this.cdr.detectChanges();
      })).subscribe();
  }

  getActiveMonthly() {
    this.activeMonthlyLoading = true;
    this.auth.getActiveMonthly().pipe(tap((res) => {
      if (res && res.status === 200) {
        let seriesData: Array<number> = res.apiData.map((x: { count: any; }) => { return Number(x.count) });
        Highcharts.chart('activeMonthly', {
          chart: {
            type: "line",
          },
          title: {
            text: "Active Users Monthly",
          },
          xAxis: {
            categories: res.apiData.map((x: { date: any; }) => { return x.date }),
          },
          yAxis: {
            title: {
              text: "Active Users Report",
            },
          },
          series: [
            {
              name: "Active Users Report",
              data: seriesData,
              type: undefined,
            },
            {
              name: "average",
              data: Array.from({ length: seriesData.length }).map(x => seriesData.reduce((a, b) => (a + b)) / seriesData.length),
              type: undefined,
              lineColor: 'red'
            }
          ],
          credits: {
            enabled: false,
          },
        })
      }
    }),
      finalize(() => {
        this.activeMonthlyLoading = false;
        this.cdr.detectChanges();
      })).subscribe();
  }

  getActiveLastWeek() {
    this.activeLastWeekLoading = true;
    this.auth.getActiveLastWeek().pipe(tap((res) => {
      if (res && res.status === 200) {
        let seriesData: Array<number> = res.apiData.map((x: { count: any; }) => { return Number(x.count) });
        Highcharts.chart('activeLastWeek', {
          chart: {
            type: "line",
          },
          title: {
            text: "Active User Last Week",
          },
          xAxis: {
            categories: res.apiData.map((x: { date: any; }) => { return x.date }),
          },
          yAxis: {
            title: {
              text: "Active Users Report",
            },
          },
          series: [
            {
              name: "Active Users Report",
              data: seriesData,
              type: undefined,
            },
            {
              name: "Average",
              data: Array.from({ length: seriesData.length }).map(x => seriesData.reduce((a, b) => (a + b)) / seriesData.length),
              type: undefined,
              lineColor: 'red'
            },
          ],
          credits: {
            enabled: false,
          },
        })
      }
    }),
      finalize(() => {
        this.activeLastWeekLoading = false;
        console.log('activeLastWeekLoading', this.activeLastWeekLoading)

        this.cdr.detectChanges();
      })).subscribe();
  }

  getPhoneLeads() {
    this.totalLeadsByPhoneIsLoading = true;
    this.auth.getTotalLeadsByPhone('').pipe(tap((res) => {
      if (res && res.status === 200) {
        this.totalLeadsByPhoneEmitter$.next(res.apiData[0].count)
      }
    }), finalize(() => {
      this.totalLeadsByPhoneIsLoading = false;
      this.cdr.detectChanges();
    })).subscribe();

    this.totalLeadsAcqByPhoneIsLoading = true;
    this.auth.getTotalLeadsByPhone('acq').pipe(tap((res) => {
      if (res && res.status === 200) {
        this.totalLeadsByPhoneAcqEmitter$.next(res.apiData[0].count);
      }
    }), finalize(() => {
      this.totalLeadsAcqByPhoneIsLoading = false;
      this.cdr.detectChanges();
    })).subscribe();

    this.totalLeadsPartnerByPhoneIsLoading = true;
    this.auth.getTotalLeadsByPhone('partner').pipe(tap((res) => {
      if (res && res.status === 200) {
        this.totalLeadsByPhonePartnerEmitter$.next(res.apiData[0].count);
      }
    }), finalize(() => {
      this.totalLeadsPartnerByPhoneIsLoading = false;
      this.cdr.detectChanges();
    })).subscribe();
  }
}
