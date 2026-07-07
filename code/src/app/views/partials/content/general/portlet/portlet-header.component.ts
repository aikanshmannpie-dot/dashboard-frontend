import { KtDialogService, StickyDirective } from '../../../../../core/_base/layout';
// Angular
import {
	AfterViewInit,
	Component,
	ElementRef,
	HostBinding,
	HostListener,
	Inject,
	Input,
	OnDestroy,
	OnInit,
	PLATFORM_ID,
	ViewChild
} from '@angular/core';
// RXJS
import { Observable, Subscription } from 'rxjs';

@Component({
	standalone: false,
	selector: 'kt-portlet-header',
	styleUrls: ['portlet-header.component.scss'],
	template: `
		<div class="kt-portlet__head-label" [hidden]="noTitle">
			<span class="kt-portlet__head-icon" #refIcon [hidden]="hideIcon || !icon">
				<ng-content *ngIf="!icon" select="[ktPortletIcon]"></ng-content>
				<i *ngIf="icon" [ngClass]="icon"></i>
			</span>
			<ng-content *ngIf="!title" select="[ktPortletTitle]"></ng-content>
			<h3 *ngIf="title" class="kt-portlet__head-title" [innerHTML]="title"></h3>
		</div>
		<div class="kt-portlet__head-toolbar" #refTools [hidden]="hideTools">
			<ng-content select="[ktPortletTools]"></ng-content>
		</div>`
})
export class PortletHeaderComponent implements OnInit, AfterViewInit, OnDestroy {
	// Public properties
	@Input() class: string;
	@Input() title: string;
	@Input() icon: string;
	@Input() noTitle: boolean;
	@Input() sticky: boolean;
	@Input() viewLoading$: Observable<boolean>;
	viewLoading = false;

	@HostBinding('class') classes = 'kt-portlet__head';
	@HostBinding('attr.ktSticky') stickyDirective: StickyDirective;

	@ViewChild('refIcon', {static: true}) refIcon: ElementRef;
	hideIcon: boolean;

	@ViewChild('refTools', {static: true}) refTools: ElementRef;
	hideTools: boolean;

	private lastScrollTop = 0;
	private subscriptions: Subscription[] = [];
	private isScrollDown = false;

	constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: string, private ktDialogService: KtDialogService) {
		this.stickyDirective = new StickyDirective(this.el, this.platformId);
	}

	@HostListener('window:resize', ['$event'])
	onResize(event?: any) {
		this.updateStickyPosition();
	}

	@HostListener('window:scroll', ['$event'])
	onScroll(event?: any) {
		this.updateStickyPosition();
		const st = window.pageYOffset || document.documentElement.scrollTop;
		this.isScrollDown = st > this.lastScrollTop;
		this.lastScrollTop = st <= 0 ? 0 : st;
	}

	updateStickyPosition() {
		if (this.sticky) {
			Promise.resolve(null).then(() => {
				const headerElement = document.querySelector('.kt-header') as HTMLElement;
				const subheaderElement = document.querySelector('.kt-subheader') as HTMLElement;
				const headerMobileElement = document.querySelector('.kt-header-mobile') as HTMLElement;

				let height = 0;

				if (headerElement != null) {
					if (window.getComputedStyle(headerElement).height === '0px') {
						height += headerMobileElement.offsetHeight;
					} else {
						if (document.body.classList.contains('kt-header--minimize-topbar')) {
							height = 60;
						} else {
							if (document.body.classList.contains('kt-header--fixed')) {
								height += headerElement.offsetHeight;
							}
							if (document.body.classList.contains('kt-subheader--fixed')) {
								height += subheaderElement.offsetHeight;
							}
						}
					}
				}

				this.stickyDirective.marginTop = height;
			});
		}
	}

	ngOnInit() {
		if (this.viewLoading$) {
			const sub = this.viewLoading$.subscribe(res => {
				this.viewLoading = res;
			});
			this.subscriptions.push(sub);
		}
	}

	ngAfterViewInit() {
		this.hideIcon = this.refIcon.nativeElement.children.length === 0 && !this.icon;
		this.hideTools = this.refTools.nativeElement.children.length === 0;
	}

	ngOnDestroy() {
		this.subscriptions.forEach(sb => sb.unsubscribe());
	}
}
