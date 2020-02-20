import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CreateMessageService} from './services/create-message.service';
import {BlogMessage} from '../../models/blog-message.interface';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateMessageComponent {
  @Output() postMessage = new EventEmitter<BlogMessage>();

  public readonly messageForm = new FormGroup({
    content: new FormControl('')
  });

  constructor(private createMessage: CreateMessageService) {
  }

  public add() {
    this.createMessage.submitMessage(this.messageForm.value).subscribe(
      (message: BlogMessage) => {
        this.postMessage.emit(message);
      }
    );
  }

}
