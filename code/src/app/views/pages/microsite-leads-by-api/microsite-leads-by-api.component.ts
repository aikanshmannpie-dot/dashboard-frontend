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
	standalone: false,
selector: "kt-microsite-leads",
  templateUrl: "./microsite-leads-by-api.component.html",
  styleUrls: ["./microsite-leads-by-api.component.scss"],
})
export class MicrositeLeadsByApiComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
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
    "Last 7 Days": [moment().subtract(7, "days"), moment().subtract(1, "days")],
    "Last 30 Days": [moment().subtract(30, "days"), moment().subtract(1, "days")],
    "This Month": [moment().startOf("month"), moment().endOf("month")],
    "Last Month": [
      moment().subtract(1, "month").startOf("month"),
      moment().subtract(1, "month").endOf("month"),
    ],
  };
 
  @ViewChild("content", { static: true }) content: ElementRef;

  @ViewChild("pdfTable", { static: false }) pdfTable: ElementRef;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns: string[] = [
    "name",
    "api_client_name",
    "count"
  ];
  displayedColumns1: string[] = [
    "name",
    "api_client_name",
    "count"
  ];

  columnIds = [];
  offsetPlus = 0;
  constructor(private auth: AuthService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.startDate = moment(new Date()).format("YYYY-MM-DD");
    this.endDate = moment(new Date()).format("YYYY-MM-DD");
    this.getApiLeadCount(this.startDate, this.startDate);
    this.dataSource.filterPredicate = this.customFilterPredicate();
    this.getSiteNameList();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getFormat(activeTeam) {
    return moment(activeTeam.created_at).format("YYYY-MM-DD hh:mm:ss");
  }

  createSurveyQuestion(data, siteId) {
    var str = ``;
    if (siteId !== 137) {
      var formdata = data && JSON.parse(data);
      formdata.map((item, index) => {
        str =
          str +
          `Question ${index + 1}: ` +
          item.label +
          "\n" +
          "Answer: " +
          item.value +
          "\n\n";
      });
    } else {
      str = data;
    }
    return str;
  }

  sortColumn(data) {
    this.dataSource.sort = this.sort;
  }

  showTable() {
    this.avaible = true;
    this.dataSource = new MatTableDataSource(this.dataSource1);
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
      this.getApiLeadCount(this.startDate, this.endDate);
    } else {
      this.getApiLeadCount(this.startDate, this.endDate);
    }
  }

  customFilterPredicate() {
    const myFilterPredicate = (data: any, filter: any): boolean => {
      var globalMatch = !this.globalFilter;
      if (this.globalFilter) {
        // search all text fields
        globalMatch =
          data.meta_sub_affid
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
        data.meta_sub_affid
          .toString()
          .trim()
          .indexOf(searchString.meta_sub_affid) !== -1 &&
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

  getSiteNameList() {
    this.auth.getSiteNameList()
      .pipe(
        finalize(() => {
          this.avaible = true;
          this.loading = false;
          if (this.dataSource) {
            this.dataSource.paginator = this.paginator;
          }
          this.cdr.markForCheck();
        })
      )
      .subscribe(
        (data) => {
          if (data) {
            this.siteListingData = data.data.sort((a, b) =>
              a.name.localeCompare(b.name)
            );
          }
        },
        (error) => {
          this.loading = false;
          this.cdr.markForCheck();
        }
      );
  }

  ChangingValue(data) {
    this.isSelected = data.target.value;
  }

  getApiLeadCount(start, end) {
    this.loading = true;
    this.avaible = false;
    this.dataSource = new MatTableDataSource([]);
    this.siteName = this.isSelected ? this.isSelected : 0;

    this.auth
      .getLeadsAccordingToApiClient(start, end, this.siteName)
      .pipe(
        finalize(() => {
          this.avaible = true;
          this.loading = false;
          if (this.dataSource) {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
          this.cdr.markForCheck();
        })
      )
      .subscribe(
        (data) => {
          if (data) {
            this.dataSource = new MatTableDataSource(data.apiData);
            this.dataSource1 = data.body;
          }
        },
        (error) => {
          this.loading = false;
          this.cdr.markForCheck();
        }
      );
  }
}
