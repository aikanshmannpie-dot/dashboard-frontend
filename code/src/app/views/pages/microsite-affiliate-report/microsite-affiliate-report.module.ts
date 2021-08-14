import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material'
import { MatSortModule } from '@angular/material/sort';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { MicrositeAffiliateReportComponent } from './microsite-affiliate-report.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { DaterangepickerModule } from 'angular-2-daterangepicker';
import { MatPaginatorModule } from '@angular/material';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableExporterModule } from 'mat-table-exporter';
import {NgxPrintModule} from 'ngx-print';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgxDateRangeModule } from 'ngx-daterange';
@NgModule({
	imports: [
		// DaterangepickerModule,
		CommonModule,
		PartialsModule,
		CoreModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatFormFieldModule,
		MatInputModule,
		NgxPrintModule,
		PDFExportModule,
		// FormsModule,
		// FormsModule,
		// NgxDateRangeModule,
		// ReactiveFormsModule,
		FormsModule, 
        NgxDaterangepickerMd.forRoot({
            separator: ' - ', 
            applyLabel: 'Okay',
        }),
		RouterModule.forChild([
			{
				path: '',
				component: MicrositeAffiliateReportComponent
			},
		]),
		MatTableExporterModule
		// NgxDaterangepickerMd.forRoot()
	],
	providers: [],
	declarations: [
		MicrositeAffiliateReportComponent,
	]
})
export class MicrositeAffiliateReportModule {
}