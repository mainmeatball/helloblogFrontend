import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
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

    public isEditMode = false;

    constructor(
      private messages: MessagesService,
      private cdr: ChangeDetectorRef
    ) {

    }

    public upvote(): void {
      this.messages.upvoteMessage(this.item.id).subscribe(
        () => {
          this.item.likes += 1;
          this.cdr.markForCheck();
        }
      );
    }

    public toggleEditMode(): void {
      this.isEditMode = !this.isEditMode;
    }
}
