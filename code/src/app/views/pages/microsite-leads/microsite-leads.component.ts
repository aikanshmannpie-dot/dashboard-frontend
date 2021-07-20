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
	// @ViewChild('sort1', { static: true }) sort: MatSort;
	@ViewChild(MatSort, { static: false }) sort: MatSort;
	// Sr.No	Offer Name	Affiliate Name	Revenue (A$)	Impressions	CTR	Conversion Rate	ARPE Total (A$)	GP (A$)	GP%
	displayedColumns: string[] = [
		"site_name",
		"form_type",
		"email",
		"full_name",
		"phone_number",
		"created_at",
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
		// "interested_in",
		"data",
		"created_at",
	];

	// displayedColumns2: string[] = ["Sr.No", "offername", "affliatename", "revenue", "impressions", "ctr", "conversionrate", "arpetotal", "profit", "profitper"];

	columnIds = [];
	offsetPlus = 0;
	constructor(private auth: AuthService, private cdr: ChangeDetectorRef) {}

	ngOnInit() {
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
		return moment(activeTeam.created_at).format("YYYY-MM-DD hh:mm:ss");
	}

	createSurveyQuestion(data) {
		//console.log("data====", JSON.parse(data));
		var formdata = data && JSON.parse(data);
		var str = ``;
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
				data.totalcount
					.toString()
					.trim()
					.indexOf(searchString.totalcount) !== -1 &&
				data.signup.toString().trim().indexOf(searchString.signup) !==
					-1 &&
				data.revtotal
					.toString()
					.trim()
					.indexOf(searchString.revtotal) !== -1 &&
				data.payout.toString().trim().indexOf(searchString.payout) !==
					-1 &&
				data.allprofit
					.toString()
					.trim()
					.indexOf(searchString.allprofit) !== -1 &&
				data.allprofitmargin
					.toString()
					.trim()
					.indexOf(searchString.allprofitmargin) !== -1 &&
				data.arpecoreg
					.toString()
					.trim()
					.indexOf(searchString.arpecoreg) !== -1
			);
		};
		return myFilterPredicate;
	}

	getSiteNameList() {
		this.auth.getSiteNameList().subscribe(
			(data) => {
				if (data) {
					console.log("data +++_-=_+", data.data);
					
					this.siteListingData = data.data.sort((a,b) => a.name.localeCompare(b.name));
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

	ChangingValue(data) {
		console.log("data", data.target.value);
		this.isSelected = data.target.value;
	}

	getListOfMicrosite(start, end) {
		var vm = this;
		this.loading = true;
		this.avaible = false;
		this.dataSource = new MatTableDataSource([]);
		this.siteName = this.isSelected ? this.isSelected : undefined;

		console.log("siteName 111111  siteName", this.siteName);
		this.auth
			.getListOfMicrosite(start, end, this.offset, this.siteName)
			.subscribe(
				(data) => {
					if (data) {
						console.log("data +++_-=_+", data.apiData);
						// console.log("data +++_-=_+",this.offset);
						this.avaible = true;
						this.dataSource = new MatTableDataSource(data.apiData);
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
