import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './sign.component';
import {RouterModule} from '@angular/router';
import {signRoutes} from './sign.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [SignComponent],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(signRoutes)
  ]
})
export class SignModule { }
