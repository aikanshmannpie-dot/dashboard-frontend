import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
// RxJS

import { Observable, of, forkJoin, throwError } from "rxjs";
import { map, catchError, mergeMap, tap, take } from "rxjs/operators";
// Lodash
import { filter, some, find, each } from "lodash";
// Environment
// import { environment } from '../../../../environments/environment';
// CRUD
import {
  QueryParamsModel,
  QueryResultsModel,
  HttpUtilsService,
} from "../../_base/crud";
// Models
import { User, UserMfaModel, UserQrCodeModel, UserVerifyModel } from "../_models/user.model";
import { Permission } from "../_models/permission.model";
import { Role } from "../_models/role.model";
import jstz from "jstz";
import { environment } from "../../../../environments/environment";
import { currentAuthToken } from "../_selectors/auth.selectors";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../reducers";

// import {configUrl} from './urlDev';

// const development = {
//      API_USERS_URL : 'http://localhost:8034/api'
// }
// const API_USERS_URL = 'http://203.129.220.85:8034/api';
// const API_USERS_URL = 'http://localhost:8034/api';

const API_PERMISSION_URL = "api/permissions";
const API_ROLES_URL = "api/roles";

@Injectable()
export class AuthService {
  timeZome1;
  timeZomeValue;
  private currentToken: string | null = null;
  // baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private httpUtils: HttpUtilsService, private router: Router,
    private store: Store<AppState>

  ) {
    let timezone = jstz.determine();
    this.timeZome1 = timezone.name();
    this.timeZomeValue = this.timeZome1 == "Asia/Calcutta" ? 1 : 2;

    this.store.select(currentAuthToken).subscribe(token => {
      this.currentToken = token;
    });
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 401) {
  //     localStorage.clear();
  //     this.router.navigate(["/auth/login"]);
  //   }
  //   return throwError(() => error);
  // }
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

  // Authentication/Authorization
  login(email: string, password: string): Observable<any> {
    if (!email || !password) {
      return of(null);
    }
    let data = {
      email: email,
      password: password,
      user_role: "dashboard_user",
    };
    return this.http.post<User>(`${environment.baseUrl}/login`, data, {
      headers: this.getBaseHeaders(),
    });
  }

  logout(): Observable<any> {
    let data = {
      user_role: "dashboard_user",
    };

    return this.http.post<User>(`${environment.baseUrl}/logout`, data, {
      headers: this.getBaseHeaders(),
    });
  }

  getAffilateList(report_type): Observable<any> {
    return this.http
      .get<User>(
        `${environment.baseUrl}/dashboard/1/1/${this.timeZomeValue}/${report_type}`,
        { headers: this.getAuthHeaders() }
      )
      .pipe(
        map((res: User) => {
          return res;
        }),
        catchError((err) => {
          return null;
        })
      );
  }
  //====================
  getSourceReportList(
    startDate,
    endDate,
    isSelected,
    dashboard,
    report_type,
    country
  ): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/source-by-report/${startDate}/${endDate}/${isSelected}/${this.timeZomeValue}/${dashboard}/${report_type}/${country}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getSourceReportGraph(
    startDate,
    endDate,
    isSelected,
    dashboard,
    report_type,
    country
  ): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/source-by-report-graph/${startDate}/${endDate}/${isSelected}/${this.timeZomeValue}/${dashboard}/${report_type}/${country}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getAffilate(startDate, endDate, dashboard, report_type, country): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/affiliate-by-report/${startDate}/${endDate}/${this.timeZomeValue}/${dashboard}/${report_type}/${country}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getLineChart(startDate, endDate, report_type, country): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/line-chart-data/${startDate}/${endDate}/${this.timeZomeValue}/${report_type}/${country}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getAllApiData(startDate, endDate, report_type): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/get-all-report/${startDate}/${endDate}/${this.timeZomeValue}/${report_type}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getLeftSideDataTable(startDate, endDate, report_type, country): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/left-dashboard/${startDate}/${endDate}/${this.timeZomeValue}/${report_type}/${country}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getGpCorag(startDate, endDate, report_type, country): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/gpReport/${startDate}/${endDate}/${this.timeZomeValue}/${report_type}/${country}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getTicksGraph(startDate, endDate, report_type, country): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/overall-tick-graph/${startDate}/${endDate}/${this.timeZomeValue}/${report_type}/${country}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getTicksGraphAc(startDate, endDate, report_type, country): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/overall-tick-ac/${startDate}/${endDate}/${this.timeZomeValue}/${report_type}/${country}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getOverAllReport(
    startDate,
    endDate,
    dashboard,
    type,
    selectedValue,
    country
  ): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/over-all-report/${startDate}/${endDate}/${this.timeZomeValue}/${dashboard}/${type}/${selectedValue}/${country}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getCampanigns(
    startDate,
    endDate,
    dashboard,
    type,
    selectedValue,
    country
  ): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/campaigns-report/${startDate}/${endDate}/${this.timeZomeValue}/${dashboard}/${type}/${selectedValue}/${country}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getCampanignsRevenueBySuppliers(
    startDate,
    endDate,
    dashboard,
    type,
    selectedValue
  ): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/campaigns-revenue-by-suppliers-report/${startDate}/${endDate}/${this.timeZomeValue}/${dashboard}/${type}/${selectedValue}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getCampanignsRevenueBySuppliersGrouped(
    startDate,
    endDate,
    dashboard,
    type,
    selectedValue
  ): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/campaigns-revenue-by-suppliers-report-grouped/${startDate}/${endDate}/${this.timeZomeValue}/${dashboard}/${type}/${selectedValue}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getAgents(startDate, endDate, type, selectedValue): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/agent-report/${startDate}/${endDate}/${this.timeZomeValue}/${type}/${selectedValue}`,
      { headers: this.getAuthHeaders() }
    );
  }
  getReport1(startDate, endDate, type, selectedValue): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/teleconnexdailyprogress/${startDate}/${endDate}/${this.timeZomeValue}/${type}/${selectedValue}`,
      { headers: this.getAuthHeaders() }
    );
  }
  getReport2(startDate, endDate, type, selectedValue): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/teleconnexdailyprogressco/${startDate}/${endDate}/${this.timeZomeValue}/${type}/${selectedValue}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getTeleconnex(startDate, endDate, type, selectedValue): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/agent-report/${startDate}/${endDate}/${this.timeZomeValue}/${type}/${selectedValue}`,
      { headers: this.getAuthHeaders() }
    );
  }
  getTeleconnex2(startDate, endDate, type, selectedValue): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/agent-report/${startDate}/${endDate}/${this.timeZomeValue}/${type}/${selectedValue}`,
      { headers: this.getAuthHeaders() }
    );
  }
  getOverAllClick(
    startDate,
    endDate,
    report_type,
    isSeptToNov,
    country
  ): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/overall-ticks/${startDate}/${endDate}/${this.timeZomeValue}/${report_type}/${isSeptToNov}/${country}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getClickOutReport(startDate, endDate, report_type, country): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/clickout-report/${startDate}/${endDate}/${this.timeZomeValue}/${report_type}/${country}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getSiteNameList(): Observable<any> {
    return this.http.get<User>(`${environment.baseUrl}/get-site-list`, {
      headers: this.getAuthHeaders(),
    });
  }
  getLeadReportByDomain(startDate, endDate): Observable<any> {
    return this.http.get(`${environment.baseUrl}/microsite/getleadsbydomain/${startDate}/${endDate}`, {
      headers: this.getAuthHeaders(),
    });
  }
  getMetaSourceList(): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/import/getmetasourcelist`,
      {
        headers: this.getAuthHeaders(),
      }
    );
  }
  getCallcenterList(): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/import/getcallcenterlist`,
      {
        headers: this.getAuthHeaders(),
      }
    );
  }

  getSupplierList(): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/import/getsupplierlist`,
      {
        headers: this.getAuthHeaders(),
      }
    );
  }

  getListOfMicrosite(startDate, endDate, offSet, siteName): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/micrositelisting/${startDate}/${endDate}/${offSet}/${siteName}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getLeadsAccordingToApiClient(startDate, endDate, siteName): Observable<any> {
    return this.http.get<User>(
      `${environment.baseUrl}/microsite/get-leads-by-api-name/${startDate}/${endDate}/${siteName}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getMicrositeSourceLeads(startDate, endDate): Observable<any> {
    return this.http.get<any>(
      `${environment.baseUrl}/microsite-source-report/${startDate}/${endDate}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getMicrositeAffiliateReport(startDate, endDate): Observable<any> {
    return this.http.get<any>(
      `${environment.baseUrl}/microsite-affiliate-report/${startDate}/${endDate}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getTotalLeadsByPhone(source): Observable<any> {
    return this.http.get<any>(
      `${environment.baseUrl}/import/gettotalleads/${source}`, {
      headers: this.getAuthHeaders()
    }
    );
  }

  getActiveMonthly(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/import/getActiveMonthly`, {
      headers: this.getAuthHeaders()
    });
  }

  getRepeatWeekly(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/import/getRepeatWeekly`, {
      headers: this.getAuthHeaders()
    });
  }

  getAgeData(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/import/getAgeData`, {
      headers: this.getAuthHeaders()
    });
  }
  getGenderCount(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/import/getGenderCount`, {
      headers: this.getAuthHeaders()
    });
  }

  getTotalUniqueLeadsAcquirely(): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}/import/getTotalUniqueLeadsAcquirely`, {
      headers: this.getAuthHeaders()
    }
    );
  }

  getTotalUniqueLeadsAcquirelyAll(): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}/import/getTotalUniqueLeadsAcquirelyAll`, {
      headers: this.getAuthHeaders()
    }
    );
  }

  getTotalUniqueLeadsAcquirelyPartners(): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}/import/getTotalUniqueLeadsAcquirelyPartners`, {
      headers: this.getAuthHeaders()
    }
    );
  }

  getTotalUniqueLeadsTeleconnex(): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}/import/getTotalUniqueLeadsTeleconnex`, {
      headers: this.getAuthHeaders()
    }
    );
  }

  getActiveLastWeek(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/import/getactivelastweek`, {
      headers: this.getAuthHeaders()
    });
  }

  postListOfVicidial(startDate, endDate, leadType): Observable<any> {
    var data = {
      startDate: startDate,
      endDate: endDate,
      leadType: leadType,
    };
    return this.http.post(
      `${environment.baseUrl}/import/teleconnexvicidial`,
      data,
      {
        headers: this.getAuthHeaders(),
      }
    );
  }
  getVicidialResponses(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/import/getvicidialresponses`, {
      headers: this.getAuthHeaders(),
    });
  }
  getListOfLeads(startDate, endDate): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}/import/getmhitoteleconnex/${startDate}/${endDate}`,
      {
        headers: this.getAuthHeaders(),
      }
    );
  }
  register(user: User): Observable<any> {
    user.roles = [2]; // Manager
    user.accessToken = "access-token-" + Math.random();
    user.refreshToken = "access-token-" + Math.random();
    user.pic = "./assets/media/users/default.jpg";
    user["user_role"] = "dashboard_user";

    return this.http
      .post<User>(`${environment.baseUrl}/register`, user, {
        headers: this.getBaseHeaders(),
      })
      .pipe(
        map((res: User) => {
          return res;
        }),
        catchError((err) => {
          return null;
        })
      );
  }

  requestPassword(email: string): Observable<any> {
    return this.http.get(environment.baseUrl).pipe(
      map((users: User[]) => {
        if (users.length <= 0) {
          return null;
        }

        const user = find(users, (item: User) => {
          return item.email.toLowerCase() === email.toLowerCase();
        });

        if (!user) {
          return null;
        }

        user.password = undefined;
        return user;
      }),
      catchError(this.handleError("forgot-password", []))
    );
  }

  getUserByToken(): Observable<User> {
    const userToken = localStorage.getItem(environment.authTokenKey);
    if (!userToken) {
      return of(null);
    }

    return this.getAllUsers().pipe(
      map((result: User[]) => {
        if (result.length <= 0) {
          return null;
        }

        const user = find(result, (item: User) => {
          return item.accessToken === userToken.toString();
        });

        if (!user) {
          return null;
        }

        user.password = undefined;
        return user;
      })
    );
  }

  // Users

  // CREATE =>  POST: add a new user to the server
  createUser(user: User): Observable<User> {
    return this.http.post<User>(environment.baseUrl, user, {
      headers: this.getBaseHeaders(),
    });
  }

  // READ
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.baseUrl, {
      headers: this.getBaseHeaders(),
    });
  }

  getUserById(userId: number): Observable<User> {
    if (!userId) {
      return of(null);
    }

    return this.http.get<User>(environment.baseUrl + `/${userId}`, {
      headers: this.getBaseHeaders(),
    });
  }

  // DELETE => delete the user from the server
  deleteUser(userId: number) {
    const url = `${environment.baseUrl}/${userId}`;
    return this.http.delete(url, {
      headers: this.getBaseHeaders(),
    });
  }

  // UPDATE => PUT: update the user on the server
  updateUser(_user: User): Observable<any> {
    return this.http
      .put(environment.baseUrl, _user, { headers: this.getBaseHeaders() })
      .pipe(
        catchError((err) => {
          return of(null);
        })
      );
  }

  // Method from server should return QueryResultsModel(items: any[], totalsCount: number)
  // items => filtered/sorted result
  findUsers(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
    // This code imitates server calls
    return this.getAllUsers().pipe(
      mergeMap((response: User[]) => {
        const result = this.httpUtils.baseFilter(response, queryParams, []);
        return of(result);
      })
    );
  }

  // Permissions
  getAllPermissions(): Observable<Permission[]> {
    return this.http.get<Permission[]>(API_PERMISSION_URL, {
      headers: this.getBaseHeaders(),
    });
  }

  getRolePermissions(roleId: number): Observable<Permission[]> {
    const allRolesRequest = this.http.get<Permission[]>(API_PERMISSION_URL, {
      headers: this.getBaseHeaders(),
    });
    const roleRequest = roleId ? this.getRoleById(roleId) : of(null);
    return forkJoin(allRolesRequest, roleRequest).pipe(
      map((res) => {
        const _allPermissions: Permission[] = res[0];
        const _role: Role = res[1];
        if (!_allPermissions || _allPermissions.length === 0) {
          return [];
        }

        const _rolePermission = _role ? _role.permissions : [];
        const result: Permission[] = this.getRolePermissionsTree(
          _allPermissions,
          _rolePermission
        );
        return result;
      })
    );
  }

  private getRolePermissionsTree(
    _allPermission: Permission[] = [],
    _rolePermissionIds: number[] = []
  ): Permission[] {
    const result: Permission[] = [];
    const _root: Permission[] = filter(
      _allPermission,
      (item: Permission) => !item.parentId
    );
    each(_root, (_rootItem: Permission) => {
      _rootItem._children = [];
      _rootItem._children = this.collectChildrenPermission(
        _allPermission,
        _rootItem.id,
        _rolePermissionIds
      );
      _rootItem.isSelected = some(
        _rolePermissionIds,
        (id: number) => id === _rootItem.id
      );
      result.push(_rootItem);
    });
    return result;
  }

  private collectChildrenPermission(
    _allPermission: Permission[] = [],
    _parentId: number,
    _rolePermissionIds: number[] = []
  ): Permission[] {
    const result: Permission[] = [];
    const _children: Permission[] = filter(
      _allPermission,
      (item: Permission) => item.parentId === _parentId
    );
    if (_children.length === 0) {
      return result;
    }

    each(_children, (_childItem: Permission) => {
      _childItem._children = [];
      _childItem._children = this.collectChildrenPermission(
        _allPermission,
        _childItem.id,
        _rolePermissionIds
      );
      _childItem.isSelected = some(
        _rolePermissionIds,
        (id: number) => id === _childItem.id
      );
      result.push(_childItem);
    });
    return result;
  }

  // Roles
  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(API_ROLES_URL, {
      headers: this.getBaseHeaders(),
    });
  }

  getRoleById(roleId: number): Observable<Role> {
    return this.http.get<Role>(API_ROLES_URL + `/${roleId}`, {
      headers: this.getBaseHeaders(),
    });
  }

  // CREATE =>  POST: add a new role to the server
  createRole(role: Role): Observable<Role> {
    // Note: Add headers if needed (tokens/bearer)
    return this.http.post<Role>(API_ROLES_URL, role, {
      headers: this.getAuthHeaders(),
    });
  }

  // UPDATE => PUT: update the role on the server
  updateRole(role: Role): Observable<any> {
    return this.http.put(API_ROLES_URL, role, { headers: this.getAuthHeaders() });
  }

  // DELETE => delete the role from the server
  deleteRole(roleId: number): Observable<Role> {
    const url = `${API_ROLES_URL}/${roleId}`;
    return this.http.delete<Role>(url, {
      headers: this.getBaseHeaders(),
    });
  }

  findRoles(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
    // This code imitates server calls
    return this.http.get<Role[]>(API_ROLES_URL, {
      headers: this.getBaseHeaders(),
    }).pipe(
      mergeMap((res) => {
        const result = this.httpUtils.baseFilter(res, queryParams, []);
        return of(result);
      })
    );
  }

  // Check Role Before deletion
  isRoleAssignedToUsers(roleId: number): Observable<boolean> {
    return this.getAllUsers().pipe(
      map((users: User[]) => {
        if (
          some(users, (user: User) =>
            some(user.roles, (_roleId: number) => _roleId === roleId)
          )
        ) {
          return true;
        }

        return false;
      })
    );
  }

  checkMfaEnabled(): Observable<any> {
    const userid = localStorage.getItem("user_id");
    return this.http.post<UserMfaModel>(`${environment.baseUrl}/check-mfa-enabled`, { userid: userid }, {
      headers: this.getAuthHeaders(),
    });
  }

  getQrCode(): Observable<any> {
    const userid = localStorage.getItem("user_id");
    return this.http.post<UserQrCodeModel>(`${environment.micrositeApiUrl}/generate-qr-code`, { userid: userid }, {
      headers: this.getBaseHeaders(),
    });
  }
  generateSecret(): Observable<any> {
    const userid = localStorage.getItem("user_id");
    return this.http.post<UserQrCodeModel>(`${environment.micrositeApiUrl}/generate-secret`, { userid: userid }, {
      headers: this.getBaseHeaders(),
    });
  }
  verifyOtp(otp: string): Observable<any> {
    const userid = localStorage.getItem("user_id");
    return this.http.post<UserVerifyModel>(`${environment.micrositeApiUrl}/verify-otp`, { userid: userid, token: otp }, {
      headers: this.getBaseHeaders(),
    });
  }
  getLeadDetail(leadId: number): Observable<any> {
    return this.http.get<User>(`${environment.baseUrl}/microsite/getleaddetail/${leadId}`, {
      headers: this.getAuthHeaders(),
    });
  }
}
