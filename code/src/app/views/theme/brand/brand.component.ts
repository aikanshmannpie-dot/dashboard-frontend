// Angular
import { AfterViewInit, Component, OnInit } from "@angular/core";
// Layout
import { LayoutConfigService, ToggleOptions } from "../../../core/_base/layout";
import { HtmlClassService } from "../html-class.service";
import { Router } from "@angular/router";

@Component({
	selector: "kt-brand",
	templateUrl: "./brand.component.html",
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

	toggleOptions: ToggleOptions = {
		target: "body",
		targetState: "kt-aside--minimize",
		togglerState: "kt-aside__brand-aside-toggler--active",
	};

	/**
	 * Component constructor
	 *
	 * @param layoutConfigService: LayoutConfigService
	 * @param htmlClassService: HtmlClassService
	 */
	constructor(
		private layoutConfigService: LayoutConfigService,
		public htmlClassService: HtmlClassService,
		private router: Router
	) {}

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
		this.is_teleconnex = this.router.url.includes("/2");
		this.is_mhi = this.router.url.includes("/1");

		this.is_vicidial = this.router.url.includes("/vicidial-leads");
	}

	/**
	 * On after view init
	 */
	ngAfterViewInit(): void {}

	logout() {
		localStorage.clear();
		window.location.reload();
	}
	redirectToDashboard(url) {
		//this.router.navigate([url]);
		window.location.href = url;
	}
}
