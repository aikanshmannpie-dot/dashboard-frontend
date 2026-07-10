// Core Module
import { OverallReportComponent } from './overall-report.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgxPrintModule } from 'ngx-print';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { MatTableExporterModule } from 'mat-table-exporter';

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
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatSelectModule,
		MatChipsModule,
		FormsModule, 
		NgxPrintModule,
		PDFExportModule,
        NgxDaterangepickerMd.forRoot({
            separator: ' - ', 
            applyLabel: 'Okay',
        }),
		RouterModule.forChild([
			{
				path: '',
				component: OverallReportComponent
			},
		]),
		MatTableExporterModule
	],
	providers: [],
	declarations: [
		OverallReportComponent,
	]
})
export class OverallReportModule {
}