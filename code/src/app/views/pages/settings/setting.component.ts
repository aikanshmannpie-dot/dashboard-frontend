import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { finalize } from "rxjs/operators";
import moment from "moment";
import { AuthService } from "../../../core/auth";

@Component({
	standalone: false,
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

  onSwitchChange(event: any) {
    if (this.isChecked) {
      this.generateSecret();
    }
  }
  ngOnInit() {
    this.checkMfaEnabled();
  }
  checkMfaEnabled() {
    this.loading = true;
    this.auth.checkMfaEnabled()
      .pipe(
        finalize(() => {
          this.avaible = true;
          this.loading = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe(
        (data) => {
          this.settingInit = data;
          if (data && data.message && data.message.ismfaactive) {
            this.getQrCode();
          }
        },
        (error) => {
          this.cdr.markForCheck();
        }
      );
  }
  ngAfterViewInit(): void { }

  getQrCode() {
    this.gsLoading = true;
    this.auth.getQrCode()
      .pipe(
        finalize(() => {
          this.gsLoading = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe(
        (data) => {
          if (!data.error) {
            this.settingInit = {
              ismfaactive: true
            };
            this.qrData = data.message;
          }
        },
        (error) => {
          this.cdr.markForCheck();
        }
      );
  }

  generateSecret() {
    this.gsLoading = true;
    this.auth.generateSecret()
      .pipe(
        finalize(() => {
          this.gsLoading = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe(
        (data) => {
          if (!data.error) {
            this.getQrCode();
          }
        },
        (error) => {
          this.cdr.markForCheck();
        }
      );
   }
}
