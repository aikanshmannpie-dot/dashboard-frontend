import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { finalize } from "rxjs/operators";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AuthService, Logout } from "../../../core/auth";
import { AppState } from "../../../core/reducers";

@Component({
  selector: "kt-verify",
  templateUrl: "./verify.component.html",
  styleUrls: ["./verify.component.scss"],
})
export class VerifyComponent implements OnInit {

  loading = false;
  otp: string = '';
  verificationMessage = {
    type: '',
    message: ''
  };

  constructor(private auth: AuthService, private cdr: ChangeDetectorRef,
    private router: Router,
    private store: Store<AppState>
  ) { }
  ngOnInit() {
    if(!localStorage.getItem("user_id")){
      this.store.dispatch(new Logout());
    }
  }
 
  onSubmit(): void {
    this.loading=true;
    this.auth.verifyOtp(this.otp).subscribe((data) => {
      if (data.message) {
        this.verificationMessage = {
          type: 'success',
          message: 'Verified Successfully.'
        };
        sessionStorage.setItem("mfa","asSDFxcsdASDEWAScw12edSDFsdDSFdf4514");
        this.router.navigateByUrl("overall/1");
      }else{
        this.verificationMessage =  {
          type: 'danger',
          message: 'Invalid OTP.'
        };
      }
      this.loading = false;
      this.cdr.markForCheck();
    },
    (error) => {
      this.verificationMessage = {
        type: 'danger',
        message: 'Something went wrong.'
      }
    }
  ),
    finalize(() => {
      this.loading = false;
      this.cdr.markForCheck();
    });
  }
}
