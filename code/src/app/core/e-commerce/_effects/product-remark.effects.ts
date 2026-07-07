// Angular
import { Injectable } from '@angular/core';
// RxJS
import { of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
// NGRX
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// CRUD
import { QueryResultsModel } from '../../_base/crud';
// Services
import { ProductRemarksService } from '../_services/';
// State
import { AppState } from '../../../core/reducers';
// Actions
import {
    ProductRemarkActionTypes,
    ProductRemarksPageRequested,
    ProductRemarksPageLoaded,
    ManyProductRemarksDeleted,
    OneProductRemarkDeleted,
    ProductRemarksPageToggleLoading,
    ProductRemarkUpdated,
    ProductRemarkCreated,
    ProductRemarkOnServerCreated
} from '../_actions/product-remark.actions';

@Injectable()
export class ProductRemarkEffects {
    // showLoadingDistpatcher = new ProcutRemarksPageToggleLoading({ isLoading: true });
    hideLoadingDistpatcher = new ProductRemarksPageToggleLoading({ isLoading: false });

    loadProductRemarksPage$ = createEffect(() => this.actions$
        .pipe(
            ofType<ProductRemarksPageRequested>(ProductRemarkActionTypes.ProductRemarksPageRequested),
            mergeMap(( { payload } ) => {
                return this.productRemarksService.findProductRemarks(payload.page, payload.productId);
            }),
            map((result: QueryResultsModel) => {
                return new ProductRemarksPageLoaded({
                    productRemarks: result.items,
                    totalCount: result.totalCount
                });
            }),
        ));

    deleteProductRemark$ = createEffect(() => this.actions$
        .pipe(
            ofType<OneProductRemarkDeleted>(ProductRemarkActionTypes.OneProductRemarkDeleted),
            mergeMap(( { payload } ) => {
                    this.store.dispatch(new ProductRemarksPageToggleLoading({ isLoading: true }));
                    return this.productRemarksService.deleteProductRemark(payload.id);
                }
            ),
            map(() => {
                return this.hideLoadingDistpatcher;
            }),
        ));

    deleteProductRemarks$ = createEffect(() => this.actions$
        .pipe(
            ofType<ManyProductRemarksDeleted>(ProductRemarkActionTypes.ManyProductRemarksDeleted),
            mergeMap(( { payload } ) => {
                    this.store.dispatch(new ProductRemarksPageToggleLoading({ isLoading: true }));
                    return this.productRemarksService.deleteProductRemarks(payload.ids);
                }
            ),
            map(() => {
                return this.hideLoadingDistpatcher;
            }),
        ));

    updateProductRemark$ = createEffect(() => this.actions$
        .pipe(
            ofType<ProductRemarkUpdated>(ProductRemarkActionTypes.ProductRemarkUpdated),
            mergeMap(( { payload } ) => {
                this.store.dispatch(new ProductRemarksPageToggleLoading({ isLoading: true }));
                return this.productRemarksService.updateProductRemark(payload.productRemark);
            }),
            map(() => {
                return this.hideLoadingDistpatcher;
            }),
        ));

    createProductRemark$ = createEffect(() => this.actions$
        .pipe(
            ofType<ProductRemarkOnServerCreated>(ProductRemarkActionTypes.ProductRemarkOnServerCreated),
            mergeMap(( { payload } ) => {
                this.store.dispatch(new ProductRemarksPageToggleLoading({ isLoading: true }));
                return this.productRemarksService.createProductRemark(payload.productRemark).pipe(
                    tap(res => {
                        this.store.dispatch(new ProductRemarkCreated({ productRemark: res }));
                    })
                );
            }),
            map(() => {
                return this.hideLoadingDistpatcher;
            }),
        ));

    constructor(private actions$: Actions, private productRemarksService: ProductRemarksService, private store: Store<AppState>) { }
}
