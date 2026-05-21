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
import { FormControl } from "@angular/forms";

@Component({
  selector: "kt-microsite-leads",
  templateUrl: "./microsite-leads.component.html",
  styleUrls: ["./microsite-leads.component.scss"],
})
export class MicrositeLeadsComponent implements OnInit {
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

  siteListingData;
  search = true;
  download = true;
  micrositeIds= new FormControl();
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

  @ViewChild("content", { static: true }) content: ElementRef;

  @ViewChild("pdfTable", { static: false }) pdfTable: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns: string[] = [
    "domain",
    "full_name",
    "email",
    "phone_number",
    "created_at_sydney",
    "api_status",
    "sms_body",
    "section_second_header",
    "api_client_name",
    "source"
  ];
  displayedColumns1: string[] = [
    "site_name",
    "page_id",
    "domain",
    "client_name",
    "form_type",
    "email",
    "full_name",
    "phone_number",
    "dob",
    "gender",
    "age",
    "town_city",
    "postcode",
    "state",
    "data",
    "created_at_sydney",
    "question_0",
    "answer_0",
    "question_1",
    "answer_1",
    "question_2",
    "answer_2",
    "question_3",
    "answer_3",
    "question_4",
    "answer_4",
    "question_5",
    "answer_5",
    "question_6",
    "answer_6",
    "question_7",
    "answer_7",
    "question_8",
    "answer_8",
    "question_9",
    "answer_9",
    "question_10",
    "answer_10",
    "api_status",
    "api_client_name",
    "source"
  ];

  columnIds = [];
  offsetPlus = 0;
  token;
  constructor(private auth: AuthService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.token = this.auth.getToken();
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.startDate = moment(new Date()).format("YYYY-MM-DD");
    this.endDate = moment(new Date()).format("YYYY-MM-DD");
    this.getListOfMicrosite(this.startDate, this.startDate);
    this.dataSource.filterPredicate = this.customFilterPredicate();
    this.getSiteNameList();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getFormat(activeTeam) {
    return moment(activeTeam.created_at_sydney).format("YYYY-MM-DD hh:mm:ss A");
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
    var vm = this;
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
      this.getListOfMicrosite(this.startDate, this.endDate);
    } else {
      this.getListOfMicrosite(this.startDate, this.endDate);
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
    this.auth.getSiteNameList().subscribe(
      (data) => {
        if (data) {
          this.siteListingData = data.data.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
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

  // ChangingValue(data) {
  //   const selectElement = event.target as HTMLSelectElement;
  //   const options = selectElement.options;
  //   const selectedValues: string[] = [];

  //   for (let i = 0; i < options.length; i++) {
  //     if (options[i].selected) {
  //       if (options[i].value !== 'undefined')
  //         selectedValues.push(options[i].value);
  //     }
  //   }

  //   this.isSelected = selectedValues;
  //   console.log(this.isSelected);
  // }

  getListOfMicrosite(start, end) {
    var vm = this;
    this.loading = true;
    this.avaible = false;
    this.dataSource = new MatTableDataSource([]);
    this.siteName = this.micrositeIds.value && this.micrositeIds.value.length ? this.micrositeIds.value : undefined;

    this.auth
      .getListOfMicrosite(start, end, this.offset, this.siteName)
      .subscribe(
        (data) => {
          if (data) {

            const apiData = data.apiData.map((lead) => {
              if (lead.site_id !== 137) {
                const answer = JSON.parse(lead.data);
                let answers = [];
                const leadd = answer.map((ans, index) => ({
                  ['question_' + index]: ans.label,
                  ['answer_' + index]: ans.value
                }
                ));
                const leads = leadd.reduce(((r, c) => Object.assign(r, c)), {})
                lead = {
                  ...lead,
                  ...leads
                };
              }
              return lead;
            });

            // console.log("apidata", apiData);
            // console.log("data", data.apiData);
            this.avaible = true;

            this.dataSource = new MatTableDataSource(apiData);
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
