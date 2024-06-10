import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";

// Components

import { BaseComponent } from "./views/theme/base/base.component";

import { ErrorPageComponent } from "./views/theme/content/error-page/error-page.component";

// Auth

import { AuthGuard } from "./core/auth";

const routes: Routes = [
  {
    path: "auth",

    loadChildren: () =>
      import("./views/pages/auth/auth.module").then((m) => m.AuthModule),
  },

  {
    path: "",

    component: BaseComponent,

    canActivate: [AuthGuard],

    children: [
      {
        path: "dashboard/:type",

        loadChildren: () =>
          import("./views/pages/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },

      {
        path: "overall/:type",

        loadChildren: () =>
          import("./views/pages/overall-report/overall-report.module").then(
            (m) => m.OverallReportModule
          ),
      },

      {
        path: "affilate/:type",

        loadChildren: () =>
          import("./views/pages/affilate-report/affilate-report.module").then(
            (m) => m.AffilateReportModule
          ),
      },

      {
        path: "clickout-report/:type",

        loadChildren: () =>
          import("./views/pages/clickout-report/clickout-report.module").then(
            (m) => m.ClickoutReportModule
          ),
      },

      {
        path: "campanigns-report/:type",

        loadChildren: () =>
          import(
            "./views/pages/campanigns-report/campanigns-report.module"
          ).then((m) => m.CampanignsReportModule),
      },

      {
        path: "microsite/:type",

        loadChildren: () =>
          import("./views/pages/microsite-leads/microsite-leads.module").then(
            (m) => m.MicrositeLeadsModule
          ),
      },

      {
        path: "microsite-source-report/:type",

        loadChildren: () =>
          import("./views/pages/microsite-report/microsite-report.module").then(
            (m) => m.MicrositeReportModule
          ),
      },

      {
        path: "microsite-affiliate-report/:type",

        loadChildren: () =>
          import(
            "./views/pages/microsite-affiliate-report/microsite-affiliate-report.module"
          ).then((m) => m.MicrositeAffiliateReportModule),
      },
      {
        path: "microsite-lead-report-by-domains/:type",

        loadChildren: () =>
          import(
            "./views/pages/microsite-lead-report-by-domains/microsite-lead-report-by-domains.module"
          ).then((m) => m.MicrositeLeadReportByDomainModule),
      },
      {
        path: "microsite-lead-report-by-api/:type",

        loadChildren: () =>
          import(
            "./views/pages/microsite-leads-by-api/microsite-leads-by-api.module"
          ).then((m) => m.MicrositeLeadsByApiModule),
      },

      {
        path: "microsite-layouts/:type",

        loadChildren: () =>
          import(
            "./views/pages/microsite-layouts/microsite-layouts.module"
          ).then((m) => m.MicrositeLayoutsModule),
      },

      {
        path: "overall-ques-tick-report/:type",

        loadChildren: () =>
          import(
            "./views/pages/overall-ques-tick-report/overall-ques-tick-report.module"
          ).then((m) => m.OverallQuesTickReportModule),
      },

      {
        path: "overall-tick-report/:type",

        loadChildren: () =>
          import(
            "./views/pages/overall-tick-report/overall-tick-report.module"
          ).then((m) => m.OverallTickReportModule),
      },

      {
        path: "source-report/:type",

        loadChildren: () =>
          import("./views/pages/source-report/source-report.module").then(
            (m) => m.SourceReportModule
          ),
      },

      {
        path: "user-management",

        loadChildren: () =>
          import("./views/pages/user-management/user-management.module").then(
            (m) => m.UserManagementModule
          ),
      },

      {
        path: "vicidial-leads",

        loadChildren: () =>
          import("./views/pages/vicidial-leads/vicidial-leads.module").then(
            (m) => m.VicidialLeadsModule
          ),
      },

      {
        path: "teleconnex-dashboard/:type",

        loadChildren: () =>
          import(
            "./views/pages/teleconnex-dashboard/teleconnex-dashboard.module"
          ).then((m) => m.TeleconnexDashboardModule),
      },

      {
        path: "agent-report/:type",

        loadChildren: () =>
          import("./views/pages/agent-report/agent-report.module").then(
            (m) => m.AgentReportModule
          ),
      },
      {
        path: "teleconnexdailyprogress/:type",

        loadChildren: () =>
          import(
            "./views/pages/teleconnex-daily-progress-report/teleconnex-daily-progress-report.module"
          ).then((m) => m.TeleconnexDailyProgressReportModule),
      },
      {
        path: "teleconnexdailyprogressco/:type",

        loadChildren: () =>
          import(
            "./views/pages/teleconnex-daily-progress-co-report/teleconnex-daily-progress-co-report.module"
          ).then((m) => m.TeleconnexDailyProgressCoReportModule),
      },
      {
        path: "teleconnex-revenue-report/:type",

        loadChildren: () =>
          import(
            "./views/pages/teleconnex-revenue-report/teleconnex-revenue-report.module"
          ).then((m) => m.TeleconnexRevenueReportModule),
      },

      {
        path: "teleconnex-revenue-by-supplier/:type",

        loadChildren: () =>
          import(
            "./views/pages/teleconnex-revenue-by-supplier/teleconnex-revenue-by-supplier.module"
          ).then((m) => m.TeleconnexRevenueBySupplierModule),
      },

      {
        path: "teleconnex-revenue-by-suppliers/:type",

        loadChildren: () =>
          import(
            "./views/pages/teleconnex-revenue-by-suppliers/teleconnex-revenue-by-suppliers.module"
          ).then((m) => m.TeleconnexRevenueBySuppliersModule),
      },

      {
        path: "acquirely-analytics/:type",

        loadChildren: () =>
          import(
            "./views/pages/analytics-dashboard/analytics-dashboard.module"
          ).then((m) => m.AnalyticsDashboardModule),
      },
      {
        path: "lead-conversion-summary/:type",
        loadChildren: () =>
          import(
            "./views/pages/mhi-to-teleconnex/mhi-to-teleconnex.module"
          ).then((m) => m.MHIToTeleconnexModule),
      },

      {
        path: "error/403",

        component: ErrorPageComponent,

        data: {
          type: "error-v6",

          code: 403,

          title: "403... Access forbidden",

          desc: "Looks like you don't have permission to access for requested page.<br> Please, contact administrator",
        },
      },

      { path: "error/:type", component: ErrorPageComponent },

      { path: "", redirectTo: "dashboard", pathMatch: "full" },

      { path: "**", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },

  { path: "**", redirectTo: "error/403", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
