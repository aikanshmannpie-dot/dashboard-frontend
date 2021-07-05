import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material";
import { MatSortModule } from "@angular/material/sort";
// Core Module
import { CoreModule } from "../../../core/core.module";
import { PartialsModule } from "../../partials/partials.module";
import { VicidialLeadsComponent } from "./vicidial-leads.component";
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import { FormsModule } from "@angular/forms";
import { MatPaginatorModule } from "@angular/material";
import { PDFExportModule } from "@progress/kendo-angular-pdf-export";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableExporterModule } from "mat-table-exporter";
import { NgxPrintModule } from "ngx-print";

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
