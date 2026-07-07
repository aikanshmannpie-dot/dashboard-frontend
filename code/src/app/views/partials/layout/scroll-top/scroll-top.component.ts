// Angular
import { Component } from '@angular/core';
// Layout
import { ScrollTopOptions } from '../../../../core/_base/layout';

@Component({
	standalone: false,

	selector: 'kt-scroll-top',
	templateUrl: './scroll-top.component.html',
})
export class ScrollTopComponent {
	// Public properties
	scrollTopOptions: ScrollTopOptions = {
		offset: 300,
		speed: 600
	};
}
