import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from "@angular/material/sort";
// Core Module
import { CoreModule } from "../../../core/core.module";
import { PartialsModule } from "../../partials/partials.module";
import { VicidialLeadsComponent } from "./vicidial-leads.component";
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import { FormsModule } from "@angular/forms";
import { MatPaginatorModule } from '@angular/material/paginator';
import { PDFExportModule } from "@progress/kendo-angular-pdf-export";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatTableExporterModule } from "mat-table-exporter";
import { NgxPrintModule } from "ngx-print";

import { MatSelectModule } from "@angular/material/select";

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
		MatSelectModule,
		MatCardModule,
		MatIconModule,
		NgxPrintModule,
		PDFExportModule,
		FormsModule,
		NgxDaterangepickerMd.forRoot({
			separator: " - ",
			applyLabel: "Okay",
		}),
		RouterModule.forChild([
			{
				path: "",
				component: VicidialLeadsComponent,
			},
		]),
		MatTableExporterModule,
	],
	providers: [],
	declarations: [VicidialLeadsComponent],
})
export class VicidialLeadsModule {}
