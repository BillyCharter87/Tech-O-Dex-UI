import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserformComponent } from "./userform.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/components/button/button';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [UserformComponent],
  exports: [UserformComponent]
})
export class UserformModule {

}
