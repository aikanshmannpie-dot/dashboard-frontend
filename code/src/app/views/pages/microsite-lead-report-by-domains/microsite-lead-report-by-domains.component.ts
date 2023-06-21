import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild
} from "@angular/core";

import { AuthService } from "../../../core/auth";
import { finalize } from "rxjs/operators";
import moment from "moment";
import * as Highcharts from "highcharts";
import h3 from "highcharts/highcharts-3d";
h3(Highcharts);

import cy from "highcharts/modules/cylinder";
cy(Highcharts);

import f3d from "highcharts/modules/funnel3d";
f3d(Highcharts);

@Component({
  selector: "kt-microsite-lead-report-by-domains",
  templateUrl: "./microsite-lead-report-by-domains.component.html",
  styleUrls: ["./microsite-lead-report-by-domains.component.scss"],
})
export class MicrositeLeadReportByDomainsComponent implements OnInit {
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

  leadsReportByDomain;
  returnedLeads = [];

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
  constructor(private auth: AuthService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.getLeadReportByDomain();
    this.getSiteNameList();
  }


  getFormat(activeTeam) {
    return moment(activeTeam.created_at).format("YYYY-MM-DD hh:mm:ss");
  }

  getLeadReportByDomain() {
    this.auth.getLeadReportByDomain().subscribe((res) => {
      if (res) console.log(res);
      this.leadsReportByDomain = res;
      this.loading = false;
      this.cdr.markForCheck();
    });
  }

  getSiteNameList() {
    this.loading = true;
    this.auth.getSiteNameList().subscribe(
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
    ),
      finalize(() => {
        this.avaible = true;
        this.loading = false;
        this.cdr.markForCheck();
      });
  }

  getLeadsOfDomain(event) {
    this.loading = true;
    const domainId = event.target.value;
    if (domainId != "undefined") {
      let fromDate = moment().add(-7, 'days');

      const domainDetail = this.siteListingData.filter(domain => domain.id === parseInt(domainId))[0];
      const dates = this.getDates(fromDate, new Date());
      const leads = this.leadsReportByDomain.apiData.filter(lead => lead.id === parseInt(domainId));
      this.returnedLeads = [];

      dates.map(date => {
        const lead = leads.filter(lead => lead.day === date);
        if (lead.length) this.returnedLeads.push(lead[0]);
        else this.returnedLeads.push({
          "day": date,
          "id": domainId,
          "createdat": date,
          "c": "0"
        });
      });
      console.log(this.returnedLeads);
      // console.log("dates",leads, returnedLeads)
      let seriesData: Array<number> = this.returnedLeads.map(
        (x: { c: any }) => {
          return Number(x.c);
        }
      );
      Highcharts.chart("activeLastWeek", {
        chart: {
          type: "line",
        },
        title: {
          text: `Lead Counts for ${domainDetail.name}`,
        },
        xAxis: {
          categories: this.returnedLeads.map((x: { day: any }) => {
            return x.day;
          }),
        },
        yAxis: {
          title: {
            text: "Lead Counts",
          },
        },
        series: [
          {
            name: "Count",
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
    this.loading = false;
    this.cdr.markForCheck();
  }

  getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(currentDate.format('YYYY-MM-DD'));
      currentDate = currentDate.add(1, 'days');
    }
    return dateArray;
  }
}
