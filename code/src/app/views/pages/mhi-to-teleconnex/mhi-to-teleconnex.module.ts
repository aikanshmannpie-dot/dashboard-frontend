import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from "@angular/material/sort";
// Core Module
import { CoreModule } from "../../../core/core.module";
import { PartialsModule } from "../../partials/partials.module";
import { MHIToTeleconnexComponent } from "./mhi-to-teleconnex.component";
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import { FormsModule } from "@angular/forms";
import { MatPaginatorModule } from '@angular/material/paginator';
import { PDFExportModule } from "@progress/kendo-angular-pdf-export";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
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
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
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
        component: MHIToTeleconnexComponent,
      },
    ]),
    MatTableExporterModule,
  ],
  providers: [],
  declarations: [MHIToTeleconnexComponent],
})
export class MHIToTeleconnexModule {}
