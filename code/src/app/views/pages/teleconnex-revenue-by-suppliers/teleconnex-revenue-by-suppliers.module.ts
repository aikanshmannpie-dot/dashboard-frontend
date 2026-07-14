// Angular
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from "@angular/material/sort";
// Core Module
import { CoreModule } from "../../../core/core.module";
import { PartialsModule } from "../../partials/partials.module";
import { TeleconnexRevenueBySuppliersComponent } from "./teleconnex-revenue-by-suppliers.component";
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import { FormsModule } from "@angular/forms";
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTableExporterModule } from "mat-table-exporter";
import { NgxPrintModule } from "ngx-print";
import { PDFExportModule } from "@progress/kendo-angular-pdf-export";
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
		MatProgressSpinnerModule,
		MatButtonModule,
		MatIconModule,
		PDFExportModule,
		FormsModule,
		NgxPrintModule,
		NgxDaterangepickerMd.forRoot({
			separator: " - ",
			applyLabel: "Okay",
		}),
		RouterModule.forChild([
			{
				path: "",
				component: TeleconnexRevenueBySuppliersComponent,
			},
		]),
		MatTableExporterModule,
	],
	providers: [],
	declarations: [TeleconnexRevenueBySuppliersComponent],
})
export class TeleconnexRevenueBySuppliersModule {}
