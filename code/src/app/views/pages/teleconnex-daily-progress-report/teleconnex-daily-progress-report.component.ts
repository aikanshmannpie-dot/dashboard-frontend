import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { AuthService } from "../../../core/auth";
import { finalize } from "rxjs/operators";
import moment from "moment";
import * as jsPDF from "jspdf";
import html2canvas from "html2canvas";
import * as jspdf from "jspdf";
import { Router } from "@angular/router";

@Component({
  selector: "table-expandable-rows-example",
  templateUrl: "./teleconnex-daily-progress-report.component.html",
  styleUrls: ["./teleconnex-daily-progress-report.component.scss"],
})
export class TeleconnexDailyProgressReportComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  dataSource1;
  dataSourceExport: MatTableDataSource<any>;
  dataSource1Export;
  avaible = false;
  loading = false;
  model1 = { start: moment().subtract(1, "days"), end: moment() };
  endDate;
  startDate;
  globalFilter = "";
  callcenterListingData = [];
  selectedValue = "8";
  report_type;
  areNoRecords = false;
  search = true;
  download = true;
  searchButton() {
    this.search = !this.search;
  }
  downloadButton() {
    this.download = !this.download;
  }

  ranges: any = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    "Last 7 Days": [moment().subtract(6, "days"), moment()],
    "Last 30 Days": [moment().subtract(29, "days"), moment()],
    "This Month": [moment().startOf("month"), moment().endOf("month")],
    "Last Month": [
      moment().subtract(1, "month").startOf("month"),
      moment().subtract(1, "month").endOf("month"),
    ],
  };
  filteredValues = {
    dateperiod: "",
    totalleads: "",
    totalrevenue: "",
    operationalcost: "",
  };

  @ViewChild("pdfTable", { static: false }) pdfTable: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild('sort1', { static: true }) sort: MatSort;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns: string[] = [
    "Sr.No",
    "dateperiod",
    "totalleads",
    "totalrevenue",
    "operationalcost",
  ];
  columnIds = [];
  constructor(
    private auth: AuthService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.report_type = this.router.url.includes("/2") ? "2" : "1";
    this.getCallcenterList();
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getReport1(
      moment(new Date()).subtract(1, "days").format("YYYY-MM-DD"),
      moment(new Date()).format("YYYY-MM-DD")
    );
    this.dataSource.filterPredicate = this.customFilterPredicate();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getCallcenterList() {
    this.auth.getCallcenterList().subscribe(
      (data) => {
        if (data) {
          console.log("ajggasgadcacfcfca", data);
          this.callcenterListingData = data.apiData;
        } else {
        }
      },
      (error) => {
        this.loading = false;
        this.cdr.markForCheck();
      }
    ),
      finalize(() => {
        this.avaible = true;
        this.loading = false;
        this.dataSource.paginator = this.paginator;
        this.cdr.markForCheck();
      });
  }

  ChangingValue(data) {
    this.selectedValue = data.target.value;
  }

  public downloadAsPDF() {
    var data = document.getElementById("pdfTable");
    html2canvas(data).then((canvas) => {
      var doc = new jsPDF("p", "mm", "a4");

      const contentDataURL = canvas.toDataURL("image/png");
      let pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
      var position = 0;
      var width = doc.internal.pageSize.getWidth();
      var height = doc.internal.pageSize.getHeight();
      pdf.addImage(contentDataURL, "PNG", 0, position, width, height);
      pdf.save("MYPdf.pdf"); // Generated PDF
    });
  }

  sortColumn(data) {
    this.dataSource.sort = this.sort;
  }

  showTable() {
    var vm = this;
    this.avaible = true;
    this.dataSource = new MatTableDataSource(this.dataSource1);
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };

  searchRange() {
    this.endDate = this.model1.end
      ? moment(this.model1.end).format("YYYY-MM-DD")
      : moment(new Date()).subtract(7, "days").format("YYYY-MM-DD");
    this.startDate = this.model1.start
      ? moment(this.model1.start).format("YYYY-MM-DD")
      : moment(new Date()).format("YYYY-MM-DD");
    if (this.startDate) {
      this.getReport1(this.startDate, this.endDate);
    } else {
      this.getReport1(this.startDate, this.endDate);
    }
  }

  customFilterPredicate() {
    const myFilterPredicate = (data: any, filter: any): boolean => {
      var globalMatch = !this.globalFilter;

      if (!globalMatch) {
        return;
      }
      let searchString = JSON.parse(filter);
      return (
        data.dateperiod.toString().trim().indexOf(searchString.dateperiod) !==
          -1 &&
        data.totalleads.toString().trim().indexOf(searchString.totalleads) !==
          -1 &&
        data.totalrevenue
          .toString()
          .trim()
          .indexOf(searchString.totalrevenue) !== -1 &&
        data.operationalcost
          .toString()
          .trim()
          .indexOf(searchString.operationalcost) !== -1
      );
    };
    return myFilterPredicate;
  }

  getReport1(start, end) {
    this.loading = true;
    this.avaible = false;
    this.dataSource = new MatTableDataSource([]);
    this.auth
      .getReport1(start, end, this.report_type, this.selectedValue)
      .subscribe(
        (data) => {
          {
            console.log(data);
          }
          if (data) {
            this.avaible = true;
            this.dataSource = new MatTableDataSource(data.apiData);
            this.dataSource1 = data.body;
            this.dataSource.paginator = this.paginator;
            this.loading = false;
          } else {
          }
        },
        (error) => {
          this.loading = false;

          this.cdr.markForCheck();
        }
      ),
      finalize(() => {
        this.avaible = true;
        this.loading = false;
        this.dataSource.paginator = this.paginator;
        this.cdr.markForCheck();
      });
  }
}
