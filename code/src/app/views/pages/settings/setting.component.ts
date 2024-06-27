import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { finalize } from "rxjs/operators";
import moment from "moment";
import { ExportToCsv } from "export-to-csv";
import { AuthService } from "../../../core/auth";

@Component({
  selector: "kt-setting",
  templateUrl: "./setting.component.html",
  styleUrls: ["./setting.component.scss"],
})
export class SettingComponent implements OnInit {
  //dataSource: MatTableDataSource<any>;
  avaible = false;
  loading = false;
  isChecked = false;
  message = "";
  apiresposne = "";

  settingInit;

  constructor(private auth: AuthService, private cdr: ChangeDetectorRef) { }

  onSwitchChange(item: any) {
    console.log(`${item} is now ${this.isChecked ? 'On' : 'Off'}`);
  }
  ngOnInit() {
    this.checkMfaEnabled();
  }
  checkMfaEnabled() {
    this.auth.checkMfaEnabled("ea52ba70-c1d0-11ea-9016-6bed9e1b6464").subscribe(
      (data) => {
        this.loading = false;
        console.log("data", data);
        this.settingInit = data;
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
  ngAfterViewInit(): void { }



  
}
