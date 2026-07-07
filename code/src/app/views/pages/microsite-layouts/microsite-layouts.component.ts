import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
	standalone: false,
selector: "kt-microsite-layouts",
  templateUrl: "./microsite-layouts.component.html",
  styleUrls: ["./microsite-layouts.component.scss"],
})
export class MicrositeLayoutsComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  avaible = false;
  loading = false;
  search = true;
  download = true;
  searchButton() {
    this.search = !this.search;
  }
  downloadButton() {
    this.download = !this.download;
  }

  @ViewChild("content", { static: true }) content: ElementRef;

  @ViewChild("pdfTable", { static: false }) pdfTable: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns: string[] = [
    "index",
    "site_name",
    "theme",
    "survey_layout",
    "domain",
  ];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource([]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getMicrositeSourceReport();
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

  getMicrositeSourceReport() {
    const websiteData = [
      {
        site_name: "nobleoak.mylifeinsurancecompare.com.au",
        theme: "Alpha",
        survey_layout: "secondlayout",
        domain: "nobleoak.mylifeinsurancecompare.com.au",
      },
      {
        site_name: "supportwithdebt.com.au",
        theme: "Alpha",
        survey_layout: "secondlayout",
        domain: "supportwithdebt.com.au",
      },
      {
        site_name: "www.quickeasyfinance.com.au",
        theme: "Alpha",
        survey_layout: "fourthlayout",
        domain: "www.quickeasyfinance.com.au",
      },
      {
        site_name: "compare1.mysolarcompare.com.au",
        theme: "Alpha",
        survey_layout: "firstlayout",
        domain: "compare1.mysolarcompare.com.au",
      },
      {
        site_name: "www.creditcounsellors.supportwithdebt.com.au",
        theme: "Alpha",
        survey_layout: "fifthlayout",
        domain: "www.creditcounsellors.supportwithdebt.com.au",
      },
      {
        site_name: "www.hearingrelief.quickandeasyhearing.com",
        theme: "SupportX",
        survey_layout: "firstlayout",
        domain: "www.hearingrelief.quickandeasyhearing.com",
      },
      {
        site_name: "www.businessfundstoday.net",
        theme: "AZX",
        survey_layout: "azx4layout",
        domain: "www.businessfundstoday.net",
      },
      {
        site_name: "www.ca.quickandeasyhearing.com",
        theme: "AZX",
        survey_layout: "fifthlayout",
        domain: "www.ca.quickandeasyhearing.com",
      },
      {
        site_name: "solarcompare.io",
        theme: "AZX",
        survey_layout: "fifthlayout",
        domain: "solarcompare.io",
      },
      {
        site_name: "au1.quickandeasyhearing.com",
        theme: "AZX",
        survey_layout: "sixthlayout",
        domain: "au1.quickandeasyhearing.com",
      },
      {
        site_name: "newjersey.mysolarcompare.com.au",
        theme: "AZX",
        survey_layout: "fifthlayout",
        domain: "newjersey.mysolarcompare.com.au",
      },
      {
        site_name: "www.azx5.quickandeasyhearing.com",
        theme: "AZX",
        survey_layout: "azx5layout",
        domain: "www.azx5.quickandeasyhearing.com",
      },
      {
        site_name: "v4.ozhouseprice.com.au",
        theme: "AZX",
        survey_layout: "azx9layout",
        domain: "v4.ozhouseprice.com.au",
      },
      {
        site_name: "v2.ozhouseprice.com.au",
        theme: "AZX",
        survey_layout: "azx8layout",
        domain: "v2.ozhouseprice.com.au",
      },
      {
        site_name: "v1.ozhouseprice.com.au",
        theme: "AZX",
        survey_layout: "azx7layout",
        domain: "v1.ozhouseprice.com.au",
      },
      {
        site_name: "nobleoak.mylifeinsurancecompare.com.au",
        theme: "AZX",
        survey_layout: "azx3layout",
        domain: "nobleoak.mylifeinsurancecompare.com.au",
      },
      {
        site_name: "www.businessfundstoday.net",
        theme: "AZX",
        survey_layout: "azx4layout",
        domain: "www.businessfundstoday.net",
      },
      {
        site_name: "beta.supportwithdebt.com.au",
        theme: "Beta",
        survey_layout: "firstlayout",
        domain: "beta.supportwithdebt.com.au",
      },
    ];
    this.avaible = true;
    this.dataSource = new MatTableDataSource(websiteData);
    this.dataSource.paginator = this.paginator;
    this.loading = false;
  }
}
