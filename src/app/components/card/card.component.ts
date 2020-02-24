import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {BlogMessage} from '../../models/blog-message.interface';
import {MessagesService} from '../../pages/messages/services/messages.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
    @Input() item: BlogMessage;
    @Output() deleteMessage = new EventEmitter<number>();

    public isEditMode = false;

    constructor(
      private messages: MessagesService,
      private cdr: ChangeDetectorRef
    ) { }

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

    public toggleEditMode(): void {
      this.isEditMode = !this.isEditMode;
    }
}
