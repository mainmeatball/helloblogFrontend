import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {BlogMessage} from '../../models/blog-message.interface';
import {MessagesService} from '../../pages/messages/services/messages.service';
import {Tag} from '../../models/tag.interface';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateMessageComponent {
    @Output() postMessage = new EventEmitter<BlogMessage>();

    public readonly messageForm = new FormGroup({
        content: new FormControl(''),
        tags: new FormArray([])
    });

    public readonly tagForm = new FormGroup({
        name: new FormControl('')
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

    public addTag(): void {
        const tags = this.messageForm.get('tags') as FormArray;
        const newTag: Partial<Tag> = {name: this.tagForm.get('name').value};
        tags.push(new FormControl(newTag));
    }

}
