import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TagComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        TagComponent
    ]
})
export class TagModule { }
