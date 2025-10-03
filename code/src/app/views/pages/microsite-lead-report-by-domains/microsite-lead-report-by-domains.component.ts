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
  isAvaible = false;
  loading = false;
  model1;
  siteName;
  endDate;
  startDate;
  globalFilter = "";
  offset = 0;
  selectedDomainValue;
  siteListingData;
  domains;
  leadsReportByDomain;
  returnedLeads = [];
  domainIds = ['146', '92', '86', '150', '83', '161', '98', '82', '156', '64'];
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
  constructor(private auth: AuthService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.startDate = moment().startOf('month').format('YYYY-MM-DD hh:mm');
    this.endDate = moment(new Date()).format("YYYY-MM-DD");
    this.getSiteNameList();
    this.getLeadReportByDomain(this.startDate, this.endDate);
  }

  searchRange() {
    this.endDate = this.model1.end
      ? moment(this.model1.end._d).format("YYYY-MM-DD")
      : moment(new Date()).format("YYYY-MM-DD");
    this.startDate = this.model1.start
      ? moment(this.model1.start._d).format("YYYY-MM-DD")
      : moment(new Date()).format("YYYY-MM-DD");

    this.getLeadReportByDomain(this.startDate, this.endDate);

  }
  getFormat(activeTeam) {
    return moment(activeTeam.created_at).format("YYYY-MM-DD hh:mm:ss");
  }

  getLeadReportByDomain(startDate, endDate) {
    this.loading = true;
    this.auth.getLeadReportByDomain(startDate, endDate).subscribe((res) => {
      if (res) console.log(res);
      this.leadsReportByDomain = res;
      this.loading = false;
      this.getLeadsOfDomain();
      this.cdr.markForCheck();
    });
  }

  getSiteNameList() {
    this.loading = true;
    this.auth.getSiteNameList().subscribe(
      (data) => {
        if (data) {
          this.domains = data.data.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          this.siteListingData = this.domains.filter((site) => {
            if (!this.domainIds.includes(site.id)) {
              return site;
            }
          })
        }
        this.loading = false;
        this.cdr.markForCheck();
      },
      (error) => {
        this.loading = false;
      }
    ),
      finalize(() => {
        this.isAvaible = true;
        this.loading = false;
        this.cdr.markForCheck();
      });
  }
  onDomainChanged(event) {
    this.selectedDomainValue = event.target.value;

    console.log(this.selectedDomainValue, event.target.value)
    this.getLeadsOfDomain();
  }
  getLeadsOfDomain() {
    this.loading = true;
    const domainId = this.selectedDomainValue;

    const allSeries = this.domainIds.map((siteId) => {
      return this.getDomainDetailAndSeriesData(siteId);
    });
    if (domainId) {
      allSeries.push(this.getDomainDetailAndSeriesData(domainId));
    }
    Highcharts.chart("activeLastWeek", {
      chart: {
        type: "line",
      },
      title: {
        text: `Lead Counts`,
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
      series:
        allSeries,
      credits: {
        enabled: false,
      },
    });
    this.loading = false;
    this.isAvaible = true;
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


  getDomainDetailAndSeriesData(domainId) {
    let fromDate = this.startDate ? moment(this.startDate) : moment().startOf('month').format('YYYY-MM-DD hh:mm');
    const domainDetail = this.domains.filter(domain => domain.id === parseInt(domainId))[0];
    const dates = this.getDates(fromDate, this.endDate ? moment(this.endDate) : new Date());
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

    let seriesData: Array<number> = this.returnedLeads.map(
      (x: { c: any }) => {
        return Number(x.c);
      }
    );

    return {
      name: domainDetail.name,
      data: seriesData,
      type: undefined,
    }
  }
}
