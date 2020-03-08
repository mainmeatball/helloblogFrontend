import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TagModule} from '../tag/tag.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
      CardComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TagModule,
        RouterModule
    ],
    exports: [
        CardComponent
    ]
})
export class CardModule { }
