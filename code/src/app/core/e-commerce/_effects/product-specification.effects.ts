// Angular
import { Injectable, inject } from '@angular/core';
// RxJS
import { of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
// NGRX
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// CRUD
import { QueryResultsModel } from '../../_base/crud';
// Services
import { ProductSpecificationsService } from '../_services/';
// State
import { AppState } from '../../../core/reducers';
// Actions
import {
    ProductSpecificationActionTypes,
    ProductSpecificationsPageRequested,
    ProductSpecificationsPageLoaded,
    ManyProductSpecificationsDeleted,
    OneProductSpecificationDeleted,
    ProductSpecificationsPageToggleLoading,
    ProductSpecificationUpdated,
    ProductSpecificationCreated,
    ProductSpecificationOnServerCreated
} from '../_actions/product-specification.actions';

@Injectable()
export class ProductSpecificationEffects {
    private actions$ = inject(Actions);
    private productSpecificationsService = inject(ProductSpecificationsService);
    private store = inject(Store<AppState>);
    // showLoadingDistpatcher = new ProcutSpecificationsPageToggleLoading({ isLoading: true });
    hideLoadingDistpatcher = new ProductSpecificationsPageToggleLoading({ isLoading: false });

    loadProductSpecificationsPage$ = createEffect(() => this.actions$
        .pipe(
            ofType<ProductSpecificationsPageRequested>(ProductSpecificationActionTypes.ProductSpecificationsPageRequested),
            mergeMap(( { payload } ) => this.productSpecificationsService.findProductSpecs(payload.page, payload.productId)),
            map((result: QueryResultsModel) => {
                return new ProductSpecificationsPageLoaded({
                    productSpecifications: result.items,
                    totalCount: result.totalCount
                });
            }),
        ));

    deleteProductSpecification$ = createEffect(() => this.actions$
        .pipe(
            ofType<OneProductSpecificationDeleted>(ProductSpecificationActionTypes.OneProductSpecificationDeleted),
            mergeMap(( { payload } ) => {
                    this.store.dispatch(new ProductSpecificationsPageToggleLoading({ isLoading: true }));
                    return this.productSpecificationsService.deleteProductSpec(payload.id);
                }
            ),
            map(() => {
                return this.hideLoadingDistpatcher;
            }),
        ));

    deleteProductSpecifications$ = createEffect(() => this.actions$
        .pipe(
            ofType<ManyProductSpecificationsDeleted>(ProductSpecificationActionTypes.ManyProductSpecificationsDeleted),
            mergeMap(( { payload } ) => {
                    this.store.dispatch(new ProductSpecificationsPageToggleLoading({ isLoading: true }));
                    return this.productSpecificationsService.deleteProductSpecifications(payload.ids);
                }
            ),
            map(() => {
                return this.hideLoadingDistpatcher;
            }),
        ));

    updateProductSpecification$ = createEffect(() => this.actions$
        .pipe(
            ofType<ProductSpecificationUpdated>(ProductSpecificationActionTypes.ProductSpecificationUpdated),
            mergeMap(( { payload } ) => {
                this.store.dispatch(new ProductSpecificationsPageToggleLoading({ isLoading: true }));
                return this.productSpecificationsService.updateProductSpec(payload.productSpecification);
            }),
            map(() => {
                return this.hideLoadingDistpatcher;
            }),
        ));

    createProductSpecification$ = createEffect(() => this.actions$
        .pipe(
            ofType<ProductSpecificationOnServerCreated>(ProductSpecificationActionTypes.ProductSpecificationOnServerCreated),
            mergeMap(( { payload } ) => {
                this.store.dispatch(new ProductSpecificationsPageToggleLoading({ isLoading: true }));
                return this.productSpecificationsService.createProductSpec(payload.productSpecification).pipe(
                    tap(res => {
                        this.store.dispatch(new ProductSpecificationCreated({ productSpecification: res }));
                    })
                );
            }),
            map(() => {
                return this.hideLoadingDistpatcher;
            }),
        ));

    constructor() { }
}
