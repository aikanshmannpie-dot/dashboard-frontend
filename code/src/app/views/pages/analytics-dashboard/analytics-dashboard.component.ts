import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { delay, finalize, take, tap } from "rxjs/operators";
import { AuthNoticeService, AuthService, Login } from "../../../core/auth";
import * as Highcharts from "highcharts";
import h3 from "highcharts/highcharts-3d";
h3(Highcharts);

import cy from "highcharts/modules/cylinder";
cy(Highcharts);

import f3d from "highcharts/modules/funnel3d";
f3d(Highcharts);

@Component({
  selector: "kt-analytics-dashboard",
  templateUrl: "./analytics-dashboard.component.html",
  styleUrls: ["./analytics-dashboard.component.scss"],
})
export class AnalyticsDashboardComponent implements OnInit {
  activeLastWeekLoading = false;
  activeMonthlyLoading = false;
  repeatWeeklyLoading = false;
  funnelLoading = false;
  genderGraphLoading = false;

  constructor(private auth: AuthService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.getActiveLastWeek();
    this.getActiveMonthly();
    this.getRepeatWeekly();
    this.getAllLeads();
    this.getGenderData();
  }

  getGenderData() {
    this.genderGraphLoading = true;
    this.auth
      .getGenderCount()
      .pipe(
        tap((res) => {
          if (res && res.status === 200) {
            let total = 0;
            let seriesData = res.apiData.map(
              (x: { sum_male: any; sum_female: any }) => {
                total = Number(x.sum_male) + Number(x.sum_female);
                return [
                  {
                    name: "Males",
                    y: (100 * Number(x.sum_male)) / total,
                  },
                  {
                    name: "Females",
                    y: (100 * Number(x.sum_female)) / total,
                  },
                ];
              }
            )[0];

            console.log(seriesData);
            Highcharts.chart("genderGraph", {
              chart: {
                type: "pie",
                options3d: {
                  enabled: true,
                  alpha: 45,
                  beta: 0,
                },
              },
              title: {
                text: "Gender wise spread",
              },
              tooltip: {
                pointFormat: "{point.label}:<b>{point.y:.1f}%</b>",
              },
              accessibility: {
                point: {
                  valueSuffix: "%",
                },
              },
              plotOptions: {
                pie: {
                  allowPointSelect: true,
                  cursor: "pointer",
                  depth: 35,
                  dataLabels: {
                    enabled: true,
                    format: "<b>{point.label}</b>: {point.y:.1f} %",
                  },
                  point: {
                    events: {
                      // click: function () {
                      // 	window.open("demoreport-betaDAS7.php");
                      // }
                    },
                  },
                },
              },
              series: [
                {
                  name: "Ticks",
                  colorByPoint: true,
                  data: seriesData,
                  type: undefined,
                },
              ],
              credits: {
                enabled: false,
              },
            });
          }
        }),
        finalize(() => {
          this.genderGraphLoading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe();
  }

  getRepeatWeekly() {
    this.repeatWeeklyLoading = true;
    this.auth
      .getRepeatWeekly()
      .pipe(
        tap((res) => {
          if (res && res.status === 200) {
            let seriesData: Array<number> = res.apiData.map(
              (x: { count: any }) => {
                return Number(x.count);
              }
            );
            Highcharts.chart("repeatWeekly", {
              chart: {
                type: "line",
              },
              title: {
                text: "Repeat signups per week",
              },
              xAxis: {
                categories: res.apiData.map((x: { date: any }) => {
                  return x.date;
                }),
              },
              yAxis: {
                title: {
                  text: "Repeat signups per week",
                },
              },
              series: [
                {
                  name: "Repeat signups per week",
                  data: seriesData,
                  type: undefined,
                },
                {
                  name: "average",
                  data: Array.from({ length: seriesData.length }).map(
                    (x) =>
                      seriesData.reduce((a, b) => a + b) / seriesData.length
                  ),
                  type: undefined,
                  lineColor: "red",
                },
              ],
              credits: {
                enabled: false,
              },
            });
          }
        }),
        finalize(() => {
          this.repeatWeeklyLoading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe();
  }

  getActiveMonthly() {
    this.activeMonthlyLoading = true;
    this.auth
      .getActiveMonthly()
      .pipe(
        tap((res) => {
          if (res && res.status === 200) {
            let seriesData: Array<number> = res.apiData.map(
              (x: { count: any }) => {
                return Number(x.count);
              }
            );
            Highcharts.chart("activeMonthly", {
              chart: {
                type: "line",
              },
              title: {
                text: "Month wise unique active users",
              },
              xAxis: {
                categories: res.apiData.map((x: { date: any }) => {
                  return x.date;
                }),
              },
              yAxis: {
                title: {
                  text: "Month wise unique active users",
                },
              },
              series: [
                {
                  name: "Month wise unique active users",
                  data: seriesData,
                  type: undefined,
                },
                {
                  name: "average",
                  data: Array.from({ length: seriesData.length }).map(
                    (x) =>
                      seriesData.reduce((a, b) => a + b) / seriesData.length
                  ),
                  type: undefined,
                  lineColor: "red",
                },
              ],
              credits: {
                enabled: false,
              },
            });
          }
        }),
        finalize(() => {
          this.activeMonthlyLoading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe();
  }

  getActiveLastWeek() {
    this.activeLastWeekLoading = true;
    this.auth
      .getActiveLastWeek()
      .pipe(
        tap((res) => {
          if (res && res.status === 200) {
            let seriesData: Array<number> = res.apiData.map(
              (x: { count: any }) => {
                return Number(x.count);
              }
            );
            Highcharts.chart("activeLastWeek", {
              chart: {
                type: "line",
              },
              title: {
                text: "Weekly Unique active users",
              },
              xAxis: {
                categories: res.apiData.map((x: { date: any }) => {
                  return x.date;
                }),
              },
              yAxis: {
                title: {
                  text: "Weekly Unique active users",
                },
              },
              series: [
                {
                  name: "Weekly Unique active users",
                  data: seriesData,
                  type: undefined,
                },
                {
                  name: "Average",
                  data: Array.from({ length: seriesData.length }).map(
                    (x) =>
                      seriesData.reduce((a, b) => a + b) / seriesData.length
                  ),
                  type: undefined,
                  lineColor: "red",
                },
              ],
              credits: {
                enabled: false,
              },
            });
          }
        }),
        finalize(() => {
          this.activeLastWeekLoading = false;
          console.log("activeLastWeekLoading", this.activeLastWeekLoading);

          this.cdr.detectChanges();
        })
      )
      .subscribe();
  }

  getAllLeads() {
    this.funnelLoading = true;
    this.auth
      .getTotalUniqueLeadsAcquirelyAll()
      .pipe(
        tap((res) => {
          if (res && res.status === 200) {
            let funnelData: [[string, number]] = [
              [
                "Unique leads",
                res.apiData.map((x: { sum: any }) => {
                  return Number(x.sum);
                })[0],
              ],
            ];
            this.funnelLoading = false;
            let chart = Highcharts.chart(
              "container",
              {
                chart: {
                  type: "funnel3d",
                  animation: {
                    duration: 3000,
                    //defer: 100,
                  },
                  options3d: {
                    enabled: true,
                    alpha: 10,
                    depth: 50,
                    viewDistance: 50,
                  },
                },
                title: {
                  text: "Highcharts Funnel3D Chart",
                },
                plotOptions: {
                  funnel3d: {
                    dataLabels: {
                      enabled: true,
                      format: "<b>{point.name}</b> ({point.y:,.0f})",
                      allowOverlap: true,
                      y: 10,
                    },
                    // animation: {
                    //   defer: 100,
                    // },
                    neckWidth: "30%",
                    neckHeight: "25%",
                    width: "80%",
                    height: "80%",
                  },
                },
                series: [
                  {
                    name: "Unique users",
                    data: funnelData,
                    type: "funnel3d",
                    // animation: {
                    //   duration: 2500,
                    //   defer: 100,
                    // },
                  },
                ],
                credits: {
                  enabled: false,
                },
              },
              null
            );

            this.auth
              .getTotalUniqueLeadsAcquirelyPartners()
              .pipe(
                tap((res) => {
                  if (res && res.status === 200) {
                    funnelData.push([
                      "Unique leads Partners",
                      res.apiData.map((x: { sum: any }) => {
                        return Number(x.sum);
                      })[0],
                    ]);
                    chart.series[0].setData(funnelData, true);

                    this.auth
                      .getTotalUniqueLeadsAcquirely()
                      .pipe(
                        tap((res) => {
                          if (res && res.status === 200) {
                            funnelData.push([
                              "Unique leads Acquirely",
                              res.apiData.map((x: { sum: any }) => {
                                return Number(x.sum);
                              })[0],
                            ]);
                            chart.series[0].setData(funnelData, true);
                            this.auth
                              .getTotalUniqueLeadsTeleconnex()
                              .pipe(
                                tap((res) => {
                                  if (res && res.status === 200) {
                                    funnelData.push([
                                      "Unique leads Teleconnex",
                                      res.apiData.map((x: { sum: any }) => {
                                        return Number(x.sum);
                                      })[0],
                                    ]);
                                    chart.series[0].setData(funnelData, true);
                                  }
                                })
                              )
                              .subscribe();
                          }
                        })
                      )
                      .subscribe();
                  }
                })
              )
              .subscribe();
          }
        }),
        finalize(() => {
          this.activeLastWeekLoading = false;
          console.log("activeLastWeekLoading", this.activeLastWeekLoading);
          this.cdr.detectChanges();
        })
      )
      .subscribe();
  }
}
