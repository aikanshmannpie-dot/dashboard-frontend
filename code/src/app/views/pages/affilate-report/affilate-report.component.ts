import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { AuthNoticeService, AuthService, Login } from "../../../core/auth";
import { Observable, Subject } from "rxjs";
import { finalize, takeUntil, tap } from "rxjs/operators";
import moment from "moment";
import * as jsPDF from "jspdf";
import jstz from "jstz";
import { Router } from "@angular/router";

declare var $: any;
@Component({
  selector: "kt-affilate-report",
  templateUrl: "./affilate-report.component.html",
  styleUrls: ["./affilate-report.component.scss"],
})
export class AffilateReportComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  dataSource1;
  avaible = false;
  loading = false;
  model1;
  endDate;
  startDate;
  globalFilter = "";
  nameFilter = "";
  totalcountFilter = "";
  signUpFilter = "";
  revtotalFilter = "";
  payoutFilter = "";
  allprofitFilter = "";
  allprofitmarginFilter = "";
  arpecoregFilter = "";
  timeZomeValue;
  search = true;
  download = true;
  countrySelected = "au";
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
    meta_sub_affid: "",
    totalcount: "",
    signup: "",
    revtotal: "",
    payout: "",
    allprofit: "",
    allprofitmargin: "",
    arpecoreg: "",
  };

  @ViewChild("pdfTable", { static: false }) pdfTable: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild('sort1', { static: true }) sort: MatSort;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  // @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [
    "Sr.No",
    "has_affiliate_name",
    "totalcount",
    "signup",
    "revCorg",
    "revClick",
    "payout",
    "Rev total (A$)",
    "allprofit",
    "allprofitmargin",
    "arpecoreg",
    "ARPE Clickout",
    "ARPE Total",
  ];
  columnIds = [];
  constructor(
    private auth: AuthService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    let timezone = jstz.determine();
    this.timeZomeValue = timezone.name();
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAffilateData(
      moment(new Date()).format("YYYY-MM-DD"),
      moment(new Date()).format("YYYY-MM-DD")
    );
    this.dataSource.filterPredicate = this.customFilterPredicate();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  CountryChangingValue(data) {
    this.countrySelected = data.target.value;
  }
  sortColumn(data) {
    this.dataSource.sort = this.sort;
  }

  public downloadAsPDF() {
    const doc = new jsPDF();
    const specialElementHandlers = {
      "#editor": function (element, renderer) {
        return true;
      },
    };

    const pdfTable = this.pdfTable.nativeElement;
    doc.fromHTML(pdfTable.innerHTML, 15, 15, {
      width: 190,
      elementHandlers: specialElementHandlers,
    });
    doc.save("tableToPdf.pdf");
  }

  showTable() {
    var vm = this;
    this.avaible = true;
    this.dataSource = new MatTableDataSource(this.dataSource1);
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };

  public doFilterAffilateName = (value: string) => {
    value.trim().toLocaleLowerCase();
    this.filteredValues["has_affiliate_name"] = value;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
    this.dataSource.filterPredicate = this.customFilterPredicate();
  };

  public doFilterEmailName = (value: string) => {
    value.trim().toLocaleLowerCase();
    this.filteredValues["totalcount"] = value;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
    this.dataSource.filterPredicate = this.customFilterPredicate();
  };

  public doFilterSignupName = (value: string) => {
    value.trim().toLocaleLowerCase();
    this.filteredValues["signup"] = value;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
    this.dataSource.filterPredicate = this.customFilterPredicate();
  };

  public doFilterRevtotal = (value: string) => {
    value.trim().toLocaleLowerCase();
    this.filteredValues["revtotal"] = value;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
    this.dataSource.filterPredicate = this.customFilterPredicate();
  };

  public doFilterPayout = (value: string) => {
    value.trim().toLocaleLowerCase();
    this.filteredValues["payout"] = value;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
    this.dataSource.filterPredicate = this.customFilterPredicate();
  };

  public doFilteAllprofit = (value: string) => {
    value.trim().toLocaleLowerCase();
    this.filteredValues["allprofit"] = value;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
    this.dataSource.filterPredicate = this.customFilterPredicate();
  };

  public rofitmargin = (value: string) => {
    value.trim().toLocaleLowerCase();
    this.filteredValues["allprofitmargin"] = value;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
    this.dataSource.filterPredicate = this.customFilterPredicate();
  };

  public arpecoreg = (value: string) => {
    value.trim().toLocaleLowerCase();
    this.filteredValues["arpecoreg"] = value;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
    this.dataSource.filterPredicate = this.customFilterPredicate();
  };

  customFilterPredicate() {
    const myFilterPredicate = (data: any, filter: any): boolean => {
      var globalMatch = !this.globalFilter;
      if (this.globalFilter) {
        // search all text fields
        globalMatch =
          data.has_affiliate_name
            .toString()
            .trim()
            .toLowerCase()
            .indexOf(this.globalFilter.toLowerCase()) !== -1;
      }

      if (!globalMatch) {
        return;
      }
      let searchString = JSON.parse(filter);
      return (
        data.has_affiliate_name
          .toString()
          .trim()
          .indexOf(searchString.has_affiliate_name) !== -1 &&
        data.totalcount.toString().trim().indexOf(searchString.totalcount) !==
        -1 &&
        data.signup.toString().trim().indexOf(searchString.signup) !== -1 &&
        data.revtotal.toString().trim().indexOf(searchString.revtotal) !== -1 &&
        data.payout.toString().trim().indexOf(searchString.payout) !== -1 &&
        data.allprofit.toString().trim().indexOf(searchString.allprofit) !==
        -1 &&
        data.allprofitmargin
          .toString()
          .trim()
          .indexOf(searchString.allprofitmargin) !== -1 &&
        data.arpecoreg.toString().trim().indexOf(searchString.arpecoreg) !== -1
      );
    };
    return myFilterPredicate;
  }

  searchRange() {
    this.endDate = this.model1.end
      ? moment(this.model1.end._d).format("YYYY-MM-DD")
      : moment(new Date()).format("YYYY-MM-DD");
    this.startDate = this.model1.start
      ? moment(this.model1.start._d).format("YYYY-MM-DD")
      : moment(new Date()).format("YYYY-MM-DD");
    if (this.startDate) {
      this.getAffilateData(this.startDate, this.endDate);
    } else {
      this.getAffilateData(this.startDate, this.endDate);
    }
  }

  getAffilateData(start, end) {
    var vm = this;
    this.loading = true;
    this.avaible = false;
    this.dataSource = new MatTableDataSource([]);
    const report_type = this.router.url.includes("/2") ? "2" : "1";
    this.auth
      .getAffilate(start, end, "list", report_type)
      .pipe(
        tap((user) => {
          if (user) {
            this.avaible = true;
            this.dataSource = new MatTableDataSource(user.body);
            this.dataSource1 = user.body;
            this.dataSource.paginator = this.paginator;
            this.loading = false;

            vm.showTable();
          } else {
          }
        }),
        finalize(() => {
          this.avaible = true;
          this.loading = false;
          this.dataSource.paginator = this.paginator;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }

  rangeSelected(e) {
    console.log("e +++++ e", e);
  }
}
