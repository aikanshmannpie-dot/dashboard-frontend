export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: "Dashboards",
					root: true,
					alignment: "left",
					page: "/dashboard/1",
					translate: "MENU.DASHBOARD",
				},
				{
					title: "Overall Report",
					root: true,
					alignment: "left",
					page: "/overall/1",
					translate: "MENU.DASHBOARD",
				},
				{
					title: "Report By Affliates",
					root: true,
					alignment: "left",
					page: "/affilate/1",
					translate: "MENU.DASHBOARD",
				},
				{
					title: "Report By Source",
					root: true,
					alignment: "left",
					page: "/source-report/1",
					translate: "MENU.DASHBOARD",
				},
				// {
				// 	title: 'Overall Ticks Report',
				// 	root: true,
				// 	alignment: 'left',
				// 	page: '/overall-tick-report',
				// 	translate: 'MENU.DASHBOARD',
				// },
				{
					title: "Overall Q/B Ticks Report",
					root: true,
					alignment: "left",
					page: "/overall-ques-tick-report/1",
					translate: "MENU.DASHBOARD",
				},
				{
					title: "Report By Campaigns",
					root: true,
					alignment: "left",
					page: "/campanigns-report/1",
					translate: "MENU.DASHBOARD",
				},
				{
					title: "Clickout Report",
					root: true,
					alignment: "left",
					page: "/clickout-report/1",
					translate: "MENU.DASHBOARD",
				},
				// {
				// 	title: "Microsite-leads",
				// 	root: true,
				// 	alignment: "left",
				// 	page: "/microsite-leads/1",
				// 	translate: "MENU.DASHBOARD",
				// },
			],
		},
	};

	public teleconnex_defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: "Overall Report",
					root: true,
					alignment: "left",
					page: "/overall/2",
					translate: "MENU.DASHBOARD",
				},

				{
					title: "Report By Campaigns",
					root: true,
					alignment: "left",
					page: "/campanigns-report/2",
					translate: "MENU.DASHBOARD",
				},
				{
					title: "Report By Agent",
					root: true,
					alignment: "left",
					page: "/agent-report/2",
					translate: "MENU.DASHBOARD",
				},
				{
					title: "Teleconnex Revenue Report",
					root: true,
					alignment: "left",
					page: "/teleconnex-revenue-report/2",
					translate: "MENU.DASHBOARD",
				},
				// {
				// 	title: "Revenue By Supplier",
				// 	root: true,
				// 	alignment: "left",
				// 	page: "/teleconnex-revenue-by-supplier/2",
				// 	translate: "MENU.DASHBOARD",
				// },
				{
					title: "Revenue Report By Supplier",
					root: true,
					alignment: "left",
					page: "/teleconnex-revenue-by-suppliers/2",
					translate: "MENU.DASHBOARD",
				},
			],
		},
	};
	public vicidial_defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: "Push to vicidial",
					root: true,
					alignment: "left",
					page: "/vicidial-leads",
					translate: "MENU.DASHBOARD",
				},
			],
		},
	};

	public micrositeReporting_defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: "Microsite-leads",
					root: true,
					alignment: "left",
					page: "/microsite-leads/3",
					translate: "MENU.DASHBOARD",
				},
				{
					title: "Source-Report",
					root: true,
					alignment: "left",
					page: "/microsite-source-report/3",
					translate: "MENU.DASHBOARD",
				},
				{
					title: "Affiliate-Report",
					root: true,
					alignment: "left",
					page: "/microsite-affiliate-report/3",
					translate: "MENU.DASHBOARD",
				}
			],
		},
	};


	public analytics_defaults: any = {
		header: {
			self: {},
			items: [{
				title: "Analytics Dashboard",
				root: true,
				alignment: "left",
				page: "/acquirely-analytics/4",
				translate: "MENU.DASHBOARD",
			}]
		}
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
}
