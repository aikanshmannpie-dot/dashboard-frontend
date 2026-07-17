export class MenuConfig {
  public defaults: any = {
    header: {
      self: {},
      items: [],
    },
    aside: {
      self: {},
      items: [
        {
          title: "MHI / Acquirely",
          root: true,
          icon: "la la-cubes",
          toggle: "click",
          submenu: [
            {
              title: "Dashboards",
              page: "/dashboard/1",
              icon: "la la-dashboard",
            },
            {
              title: "Overall Report",
              page: "/overall/1",
              icon: "la la-file-text-o",
            },
            {
              title: "Report By Affliates",
              page: "/affilate/1",
              icon: "la la-users",
            },
            {
              title: "Report By Source",
              page: "/source-report/1",
              icon: "la la-external-link",
            },
            {
              title: "Overall Q/B Ticks Report",
              page: "/overall-ques-tick-report/1",
              icon: "la la-check-circle",
            },
            {
              title: "Report By Campaigns",
              page: "/campanigns-report/1",
              icon: "la la-bullhorn",
            },
            {
              title: "Clickout Report",
              page: "/clickout-report/1",
              icon: "la la-mouse-pointer",
            },
          ],
        },
        {
          title: "Teleconnex",
          root: true,
          icon: "la la-phone",
          toggle: "click",
          submenu: [
            {
              title: "Overall Report",
              page: "/overall/2",
              icon: "la la-file-text-o",
            },
            {
              title: "Report By Campaigns",
              page: "/campanigns-report/2",
              icon: "la la-bullhorn",
            },
            {
              title: "Report By Agent",
              page: "/agent-report/2",
              icon: "la la-user",
            },
            {
              title: "Revenue Report",
              page: "/teleconnex-revenue-report/2",
              icon: "la la-money",
            },
            {
              title: "Revenue By Supplier",
              page: "/teleconnex-revenue-by-suppliers/2",
              icon: "la la-industry",
            },
            {
              title: "Daily Progress",
              page: "/teleconnexdailyprogress/2",
              icon: "la la-line-chart",
            },
            {
              title: "Daily Progress Co-Sponsor",
              page: "/teleconnexdailyprogressco/2",
              icon: "la la-handshake-o",
            },
          ],
        },
        {
          title: "Microsite",
          root: true,
          icon: "la la-globe",
          toggle: "click",
          submenu: [
            {
              title: "Microsite-Layouts",
              page: "/microsite-layouts/3",
              icon: "la la-columns",
            },
            {
              title: "Microsite-leads",
              page: "/microsite/3",
              icon: "la la-users",
            },
            {
              title: "Source-Report",
              page: "/microsite-source-report/3",
              icon: "la la-file-text-o",
            },
            {
              title: "Affiliate-Report",
              page: "/microsite-affiliate-report/3",
              icon: "la la-user-plus",
            },
            {
              title: "Lead Report By Domains",
              page: "/microsite-lead-report-by-domains/3",
              icon: "la la-globe",
            },
            {
              title: "Lead Report By API Client",
              page: "/microsite-lead-report-by-api-client/3",
              icon: "la la-plug",
            },
            {
              title: "Lead Report By API",
              page: "/microsite-lead-report-by-api/3",
              icon: "la la-code",
            },
          ],
        },
        {
          title: "Analytics",
          root: true,
          icon: "la la-bar-chart",
          toggle: "click",
          submenu: [
            {
              title: "Analytics Dashboard",
              page: "/acquirely-analytics/4",
              icon: "la la-pie-chart",
            },
            {
              title: "Lead Conversion Summary Report",
              page: "/lead-conversion-summary/4",
              icon: "la la-exchange",
            },
          ],
        },
        // {
        //   title: "Push to vicidial",
        //   root: true,
        //   icon: "la la-upload",
        //   page: "/vicidial-leads",
        // },
        {
          title: "Settings",
          root: true,
          icon: "la la-cog",
          page: "/settings",
        },
        {
          title: "Logout",
          root: true,
          icon: "la la-sign-out",
          page: "/auth/logout",
        },
      ],
    },
  };

  public settings: any = {
    header: {
      self: {},
      items: [],
    },
    aside: {
      self: {},
      items: [],
    },
  };

  public teleconnex_defaults: any = {
    header: {
      self: {},
      items: [],
    },
    aside: {
      self: {},
      items: [],
    },
  };

  public vicidial_defaults: any = {
    header: {
      self: {},
      items: [],
    },
    aside: {
      self: {},
      items: [],
    },
  };

  public micrositeReporting_defaults: any = {
    header: {
      self: {},
      items: [],
    },
    aside: {
      self: {},
      items: [],
    },
  };

  public analytics_defaults: any = {
    header: {
      self: {},
      items: [],
    },
    aside: {
      self: {},
      items: [],
    },
  };

  public get configs(): any {
    return this.defaults;
  }
  public get teleconnex_configs(): any {
    return this.teleconnex_defaults;
  }
  public get vicidial_configs(): any {
    return this.vicidial_defaults;
  }

  public get micrositeReporting_configs(): any {
    return this.micrositeReporting_defaults;
  }

  public get analytics_configs(): any {
    return this.analytics_defaults;
  }

  public get settings_config(): any {
    return this.settings;
  }
}
