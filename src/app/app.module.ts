import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserformModule } from './userform/userform.module'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { DataTableModule,SharedModule } from 'primeng/primeng';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserformModule,
    DropdownModule,
    DataTableModule,
    SharedModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
