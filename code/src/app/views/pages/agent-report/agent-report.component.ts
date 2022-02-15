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
import * as jsPDF from "jspdf";
import html2canvas from "html2canvas";
import * as jspdf from "jspdf";
import { Router } from "@angular/router";
import {
	animate,
	state,
	style,
	transition,
	trigger,
} from "@angular/animations";

@Component({
	selector: "table-expandable-rows-example",
	templateUrl: "./agent-report.component.html",
	styleUrls: ["./agent-report.component.scss"],
	animations: [
		trigger("detailExpand", [
			state("collapsed", style({ height: "0px", minHeight: "0" })),
			state("expanded", style({ height: "*" })),
			transition(
				"expanded <=> collapsed",
				animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
			),
		]),
	],
})
export class AgentReportComponent implements OnInit {
	dataSource: MatTableDataSource<any>;
	dataSource1;
	dataSourceExport: MatTableDataSource<any>;
	dataSource1Export;
	avaible = false;
	loading = false;
	model1;
	endDate;
	startDate;
	globalFilter = "";
	metasourceListingData = [];
	selectedValue = "undefined";
	report_type;
	areNoRecords = false;
	search = true;
	download = true;
	searchButton() {
		this.search = !this.search;
	};
	downloadButton() {
		this.download = !this.download;
	};

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
		agentname: "",
		totalcountuniq: "",
		slackname: "",
		name: "",
	};

	@ViewChild("pdfTable", { static: false }) pdfTable: ElementRef;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	// @ViewChild('sort1', { static: true }) sort: MatSort;
	@ViewChild(MatSort, { static: false }) sort: MatSort;

	displayedColumns: string[] = [
		"Sr.No",
		"agentname",
		"name",
		"slackname",
		"totalcountuniq",
		//"signup",
	];
	displayedColumnsNested: string[] = [
		"agentname",
		"name",
		"slackname",
		"campaign_name",
		"totalcountuniq",
		//"signup",
	];

	columnIds = [];

	//dataSource2 = ELEMENT_DATA;
	//displayedColumns = ["name", "weight", "symbol", "position"];
	expandedElement: true;

	constructor(
		private auth: AuthService,
		private cdr: ChangeDetectorRef,
		private router: Router
	) {}

	ngOnInit() {
		this.report_type = this.router.url.includes("/2") ? "2" : "1";
		this.getMetaSourceList();
		this.dataSource = new MatTableDataSource();
		this.dataSourceExport = new MatTableDataSource();
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.getAgents(
			moment(new Date()).format("YYYY-MM-DD"),
			moment(new Date()).format("YYYY-MM-DD")
		);
		this.dataSource.filterPredicate = this.customFilterPredicate();
	}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

	getMetaSourceList() {
		this.auth.getMetaSourceList().subscribe(
			(data) => {
				if (data) {
					console.log("data +++_-=_+", data.apiData);

					this.metasourceListingData = data.apiData;
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
		this.selectedValue = data.target.value;
	}

	public downloadAsPDF() {
		var data = document.getElementById("pdfTable");
		html2canvas(data).then((canvas) => {
			var doc = new jsPDF("p", "mm", "a4");

			const contentDataURL = canvas.toDataURL("image/png");
			let pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
			var position = 0;
			var width = doc.internal.pageSize.getWidth();
			var height = doc.internal.pageSize.getHeight();
			console.log(width, height);
			pdf.addImage(contentDataURL, "PNG", 0, position, width, height);
			pdf.save("MYPdf.pdf"); // Generated PDF
		});
	}

	sortColumn(data) {
		this.dataSource.sort = this.sort;
	}

	showTable() {
		var vm = this;
		this.avaible = true;
		this.dataSource = new MatTableDataSource(this.dataSource1);
		this.dataSourceExport = new MatTableDataSource(this.dataSource1Export);
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
			this.getAgents(this.startDate, this.endDate);
		} else {
			this.getAgents(this.startDate, this.endDate);
		}
	}

	customFilterPredicate() {
		const myFilterPredicate = (data: any, filter: any): boolean => {
			var globalMatch = !this.globalFilter;
			if (this.globalFilter) {
				globalMatch =
					data.agentname
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
				data.agentname
					.toString()
					.trim()
					.indexOf(searchString.agentname) !== -1 &&
				data.totalcountuniq
					.toString()
					.trim()
					.indexOf(searchString.totalcountuniq) !== -1
				// 	&&
				// data.signup.toString().trim().indexOf(searchString.signup) !==
				// 	-1
			);
		};
		return myFilterPredicate;
	}

	getAgents(start, end) {
		this.loading = true;
		this.avaible = false;
		this.dataSource = new MatTableDataSource([]);
		this.dataSourceExport = new MatTableDataSource([]);

		this.auth
			.getAgents(start, end, this.report_type, this.selectedValue)
			.subscribe(
				(data) => {
					if (data) {
						this.avaible = true;
						this.dataSource = new MatTableDataSource(data.tempdata);
						this.dataSource1 = data.body;

						this.dataSourceExport = new MatTableDataSource(
							data.apiData
						);
						this.dataSource1Export = data.body;
						this.dataSource.paginator = this.paginator;
						this.loading = false;
						console.log("data.apiData==", data.apiData);
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
}
