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
	selector: "kt-microsite-report",
	templateUrl: "./microsite-report.component.html",
	styleUrls: ["./microsite-report.component.scss"],
})
export class MicrositeReportComponent implements OnInit {
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
	@ViewChild("content", { static: true }) content: ElementRef;

	@ViewChild("pdfTable", { static: false }) pdfTable: ElementRef;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	@ViewChild(MatSort, { static: false }) sort: MatSort;
	displayedColumns: string[] = [
		"Site_name",
		"source",
		"leads"
	];
	columnIds = [];
	offsetPlus = 0;
	constructor(private auth: AuthService, private cdr: ChangeDetectorRef) { }
	
	ngOnInit(): void {
		this.dataSource = new MatTableDataSource([{ Site_name: "A" }, { Site_name: "B" }, { Site_name: "V" }]);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.startDate = moment(new Date()).format("YYYY-MM-DD");
		this.endDate = moment(new Date()).format("YYYY-MM-DD");
		this.getMicrositeSourceReport(this.startDate, this.startDate);
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

	searchRange() {
		this.endDate = this.model1.end
			? moment(this.model1.end._d).format("YYYY-MM-DD")
			: moment(new Date()).format("YYYY-MM-DD");
		this.startDate = this.model1.start
			? moment(this.model1.start._d).format("YYYY-MM-DD")
			: moment(new Date()).format("YYYY-MM-DD");
		if (this.startDate) {
			this.getMicrositeSourceReport(this.startDate, this.endDate);
		} else {
			this.getMicrositeSourceReport(this.startDate, this.endDate);
		}
	}

	getMicrositeSourceReport(start, end) {
		var vm = this;
		this.loading = true;
		this.avaible = false;
		this.dataSource = new MatTableDataSource([]);
		this.siteName = this.isSelected ? this.isSelected : undefined;
		debugger;
		this.auth
			.getMicrositeSourceLeads(start, end)
			.subscribe(
				(data) => {
					if (data) {
						console.log("data : bhanu +++_-=_+", data.apiData);
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