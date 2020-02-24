import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MessagesService} from './services/messages.service';
import {BehaviorSubject} from 'rxjs';
import {BlogMessage} from '../../models/blog-message.interface';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesComponent implements OnInit {

    public readonly cards$ = new BehaviorSubject<BlogMessage[]>([]);

    constructor(private messagesService: MessagesService) {
    }

    public ngOnInit(): void {
      this.messagesService.fetchMessages().subscribe(
        (message: BlogMessage[]) => {
          this.cards$.next(message);
        }
      );
    }

    public trackByFn(index: number, item: BlogMessage): number {
        return item.id;
    }

    public addMessage(message: BlogMessage): void {
        const cards = this.cards$.getValue();
        cards.push(message);
        this.cards$.next(cards);
    }

    public deleteMessage(id: number): void {
        let cards = this.cards$.getValue();
        cards = cards.filter(card => {
            return card.id !== id;
        });
        this.cards$.next(cards);
    }
}
