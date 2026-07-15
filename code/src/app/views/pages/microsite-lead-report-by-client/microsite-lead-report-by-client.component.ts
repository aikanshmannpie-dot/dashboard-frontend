import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";

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
	standalone: false,
selector: "kt-microsite-lead-report-by-client",
  templateUrl: "./microsite-lead-report-by-client.component.html",
  styleUrls: ["./microsite-lead-report-by-client.component.scss"],
})
export class MicrositeLeadReportByClientComponent implements OnInit {
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
  leadsReportByClient;
  returnedLeads = [];
  domainIds = ["146", "92", "86", "150", "83", "161", "98", "82", "156", "64"];
  ranges: any = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    "Last 7 Days": [moment().subtract(7, "days"), moment().subtract(1, "days")],
    "Last 30 Days": [moment().subtract(30, "days"), moment().subtract(1, "days")],
    "This Month": [moment().startOf("month"), moment().endOf("month")],
    "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")],
  };
  search = true;
  searchButton() {
    this.search = !this.search;
  }
  constructor(private auth: AuthService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startDate = moment().startOf("month").format("YYYY-MM-DD hh:mm");
    this.endDate = moment(new Date()).format("YYYY-MM-DD");
    this.getSiteNameList();
    this.getListOfMicrositeLeadByClient(this.startDate, this.endDate);
  }

  searchRange() {
    this.endDate = this.model1.end ? moment(this.model1.end._d).format("YYYY-MM-DD") : moment(new Date()).format("YYYY-MM-DD");
    this.startDate = this.model1.start ? moment(this.model1.start._d).format("YYYY-MM-DD") : moment(new Date()).format("YYYY-MM-DD");

    this.getListOfMicrositeLeadByClient(this.startDate, this.endDate);
  }
  getFormat(activeTeam) {
    return moment(activeTeam.created_at).format("YYYY-MM-DD hh:mm:ss");
  }

  getListOfMicrositeLeadByClient(startDate, endDate) {
    this.loading = true;
    this.auth.getListOfMicrositeLeadByClient(startDate, endDate, this.offset, this.siteName).subscribe((res) => {
      this.leadsReportByClient = res;
      this.loading = false;
      this.getLeadsOfClient();
      this.cdr.markForCheck();
    });
  }

getSiteNameList() {
  this.loading = true;
  this.auth.getSiteNameList()
    .pipe(
      finalize(() => {
        this.isAvaible = true;
        this.loading = false;
        this.cdr.markForCheck();
      })
    )
    .subscribe(
      (data) => {
        if (data) {
          this.domains = data.data.sort((a, b) => a.name.localeCompare(b.name));
          this.siteListingData = this.domains.filter((site) => {
            if (!this.domainIds.includes(site.id)) {
              return site;
            }
          });
        }
        this.loading = false;
        this.cdr.markForCheck();
      },
      (error) => {
        this.loading = false;
      }
    );
}
  onDomainChanged(event) {
    this.selectedDomainValue = event.target.value;

    console.log(this.selectedDomainValue, event.target.value);
    this.getLeadsOfClient();
  }
getLeadsOfClient() {
  this.loading = true;

  // Map data for the chart
  const apiData = this.leadsReportByClient.apiData || [];
  const categories = apiData.map((item) => item.api_client_name);
  const acceptedData = apiData.map((item) => Number(item.accepted_count));
  const rejectedData = apiData.map((item) => Number(item.rejected_count));

  Highcharts.chart({
    chart: {
      renderTo: "activeLastWeek",
      type: "column",
      style: {
        fontFamily: "'Inter', sans-serif"
      },
      backgroundColor: 'transparent'
    },
    title: {
      text: "Lead Distribution by API Client",
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "16px",
        fontWeight: "700",
        color: "#0f172a"
      }
    },
    subtitle: {
      text: "Comparing accepted vs rejected lead metrics",
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "12px",
        color: "#64748b"
      }
    },
    xAxis: {
      categories: categories,
      lineColor: '#e2e8f0',
      tickColor: '#e2e8f0',
      labels: {
        style: {
          fontFamily: "'Inter', sans-serif",
          color: "#64748b",
          fontSize: "11px"
        }
      },
      title: {
        text: "Client Name",
        style: {
          fontFamily: "'Inter', sans-serif",
          color: "#475569",
          fontWeight: "600",
          fontSize: "12px"
        }
      }
    },
    yAxis: {
      min: 0,
      gridLineColor: '#f1f5f9',
      title: {
        text: "Total Leads Count",
        style: {
          fontFamily: "'Inter', sans-serif",
          color: "#475569",
          fontWeight: "600",
          fontSize: "12px"
        }
      },
      labels: {
        style: {
          fontFamily: "'Inter', sans-serif",
          color: "#64748b",
          fontSize: "11px"
        }
      },
      stackLabels: {
        enabled: true,
        style: {
          fontFamily: "'Inter', sans-serif",
          fontWeight: "700",
          color: "#334155"
        }
      }
    },
    legend: {
      reversed: true,
      align: 'center',
      verticalAlign: 'bottom',
      itemStyle: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: "500",
        color: "#475569",
        fontSize: "12px"
      }
    },
    tooltip: {
      shared: true,
      useHTML: true,
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderColor: 'rgba(99, 102, 241, 0.15)',
      borderRadius: 8,
      shadow: {
        color: 'rgba(0, 0, 0, 0.05)',
        offsetX: 0,
        offsetY: 4,
        opacity: 1,
        width: 10
      },
      headerFormat: '<span style="font-size: 11px; color: #64748b; font-family: Inter; font-weight: 500;">{point.key}</span><br/>',
      pointFormat: '<span style="color:{series.color}; font-size: 12px; margin-right: 4px;">●</span> <span style="font-family: Inter; font-weight: 500; color: #475569;">{series.name}:</span> <b style="font-family: Inter; color: #0f172a; font-weight: 600;">{point.y}</b><br/>'
    },
    plotOptions: {
      column: {
        stacking: "normal",
        borderRadius: 4,
        borderWidth: 0,
        maxPointWidth: 40
      }
    },
    series: [
      {
        type: "column",
        name: "Rejected Leads",
        data: rejectedData,
        color: "#f43f5e", // Rose Red
      },
      {
        type: "column",
        name: "Accepted Leads",
        data: acceptedData,
        color: "#10b981", // Emerald Green
      },
    ],
    credits: { enabled: false },
  });

  this.loading = false;
  this.isAvaible = true;
  this.cdr.markForCheck();
}

  getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(currentDate.format("YYYY-MM-DD"));
      currentDate = currentDate.add(1, "days");
    }
    return dateArray;
  }

  getDomainDetailAndSeriesData(domainId) {
    let fromDate = this.startDate ? moment(this.startDate) : moment().startOf("month").format("YYYY-MM-DD hh:mm");
    const domainDetail = this.domains.filter((domain) => domain.id === parseInt(domainId))[0];
    const dates = this.getDates(fromDate, this.endDate ? moment(this.endDate) : new Date());
    const leads = this.leadsReportByDomain.apiData.filter((lead) => lead.id === parseInt(domainId));
    this.returnedLeads = [];

    dates.map((date) => {
      const lead = leads.filter((lead) => lead.day === date);
      if (lead.length) this.returnedLeads.push(lead[0]);
      else
        this.returnedLeads.push({
          day: date,
          id: domainId,
          createdat: date,
          c: "0",
        });
    });

    let seriesData: Array<number> = this.returnedLeads.map((x: { c: any }) => {
      return Number(x.c);
    });

    return {
      name: domainDetail.name,
      data: seriesData,
      type: undefined,
    };
  }
}
