import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// RxJS
import { Observable, of } from "rxjs";
import { environment } from "../../../../environments/environment";
import { currentAuthToken } from "../_selectors/auth.selectors";
import { Store } from "@ngrx/store";
import { AppState } from "../../reducers";
import { SupplierModel } from "../_models/supplier.model";

@Injectable()
export class SupplierService {
  private currentToken: string | null = null;
  // baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.store.select(currentAuthToken).subscribe(token => {
      this.currentToken = token;
    });
  }

  private handleError<T>(operation = "operation", result?: any) {
    return (error: any): Observable<any> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }
  private getBaseHeaders(): HttpHeaders {
    return new HttpHeaders({
      "Content-Type": "application/json",
    });
  }
  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.currentToken}`,
    });
  }

  getSuppliers(): Observable<any> {
    return this.http.get<SupplierModel>(
      `${environment.baseUrl}/get-supplier-list`,
      { headers: this.getAuthHeaders() }
    );
  }

}
