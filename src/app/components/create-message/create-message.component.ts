import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BlogMessage} from '../../models/blog-message.interface';
import {MessagesService} from '../../pages/messages/services/messages.service';

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

  constructor(private messagesService: MessagesService) {
  }

  public add(): void {
      this.messagesService.submitMessage(this.messageForm.value).subscribe(
      (message: BlogMessage) => {
        this.postMessage.emit(message);
      }
    );
  }

}
