import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import {CardModule} from '../../components/card/card.module';
import {RouterModule} from '@angular/router';
import {messagesRoutes} from './messages.routes';
import {CreateMessageModule} from '../../components/create-message/create-message.module';



@NgModule({
  declarations: [MessagesComponent],
  imports: [
      CommonModule,
      CardModule,
      CreateMessageModule,
      RouterModule.forChild(messagesRoutes)
  ]
})
export class MessagesModule { }
