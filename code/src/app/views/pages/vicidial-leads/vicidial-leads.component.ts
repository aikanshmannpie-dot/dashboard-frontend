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
import { AuthNoticeService, AuthService, Login } from "../../../core/auth";
import { Observable, Subject } from "rxjs";
import { finalize, takeUntil, tap } from "rxjs/operators";
import moment from "moment";
import { ExportToCsv } from "export-to-csv";

@Component({
	selector: "kt-vicidial-leads",
	templateUrl: "./vicidial-leads.component.html",
	styleUrls: ["./vicidial-leads.component.scss"],
})
export class VicidialLeadsComponent implements OnInit {
	dataSource: MatTableDataSource<any>;
	dataSource1;
	avaible = false;
	loading = false;
	model1;
	responseModel;
	teleconnexModel;
	teleconnexCoSponsorModel;
	campaignName;
	endDate;
	startDate;
	globalFilter = "";
	offset = 0;
	isSelected;
	siteListingData;
	message = "";
	apiresposne = "";

	filteredValues = {
		campaign_name: "",
		receive_date: "",
		from_date: "",
		to_date: "",
		totalcount: "",
	};

	@ViewChild("content", { static: true }) content: ElementRef;

	@ViewChild("pdfTable", { static: false }) pdfTable: ElementRef;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	// @ViewChild('sort1', { static: true }) sort: MatSort;
	@ViewChild(MatSort, { static: false }) sort: MatSort;
	// Sr.No	Offer Name	Affiliate Name	Revenue (A$)	Impressions	CTR	Conversion Rate	ARPE Total (A$)	GP (A$)	GP%
	displayedColumns: string[] = [
		"campaign_name",
		"receive_date",
		"from_date",
		"to_date",
		"totalcount",
	];

	columnIds = [];
	offsetPlus = 0;
	isdisableButton = true;
	constructor(private auth: AuthService, private cdr: ChangeDetectorRef) {}

	ngOnInit() {
		this.dataSource = new MatTableDataSource();
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.startDate = moment(new Date()).format("YYYY-MM-DD");
		this.endDate = moment(new Date()).format("YYYY-MM-DD");
		this.dataSource.filterPredicate = this.customFilterPredicate();

		this.startDate = moment(new Date()).format("YYYY-MM-DD");
		this.endDate = moment(new Date()).format("YYYY-MM-DD");

		this.getcampaignNameList();
		this.getVicidialResponses();
	}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

	getFormat(activeTeam) {
		return moment(activeTeam.created_at).format("YYYY-MM-DD hh:mm:ss");
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
		if (
			!this.isSelected ||
			this.isSelected == undefined ||
			this.isSelected == null ||
			this.isSelected == ""
		) {
			isValid = false;
		}

		if (isValid) {
			this.endDate = moment(this.model1.end._d).format("YYYY-MM-DD");
			this.startDate = moment(this.model1.start._d).format("YYYY-MM-DD");
			if (this.startDate && this.endDate && this.isSelected) {
				this.postListOfVicidial(
					this.startDate,
					this.endDate,
					this.isSelected
				);
			} else {
				//this.getListOfVicidial(this.startDate, this.endDate);
			}
		}
	}

	getcampaignNameList() {
		this.siteListingData = [
			{ id: 1, name: "MustHaveIt-AU" },
			{ id: 2, name: "Teleconnex-Co-Sponsor-AU" },
			{ id: 3, name: "MustHaveIt-NZ" },
			{ id: 4, name: "Teleconnex-Co-Sponsor-NZ" },
		];
	}

	ChangingValue(data) {
		///console.log("data", data.target.value);
		this.isSelected = data.target.value != "" && data.target.value;
	}

	postListOfVicidial(start, end, campaignName) {
		var vm = this;
		this.loading = true;
		this.avaible = false;
		this.dataSource = new MatTableDataSource([]);

		this.auth.postListOfVicidial(start, end, campaignName).subscribe(
			(data) => {
				if (data) {
					this.loading = true;
					if (data.apiData) {
						var fromD =
							moment(start).format("D") +
							"" +
							moment(start).format("MMM");
						var toD =
							moment(end).format("D") +
							"" +
							moment(end).format("MMM");
						var camName =
							campaignName == "1"
								? "musthaveit-au"
								: campaignName == "2"
								? "teleconnex-co-sponsor-au"
								: campaignName == "3"
								? "musthaveit-nz"
								: campaignName == "4"
								? "teleconnex-co-sponsor-nz"
								: "acquirely-vicidial-leads";

						this.message = data.message;
						this.apiresposne = "";
						if (
							Array.isArray(data.apiData) &&
							data.apiData.length > 0
						) {
							var filen = `${camName}-${fromD}-${toD}-count-${data.apiData.length}`;
							const options = {
								filename: filen,
								fieldSeparator: ",",
								quoteStrings: '"',
								decimalSeparator: ".",
								showLabels: true,
								showTitle: false,
								useTextFile: false,
								useBom: true,
								useKeysAsHeaders: true,
							};

							const csvExporter = new ExportToCsv(options);

							csvExporter.generateCsv(data.apiData);
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
					this.getVicidialResponses();
				} else {
					this.message =
						"Something went wrong, please contact the administrator";
					this.apiresposne = "";
					this.avaible = true;
					this.loading = false;
					this.getVicidialResponses();
				}
				// Main page
			},
			(error) => {
				this.loading = false;
				this.cdr.markForCheck();
				this.getVicidialResponses();
			}
		),
			finalize(() => {
				this.avaible = true;
				this.loading = false;
				this.cdr.markForCheck();
				this.getVicidialResponses();
			});
	}

	getVicidialResponses() {
		var vm = this;
		this.loading = true;
		this.avaible = false;
		this.dataSource = new MatTableDataSource([]);
		this.auth.getVicidialResponses().subscribe(
			(data) => {
				if (data) {
					console.log("data +++_-=_+", data);
					if (data.status == 200) {
						data.apiData.map((item) => {
							item.from_date = moment(item.from_date).format(
								"YYYY-MM-DD"
							);
							item.to_date = moment(item.to_date).format(
								"YYYY-MM-DD"
							);
							item.receive_date = moment(
								item.receive_date
							).format("YYYY-MM-DD");
						});
						this.responseModel = data.apiData;
						this.dataSource = new MatTableDataSource(data.apiData);
						this.dataSource.paginator = this.paginator;
					}

					this.avaible = true;
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

	customFilterPredicate() {
		const myFilterPredicate = (data: any, filter: any): boolean => {
			var globalMatch = !this.globalFilter;
			if (this.globalFilter) {
				// search all text fields
				globalMatch =
					data.campaign_name
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
				data.campaign_name
					.toString()
					.trim()
					.indexOf(searchString.campaign_name) !== -1 &&
				data.totalcount
					.toString()
					.trim()
					.indexOf(searchString.totalcount) !== -1 &&
				data.receive_date
					.toString()
					.trim()
					.indexOf(searchString.receive_date) !== -1 &&
				data.from_date
					.toString()
					.trim()
					.indexOf(searchString.from_date) !== -1 &&
				data.to_date.toString().trim().indexOf(searchString.to_date) !==
					-1
			);
		};
		return myFilterPredicate;
	}
}
