import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/components/button/button';
import { DashboardComponent } from "./dashboard.component";
import { AccordionModule } from "primeng/components/accordion/accordion";
import { UserformModule } from "../userform/userform.module";
import { DataTableModule } from "primeng/components/datatable/datatable";
import {TableModule} from "../table/table.module";

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AccordionModule,
    UserformModule,
    DataTableModule,
    TableModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {

}
