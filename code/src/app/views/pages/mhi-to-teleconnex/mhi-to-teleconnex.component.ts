import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
//import { MatTableDataSource } from "@angular/material/table";
import { AuthService } from "../../../core/auth";
import { finalize } from "rxjs/operators";
import moment from "moment";
import { mkConfig, generateCsv, download } from "export-to-csv";

@Component({
	standalone: false,
selector: "kt-mhi-to-teleconnex",
  templateUrl: "./mhi-to-teleconnex.component.html",
  styleUrls: ["./mhi-to-teleconnex.component.scss"],
})
export class MHIToTeleconnexComponent implements OnInit {
  //dataSource: MatTableDataSource<any>;
  avaible = false;
  loading = false;
  model1;
  endDate;
  startDate;
  message = "";
  apiresposne = "";
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
  constructor(private auth: AuthService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    //this.dataSource = new MatTableDataSource();
    this.startDate = moment(new Date()).format("YYYY-MM-DD");
    this.endDate = moment(new Date()).format("YYYY-MM-DD");
  }

  ngAfterViewInit(): void {}

  getFormat(activeTeam) {
    return moment(activeTeam.created_at).format("YYYY-MM-DD hh:mm:ss");
  }

  searchRange() {
    var isValid = true;
    if (
      !this.model1.end ||
      this.model1.end == undefined ||
      this.model1.end == null ||
      this.model1.end == ""
    ) {
      isValid = false;
    }
    if (
      !this.model1.start ||
      this.model1.start == undefined ||
      this.model1.start == null ||
      this.model1.start == ""
    ) {
      isValid = false;
    }

    if (isValid) {
      this.endDate = moment(this.model1.end._d).format("YYYY-MM-DD");
      this.startDate = moment(this.model1.start._d).format("YYYY-MM-DD");
      if (this.startDate && this.endDate) {
        this.getListOfLeads(this.startDate, this.endDate);
      } else {
        //this.getListOfVicidial(this.startDate, this.endDate);
      }
    }
  }

  getListOfLeads(start, end) {
    this.loading = true;
    this.avaible = false;
    this.message = "";
    this.auth.getListOfLeads(start, end).subscribe(
      (data) => {
        if (data) {
          this.loading = true;
          if (data.apiData) {
            var fromD =
              moment(start).format("D") + "" + moment(start).format("MMM");
            var toD = moment(end).format("D") + "" + moment(end).format("MMM");
            this.message = data.message;
            this.apiresposne = "";
            if (Array.isArray(data.apiData) && data.apiData.length > 0) {
              var filen = `${"MHIToTeleconnex"}-${fromD}-${toD}-${
                data.apiData.length
              }`;
              const csvConfig = mkConfig({
                filename: filen,
                fieldSeparator: ",",
                quoteStrings: true,
                decimalSeparator: ".",
                useBom: true,
                useKeysAsHeaders: true,
              });

              const csv = generateCsv(csvConfig)(data.apiData);
              download(csvConfig)(csv);
            }
            // this.message = data.apiData;
            // this.apiresposne = data.message;
          } else {
            this.message = data.message;
            this.apiresposne =
              "Seems you have already exported the data for the selected dates";
          }

          this.avaible = true;
          this.loading = false;
        } else {
          this.message =
            "Something went wrong, please contact the administrator";
          this.apiresposne = "";
          this.avaible = true;
          this.loading = false;
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
        this.cdr.markForCheck();
      });
  }
}
