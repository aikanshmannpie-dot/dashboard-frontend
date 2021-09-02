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

@Component({
  selector: "kt-microsite-affiliate-report",
  templateUrl: "./microsite-affiliate-report.component.html",
  styleUrls: ["./microsite-affiliate-report.component.scss"],
})
export class MicrositeAffiliateReportComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  dataSourceExport: MatTableDataSource<any>;
  dataSource1;
  avaible = false;
  loading = false;
  model1;
  siteName;
  endDate;
  startDate;
  globalFilter = "";
  offset = 0;
  isSelected;
  siteListingData;
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
  @ViewChild("content", { static: true }) content: ElementRef;

  @ViewChild("pdfTable", { static: false }) pdfTable: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns: string[] = [
    "index",
    "Site_name",
    "affiliate",
    "conversion",
  ];
  displayedColumns1: string[] = [
    "index",
    "Site_name",
    "affiliate",
    "conversion",
    "query_string",
  ];
  columnIds = [];
  offsetPlus = 0;
  constructor(private auth: AuthService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource([]);
    this.dataSourceExport = new MatTableDataSource([]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.startDate = moment(new Date()).format("YYYY-MM-DD");
    this.endDate = moment(new Date()).format("YYYY-MM-DD");
    this.getMicrositeAffiliateReport(this.startDate, this.startDate);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  sortColumn(data) {
    this.dataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };

  searchRange() {
    this.endDate = this.model1.end
      ? moment(this.model1.end._d).format("YYYY-MM-DD")
      : moment(new Date()).format("YYYY-MM-DD");
    this.startDate = this.model1.start
      ? moment(this.model1.start._d).format("YYYY-MM-DD")
      : moment(new Date()).format("YYYY-MM-DD");
    if (this.startDate) {
      this.getMicrositeAffiliateReport(this.startDate, this.endDate);
    } else {
      this.getMicrositeAffiliateReport(this.startDate, this.endDate);
    }
  }

  getMicrositeAffiliateReport(start, end) {
    var vm = this;
    this.loading = true;
    this.avaible = false;
    this.dataSource = new MatTableDataSource([]);
    this.dataSourceExport = new MatTableDataSource([]);
    this.siteName = this.isSelected ? this.isSelected : undefined;
    this.auth.getMicrositeAffiliateReport(start, end).subscribe(
      (data) => {
        if (data) {
          this.avaible = true;
          this.dataSource = new MatTableDataSource(data.apiData);
          this.dataSourceExport = new MatTableDataSource(data.apiExportData);
          this.dataSource1 = data.body;
          this.dataSource.paginator = this.paginator;
          this.loading = false;
        } else {
        }
        // Main page
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
