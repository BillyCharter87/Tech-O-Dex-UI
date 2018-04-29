import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from "./table.component";
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableModule,SharedModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/components/button/button';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [TableComponent],
  declarations: [TableComponent]
})
export class TableModule { }
