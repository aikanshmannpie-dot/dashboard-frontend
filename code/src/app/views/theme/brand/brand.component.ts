// Angular
import { AfterViewInit, Component, OnInit } from "@angular/core";
// Layout
import { LayoutConfigService, ToggleOptions } from "../../../core/_base/layout";
import { HtmlClassService } from "../html-class.service";
import { Router } from "@angular/router";

@Component({
	standalone: false,

	selector: "kt-brand",
	templateUrl: "./brand.component.html",
	styleUrls: ["./brand.component.scss"],
})
export class BrandComponent implements OnInit, AfterViewInit {
	// Public properties
	headerLogo: string;
	headerStickyLogo: string;
	teleconnex_text: string;
	mhi_text: string;
	is_teleconnex: boolean;
	is_mhi: boolean;
	is_vicidial: boolean;
	microsite_reporting_text: string;
	analytics_dashboard_text: string;

	toggleOptions: ToggleOptions = {
		target: "body",
		targetState: "kt-aside--minimize",
		togglerState: "kt-aside__brand-aside-toggler--active",
	};
	is_microsite_report: boolean;
	is_analytics: boolean;

	/**
	 * Component constructor
	 *
	 * @param layoutConfigService: LayoutConfigService
	 * @param htmlClassService: HtmlClassService
	 */
	constructor(
		private layoutConfigService: LayoutConfigService,
		public htmlClassService: HtmlClassService,
		public router: Router
	) { }

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {
		this.headerLogo = this.layoutConfigService.getLogo();
		this.headerStickyLogo = this.layoutConfigService.getStickyLogo();

		this.teleconnex_text = this.router.url.includes("/2")
			? "Teleconnex Reporting"
			: "Switch to Teleconnex";
		this.mhi_text = this.router.url.includes("/1")
			? "MHI Reporting"
			: "Switch to MHI";
		this.microsite_reporting_text = this.router.url.includes("/3")
			? "Microsite Reporting"
			: "Switch to Microsite";

		this.analytics_dashboard_text = this.router.url.includes("/4")
			? "Acquirely Analytics"
			: "Switch to Acquirely";

		this.is_analytics = this.router.url.includes('/4');
		this.is_teleconnex = this.router.url.includes("/2");
		this.is_microsite_report = this.router.url.includes("/3");
		this.is_mhi = this.router.url.includes("/1");
		this.is_vicidial = this.router.url.includes("/vicidial-leads") && !this.is_analytics;
	}

	/**
	 * On after view init
	 */
	ngAfterViewInit(): void { }

	logout() {
		localStorage.clear();
		window.location.reload();
	}
	redirectToDashboard(url) {
		//this.router.navigate([url]);
		window.location.href = url;
	}
}
