import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserformModule } from './userform/userform.module'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { DataTableModule,SharedModule } from 'primeng/primeng';
import { TableModule } from "./table/table.module";
import { ButtonModule } from 'primeng/primeng';
import { AccordionModule } from 'primeng/primeng';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserformModule,
    DropdownModule,
    DataTableModule,
    SharedModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    AccordionModule,
    LoginModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
