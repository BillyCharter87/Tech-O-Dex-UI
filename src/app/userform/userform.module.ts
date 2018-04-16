import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DropdownModule } from 'primeng/components/dropdown/dropdown';
// import { ButtonModule } from 'primeng/components/button/button';
import { UserformComponent } from "./userform.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    // DropdownModule,
    // ButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [UserformComponent],
  exports: [UserformComponent]
})
export class UserformModule {

}
