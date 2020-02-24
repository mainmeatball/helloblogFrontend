import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMessageComponent } from './create-message.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TagModule} from '../tag/tag.module';


@NgModule({
  declarations: [CreateMessageComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TagModule
    ],
    exports: [
        CreateMessageComponent
    ]
})
export class CreateMessageModule { }
