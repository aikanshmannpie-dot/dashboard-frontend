// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material'
import { MatSortModule } from '@angular/material/sort';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { AnalyticsDashboardComponent } from './analytics-dashboard.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { DaterangepickerModule } from 'angular-2-daterangepicker';
import { MatPaginatorModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableExporterModule } from 'mat-table-exporter';
import { NgxPrintModule } from 'ngx-print';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatFormFieldModule,
		MatInputModule,
		NgxPrintModule,
		FormsModule,
		PDFExportModule,
        NgxDaterangepickerMd.forRoot({
            separator: ' - ', 
            applyLabel: 'Okay',
        }),
		RouterModule.forChild([
			{
				path: '',
				component: AnalyticsDashboardComponent
			},
		]),
		MatTableExporterModule

	],
	providers: [],
	declarations: [
		AnalyticsDashboardComponent,
	]
})
export class AnalyticsDashboardModule {
}
