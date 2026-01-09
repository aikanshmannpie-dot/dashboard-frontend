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
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "kt-microsite-leads",
  templateUrl: "./microsite-lead-detail.component.html",
  styleUrls: ["./microsite-lead-detail.component.scss"],
})
export class MicrositeLeadDetailComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  avaible = false;
  loading = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns: string[] = [
    "payload",
    "payload_type"
  ];

  offsetPlus = 0;
  constructor(private auth: AuthService, private cdr: ChangeDetectorRef, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    const id = this.route.snapshot.paramMap.get('id');
    this.getLeadDetail( parseInt(id));
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  sortColumn(data) {
    this.dataSource.sort = this.sort;
  }

  getLeadDetail(id: number ) {
    this.auth.getLeadDetail(id).subscribe(
      (data) => {
        this.dataSource.data = data.apiData;
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
