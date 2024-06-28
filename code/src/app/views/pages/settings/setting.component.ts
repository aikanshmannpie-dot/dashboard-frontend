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
  gsLoading = false;
  qrData: string = '';
  isChecked = false;
  message = "";
  apiresposne = "";

  settingInit = {
    ismfaactive: false
  };

  constructor(private auth: AuthService, private cdr: ChangeDetectorRef) { }

  onSwitchChange(item: any) {
    if (this.isChecked) {
      this.generateSecret();
    }
  }
  ngOnInit() {
    this.checkMfaEnabled();
  }
  checkMfaEnabled() {
    this.auth.checkMfaEnabled().subscribe(
      (data) => {
        this.loading = false;
        this.settingInit = data;
        if (data.message.ismfaactive) {
          this.getQrCode();
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
        this.cdr.markForCheck();
      });
  }
  ngAfterViewInit(): void { }

  getQrCode() {
    this.gsLoading = true;
    this.auth.getQrCode().subscribe(
      (data) => {
        this.gsLoading = false;
        if (!data.error) {
          this.settingInit = {
            ismfaactive: true
          };
          this.qrData = data.message;
        }
        this.cdr.markForCheck();
      },
      (error) => {
        this.gsLoading = false;
        this.cdr.markForCheck();
      }
    ),
      finalize(() => {
        this.gsLoading = false;
        this.cdr.markForCheck();
      });
  }

  generateSecret() {
    this.gsLoading = true;
    this.auth.generateSecret().subscribe(
      (data) => {
        this.gsLoading = false;
        if (!data.error) {
          this.getQrCode();
        }
      },
      (error) => {
        this.gsLoading = false;
        this.cdr.markForCheck();
      }
    ),
      finalize(() => {
        this.gsLoading = false;
        this.cdr.markForCheck();
      });
   }
}
