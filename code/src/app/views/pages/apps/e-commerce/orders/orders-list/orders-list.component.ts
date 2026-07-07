// Angular
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	standalone: false,
selector: 'kt-orders-list',
	templateUrl: './orders-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersListComponent { }
