// Angular
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from "@angular/core";
// Lodash
import { shuffle } from "lodash";
// Services
// Widgets model
import {
  LayoutConfigService,
  SparklineChartOptions,
} from "../../../core/_base/layout";
import { Widget4Data } from "../../partials/content/widgets/widget4/widget4.component";
import { AuthNoticeService, AuthService, Login } from "../../../core/auth";
import { Observable, Subject } from "rxjs";
import { finalize, takeUntil, tap } from "rxjs/operators";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
// import highcharts from 'highcharts';
// import * as Highcharts from 'highcharts/highcharts';
import * as Highcharts from "highcharts/highstock";
import moment from "moment";
import HC_exporting from "highcharts/modules/exporting";
// import HC_exportData from 'highcharts/modules/export-data';
// HC_exportData(Highcharts);
// import * as Highcharts1 from 'highcharts/highstock';
import HC_exportData from "highcharts/modules/export-data";
HC_exportData(Highcharts);

// import * as Highcharts from 'highcharts/highstock';

HC_exporting(Highcharts);
import highcharts3D from "highcharts/highcharts-3d";
highcharts3D(Highcharts);

import { Router } from "@angular/router";
@Component({
  selector: "kt-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  chartOptions1: SparklineChartOptions;
  chartOptions2: SparklineChartOptions;
  chartOptions3: SparklineChartOptions;
  chartOptions4: SparklineChartOptions;
  widget4_1: Widget4Data;
  widget4_2: Widget4Data;
  widget4_3: Widget4Data;
  widget4_4: Widget4Data;
  loading = false;
  avaible = true;
  dataSource;
  campanignsData;
  model1 = { start: moment().subtract(6, "days"), end: moment() };
  endDate;
  startDate;
  getAffilategraphData;
  gpGraphData;
  dataSourceValue;
  dataSource1;
  loading1 = false;
  globalFilter = "";
  avaible1 = true;
  search = true;
  download = true;
  countrySelected = "au";
  searchButton() {
    this.search = !this.search;
  }
  downloadButton() {
    this.download = !this.download;
  }

  // Exporting(Highcharts);

  ranges: any = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    "Last 7 Days": [moment().subtract(7, "days"), moment().subtract(1, "days")],
    "Last 30 Days": [moment().subtract(30, "days"), moment().subtract(1, "days")],
    "This Month": [moment().startOf("month"), moment().endOf("month")],
    "Last Month": [
      moment().subtract(1, "month").startOf("month"),
      moment().subtract(1, "month").endOf("month"),
    ],
  };

  getClickDatagraphData: any;
  getClickDataAcgraphData: any;
  lineChartagraphData: any;
  sourceReportList: any;
  @ViewChild("pdfTable", { static: false }) pdfTable: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild('sort1', { static: true }) sort: MatSort;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns: string[] = ["Sr.No", "Description", "Total"];
  columnIds = [];
  constructor(
    private layoutConfigService: LayoutConfigService,
    private auth: AuthService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    var newDate = moment(this.model1.start).format("YYYY-MM-DD");
    var lastWeekDate = moment(this.model1.end).format("YYYY-MM-DD");

    this.getOverAllReport(newDate, lastWeekDate);
    this.getCampanigns(newDate, lastWeekDate);
    this.getAffilateData(newDate, lastWeekDate);
    this.getClickData(newDate, lastWeekDate);
    this.getClickDataAc(newDate, lastWeekDate);
    this.getLineChartData(newDate, lastWeekDate);
    this.getGpCorag(newDate, lastWeekDate);
    this.getSourceByReport(newDate, lastWeekDate);
    this.getLeftSideDataTable(newDate, lastWeekDate);
    this.dataSourceValue.filterPredicate = this.customFilterPredicate();
  }

  sortColumn(data) {
    this.dataSourceValue.sort = this.sort;
  }

  customFilterPredicate() {
    const myFilterPredicate = (data: any, filter: any): boolean => {
      var globalMatch = !this.globalFilter;
      if (this.globalFilter) {
        // search all text fields
        globalMatch =
          data.Description.toString()
            .trim()
            .toLowerCase()
            .indexOf(this.globalFilter.toLowerCase()) !== -1;
      }

      if (!globalMatch) {
        return;
      }
      let searchString = JSON.parse(filter);
      return (
        data.Description.toString().trim().indexOf(searchString.Description) !==
          -1 && data.Total.toString().trim().indexOf(searchString.Total) !== -1
      );
    };
    return myFilterPredicate;
  }
  public doFilter = (value: string) => {
    this.dataSourceValue.filter = value.trim().toLocaleLowerCase();
  };

  searchRange() {
    this.endDate = this.model1.end
      ? moment(this.model1.end).format("YYYY-MM-DD")
      : moment(new Date()).format("YYYY-MM-DD");
    this.startDate = this.model1.start
      ? moment(this.model1.start).format("YYYY-MM-DD")
      : moment(new Date()).format("YYYY-MM-DD");
    if (this.startDate) {
      // this.getAllApiData("2020-01-20", "2020-01-25");
      this.getOverAllReport(this.startDate, this.endDate);
      this.getCampanigns(this.startDate, this.endDate);
      this.getAffilateData(this.startDate, this.endDate);
      this.getClickData(this.startDate, this.endDate);
      this.getClickDataAc(this.startDate, this.endDate);
      this.getLineChartData(this.startDate, this.endDate);
      this.getGpCorag(this.startDate, this.endDate);
      this.getSourceByReport(this.startDate, this.endDate);
      this.getLeftSideDataTable(this.startDate, this.endDate);
      // this.auth.getDashBoardData(this.startDate, this.endDate, undefined, "dashboard");
    } else {
      // this.getAllApiData("2020-01-20", "2020-01-25");
      // this.auth.getDashBoardData(this.startDate, this.endDate, undefined, "dashboard");
      this.getOverAllReport(this.startDate, this.endDate);
      this.getCampanigns(this.startDate, this.endDate);
      this.getAffilateData(this.startDate, this.endDate);
      this.getClickData(this.startDate, this.endDate);
      this.getClickDataAc(this.startDate, this.endDate);
      this.getLineChartData(this.startDate, this.endDate);
      this.getGpCorag(this.startDate, this.endDate);
      this.getSourceByReport(this.startDate, this.endDate);
      this.getLeftSideDataTable(this.startDate, this.endDate);
    }
  }

  getAllApiData(start, end) {
    const report_type = this.router.url.includes("/2") ? "2" : "1";

    this.auth
      .getAllApiData(start, end, report_type)
      .pipe(
        tap((data) => {
          if (data) {
            let overAllCLickGraph = data.apiData[0].body.graphData;
            let sourceByReportGraph = data.apiData[1].body.graphData;
            let gpReportGraph = data.apiData[2].body.graphData;
            let affiliateByReportGraph = data.apiData[3].body.graphData;
            let overAllReportGraph = data.apiData[4].body.graphData;
            let lineChartDataGraph = data.apiData[5].body.graphData;
            let campaignsReportGraph = data.apiData[6].body.graphData;
            let overallTickAc = data.apiData[7].body.graphData;
            // let overAllCLickGraph = data.apiData[0].body.graphData;
          } else {
          }
        }),
        finalize(() => {
          this.avaible = true;
          this.loading = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }

  getLeftSideDataTable(start, end) {
    var vm = this;
    this.loading1 = true;
    this.avaible1 = false;
    this.gpGraphData = "";
    this.dataSourceValue = new MatTableDataSource([]);
    const report_type = this.router.url.includes("/2") ? "2" : "1";
    this.auth
      .getLeftSideDataTable(start, end, report_type,this.countrySelected)
      .pipe(
        tap((data) => {
          if (data) {
            this.avaible1 = true;
            this.dataSourceValue = new MatTableDataSource(data.apiData);
            this.dataSource1 = data.body;
            this.dataSourceValue.paginator = this.paginator;
            this.loading1 = false;
          }
        }),
        finalize(() => {
          this.avaible1 = true;
          this.loading1 = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }

  getGpCorag(start, end) {
    var vm = this;
    this.loading = true;
    this.avaible = false;
    this.gpGraphData = "";
    document.getElementById("container8").style.display = "none";
    const report_type = this.router.url.includes("/2") ? "2" : "1";
    this.auth
      .getGpCorag(start, end, report_type,this.countrySelected)
      .pipe(
        tap((data) => {
          if (data) {
            document.getElementById("container8").style.display = "block";
            this.gpGraphData = data.graphData;

            Highcharts.chart("container8", {
              chart: {
                type: "line",
              },
              title: {
                text: "GP Report (Coreg/Clickout)",
              },
              xAxis: {
                categories: this.gpGraphData.label,
              },
              yAxis: {
                title: {
                  text: "GP Report",
                },
              },
              series: [
                {
                  name: "GP Report",
                  data: this.gpGraphData.y,
                  type: undefined,
                },
              ],
              credits: {
                enabled: false,
              },
            });
          } else {
          }
        }),
        finalize(() => {
          this.avaible = true;
          this.loading = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }

  getLineChartData(start, end) {
    var vm = this;
    this.loading = true;
    this.avaible = false;
    document.getElementById("container6").style.display = "none";
    document.getElementById("container7").style.display = "none";
    this.lineChartagraphData = "";
    const report_type = this.router.url.includes("/2") ? "2" : "1";
    this.auth
      .getLineChart(start, end, report_type,this.countrySelected)
      .pipe(
        tap((data) => {
          if (data) {
            this.lineChartagraphData = data.apiData;
            document.getElementById("container6").style.display = "block";
            document.getElementById("container7").style.display = "block";

            Highcharts.chart("container6", {
              chart: {
                type: "line",
              },
              title: {
                text: "ARPE by Day (Coreg/Clickout)",
              },
              xAxis: {
                categories: this.lineChartagraphData.label,
              },
              yAxis: {
                title: {
                  text: "ARPE by Day",
                },
              },
              series: [
                {
                  name: "Unique Verified Email Lead ARPE",
                  data: this.lineChartagraphData.dataychartALLUnicArepVryfied,
                  type: undefined,
                },
                {
                  name: "Unique Non Verified Email Lead ARPE",
                  data: this.lineChartagraphData
                    .dataychartALLUnicArepNonVryfied,
                  type: undefined,
                },
                {
                  name: "ALL Unique Email Lead ARPE",
                  data: this.lineChartagraphData.dataychartALLUnicArep,
                  type: undefined,
                },
              ],
              credits: {
                enabled: false,
              },
            });

            Highcharts.chart("container7", {
              chart: {
                type: "line",
              },
              title: {
                text: "Unique Email Lead Volumes (Coreg/Clickout)",
              },
              xAxis: {
                categories: this.lineChartagraphData.label,
              },
              yAxis: {
                title: {
                  text: "Unique Email Lead Volumes",
                },
              },

              series: [
                {
                  name: "Unique Verified Email Lead Volumes",
                  data: this.lineChartagraphData.dataychartALLUnicVryfied,
                  type: undefined,
                },
                {
                  name: "Unique Non Verified Email Lead Volumes",
                  data: this.lineChartagraphData.dataychartALLUnicNonVryfied,
                  type: undefined,
                },
                {
                  name: "ALL Unique Email Lead Volumes",
                  data: this.lineChartagraphData.dataychartALLUnic,
                  type: undefined,
                },
              ],
              credits: {
                enabled: false,
              },
            });
          } else {
          }
        }),
        finalize(() => {
          this.avaible = true;
          this.loading = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }

  getClickData(start, end) {
    var vm = this;
    this.loading = true;
    this.avaible = false;
    this.getClickDatagraphData = "";
    document.getElementById("container4").style.display = "none";
    const report_type = this.router.url.includes("/2") ? "2" : "1";
    this.auth
      .getTicksGraph(start, end, report_type,this.countrySelected)
      .pipe(
        tap((data) => {
          if (data) {
            document.getElementById("container4").style.display = "block";

            this.getClickDatagraphData = data.graphData;
            Highcharts.chart("container4", {
              chart: {
                type: "pie",
                options3d: {
                  enabled: true,
                  alpha: 45,
                  beta: 0,
                },
              },
              title: {
                text: "Overall Ticks",
              },
              tooltip: {
                pointFormat: "{point.label}: <b>{point.y:.1f}%</b>",
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
                  data: this.getClickDatagraphData,
                  type: undefined,
                },
              ],
              credits: {
                enabled: false,
              },
            });
          } else {
          }
        }),
        finalize(() => {
          this.avaible = true;
          this.loading = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }

  getClickDataAc(start, end) {
    var vm = this;
    this.loading = true;
    this.avaible = false;
    this.getClickDataAcgraphData = "";
    document.getElementById("container5").style.display = "none";
    const report_type = this.router.url.includes("/2") ? "2" : "1";
    this.auth
      .getTicksGraphAc(start, end, report_type,this.countrySelected)
      .pipe(
        tap((data) => {
          if (data) {
            document.getElementById("container5").style.display = "block";

            this.getClickDataAcgraphData = data.graphData;
            Highcharts.chart("container5", {
              chart: {
                type: "pie",
                options3d: {
                  enabled: true,
                  alpha: 45,
                  beta: 0,
                },
              },
              title: {
                text: "Overall Ticks Aquirely",
              },
              tooltip: {
                pointFormat: "{point.label}: <b>{point.y:.1f}%</b>",
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
                  data: this.getClickDataAcgraphData,
                  type: undefined,
                },
              ],
              credits: {
                enabled: false,
              },
            });
          } else {
          }
        }),
        finalize(() => {
          this.avaible = true;
          this.loading = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }
  CountryChangingValue(data){
    this.countrySelected = data.target.value;
  }
  getAffilateData(start, end) {
    var vm = this;
    this.loading = true;
    this.avaible = false;
    this.getAffilategraphData = "";
    document.getElementById("container3").style.display = "none";
    const report_type = this.router.url.includes("/2") ? "2" : "1";
    this.auth
      .getAffilate(start, end, "dashboard", report_type, this.countrySelected)
      .pipe(
        tap((data) => {
          if (data) {
            this.getAffilategraphData = data.graphData;
            document.getElementById("container3").style.display = "block";

            Highcharts.chart("container3", {
              chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: "pie",
              },
              title: {
                text: "Revenue Share By Affiliate",
              },
              tooltip: {
                enabled: false,
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
                  dataLabels: {
                    enabled: true,
                    format: "<b>{point.label}</b>: {point.y:.1f} %",
                  },
                  point: {
                    events: {
                      // click: function () {
                      // 	window.open("demoreport-betaDAS4.php?affid=" + this.matid);
                      // }
                    },
                  },
                },
              },
              series: [
                {
                  name: "Brands",
                  colorByPoint: true,
                  innerSize: "70%",
                  data: this.getAffilategraphData,
                  type: undefined,
                },
              ],
              credits: {
                enabled: false,
              },
            });
          } else {
          }
        }),
        finalize(() => {
          this.avaible = true;
          this.loading = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }

  getCampanigns(start, end) {
    var vm = this;
    this.loading = true;
    this.avaible = false;
    this.campanignsData = "";
    document.getElementById("container1").style.display = "none";
    const report_type = this.router.url.includes("/2") ? "2" : "1";

    this.auth
      .getCampanigns(start, end, "dashboard", report_type, "undefined", this.countrySelected)
      .pipe(
        tap((res) => {
          if (res) {
            this.avaible = true;
            document.getElementById("container1").style.display = "block";
            this.campanignsData = res.graphData;
            Highcharts.chart("container1", {
              chart: {
                type: "column",
              },
              title: {
                text: "Daily Revenue By Campaigns",
              },

              xAxis: {
                categories: this.campanignsData.label,
                crosshair: true,
              },
              yAxis: {
                min: 0,
                title: {
                  text: "Revenue (A$)",
                },
              },
              tooltip: {
                headerFormat:
                  '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat:
                  '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: "</table>",
                shared: true,
                useHTML: true,
              },
              plotOptions: {
                column: {
                  pointPadding: 0.2,
                  borderWidth: 0,
                },
              },
              series: [
                {
                  //   name: 'Tokyo',
                  name: "Campaigns",
                  data: this.campanignsData.y,
                  type: undefined,
                },
              ],
              credits: {
                enabled: false,
              },
            });
            this.loading = false;
            // vm.showTable();
          } else {
          }
        }),
        finalize(() => {
          this.avaible = true;
          this.loading = false;
          // this.dataSource.paginator = this.paginator;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }

  getOverAllReport(start, end) {
    var vm = this;
    this.loading = true;
    this.avaible = false;
    this.dataSource = "";
    document.getElementById("container").style.display = "none";
    const report_type = this.router.url.includes("/2") ? "2" : "1";
    this.auth
      .getOverAllReport(start, end, "dashboard", report_type, "undefined", this.countrySelected)
      .pipe(
        tap((res) => {
          if (res) {
            this.avaible = true;
            document.getElementById("container").style.display = "block";

            //   this.dataSource = new MatTableDataSource(user.apiData);
            this.dataSource = res.graphData;
            Highcharts.chart("container", {
              chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: "column",
              },
              title: {
                text: "Overall Rev by Product",
              },
              xAxis: {
                categories: [
                  this.dataSource[0].label,
                  this.dataSource[1].label,
                ],
                crosshair: true,
              },
              tooltip: {
                pointFormat: "<b>{point.y}</b>",
              },
              plotOptions: {
                column: {
                  pointPadding: 0.2,
                  borderWidth: 0,
                  allowPointSelect: true,
                  cursor: "pointer",
                  dataLabels: {
                    enabled: true,
                    //format: '<b>{point.camptotal}</b>: {point.y}',
                    format: "{point.y}(A$)",
                  },
                  point: {
                    events: {
                      // click: function () {
                      // 	window.open("demoreport-betaDAS5.php");
                      // }
                    },
                  },
                },
              },
              series: [
                {
                  name: "Overall Rev by Product",
                  colorByPoint: true,
                  data: [this.dataSource[0].y, this.dataSource[1].y],
                  type: undefined,
                },
              ],
              credits: {
                enabled: false,
              },
            });
            //   this.dataSource.paginator = this.paginator;
            this.loading = false;
            // vm.showTable();
          } else {
          }
        }),
        finalize(() => {
          this.avaible = true;
          this.loading = false;
          // this.dataSource.paginator = this.paginator;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }

  getSourceByReport(start, end) {
    var vm = this;
    this.loading = true;
    this.avaible = false;
    this.sourceReportList = "";
    // Highcharts.chart().destroy();
    // var chart = new Highcharts.Chart({});
    // chart.destroy();
    document.getElementById("container10").style.display = "none";
    const report_type = this.router.url.includes("/2") ? "2" : "1";
    this.auth
      .getSourceReportGraph(start, end, undefined, "dashboard", report_type,this.countrySelected)
      .pipe(
        tap((res) => {
          if (res) {
            this.sourceReportList = res.graphData;
            document.getElementById("container10").style.display = "block";
            Highcharts.chart("container10", {
              chart: {
                type: "pie",
                options3d: {
                  enabled: true,
                  alpha: 30,
                },
              },
              title: {
                text: "Revenue Share By Source",
              },
              plotOptions: {
                pie: {
                  innerSize: 45,
                  depth: 45,
                },
              },
              series: [
                {
                  name: "sources",
                  data: this.sourceReportList,
                  type: undefined,
                  dataLabels: {
                    enabled: true,
                    format: "<b>{point.label}</b>: {point.y:.1f} %",
                  },
                },
              ],
              credits: {
                enabled: false,
              },
            });
          } else {
          }
        }),
        finalize(() => {
          this.avaible = true;
          this.loading = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }
}
