import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { MicrositeLeadReportByDomainsComponent } from './microsite-lead-report-by-domains.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		// DaterangepickerModule,
		CommonModule,
		PartialsModule,
		CoreModule,
		MatTableModule,
		MatSortModule,
		FormsModule, 
        NgxDaterangepickerMd.forRoot({
            separator: ' - ', 
            applyLabel: 'Okay',
        }),
		RouterModule.forChild([
			{
				path: '',
				component: MicrositeLeadReportByDomainsComponent
			},
		]),
	],
	providers: [],
	declarations: [
		MicrositeLeadReportByDomainsComponent,
	]
})
export class MicrositeLeadReportByDomainModule {
}