// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// CRUD
import { HttpUtilsService } from '../../_base/crud';

const API_ORDERS_URL = 'api/orders';

@Injectable()
export class OrdersService {
	httpOptions: any;

	constructor(private http: HttpClient,
		           private httpUtils: HttpUtilsService) {
		this.httpOptions = this.httpUtils.getHTTPHeaders();
	}

	// CREATE
	// READ
	// UPDATE
	// DELETE
}


