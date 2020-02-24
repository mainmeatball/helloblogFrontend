import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {BlogMessage} from '../../models/blog-message.interface';
import {MessagesService} from '../../pages/messages/services/messages.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnChanges {
    @Input() item: BlogMessage;
    @Output() deleteMessage = new EventEmitter<number>();
    @Output() updateMessage = new EventEmitter<BlogMessage>();

    public readonly contentForm = new FormGroup({
        content: new FormControl('')
    });

    public isEditMode = false;

    ngOnChanges(): void {
        this.contentForm.patchValue({
            content: this.item.content
        });
    }

    constructor(
      private messages: MessagesService,
      private cdr: ChangeDetectorRef
    ) { }

    public toggleEditMode(): void {
      this.isEditMode = !this.isEditMode;
    }

    public upvote(): void {
      this.messages.upvoteMessage(this.item.id).subscribe(
        () => {
          this.item.likes += 1;
          this.cdr.markForCheck();
        }
      );
    }

    public downvote(): void {
        this.messages.downvoteMessage(this.item.id).subscribe(
            () => {
                this.item.likes -= 1;
                this.cdr.markForCheck();
            }
        );
    }

    public delete(): void {
        this.messages.deleteMessage(this.item.id).subscribe(
            () => {
                this.deleteMessage.emit(this.item.id);
            }
        );
    }

    public update(): void {
        this.messages.updateMessage(this.item.id, this.contentForm.get('content').value).subscribe(
            () => {
                this.item.content = this.contentForm.get('content').value;
                this.cdr.markForCheck();
                this.isEditMode = false;
            }
        );
    }

}
