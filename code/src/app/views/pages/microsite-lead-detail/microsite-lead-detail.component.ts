import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { AuthService } from "../../../core/auth";
import { finalize } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "kt-microsite-leads",
  templateUrl: "./microsite-lead-detail.component.html",
  styleUrls: ["./microsite-lead-detail.component.scss"],
})
export class MicrositeLeadDetailComponent implements OnInit {
  avaible = false;
  loading = false;
  detail: any = null;

  dataSource: MatTableDataSource<any>;

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
    this.loading = true;
    this.auth.getLeadDetail(id).pipe(
      finalize(() => {
        this.avaible = true;
        this.loading = false;
        this.cdr.markForCheck();
        console.log("detail",this.detail);
        console.log("loading",this.loading);
        console.log("avaible",this.avaible);
      })
    ).subscribe(
      (data) => {
        console.log("apiData",data.apiData, data.apiData.length > 0);

          console.log("setting detail");
          this.detail = data.apiData.leadDetails;
          this.dataSource.data = data.apiData.leadLogs;
      },
      (error) => {
        this.loading = false;
        this.cdr.markForCheck();
        console.log("error",error);
      }
    );
  }

}
