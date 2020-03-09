import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MessagesService} from './services/messages.service';
import {BehaviorSubject} from 'rxjs';
import {BlogMessage} from '../../models/blog-message.interface';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesComponent implements OnInit {

    public readonly cards$ = new BehaviorSubject<BlogMessage[]>([]);

    constructor(private messagesService: MessagesService,
                private activatedRoute: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.listenQueryParam();
    }

    public trackByFn(index: number, item: BlogMessage): number {
        return item.id;
    }

    public addMessage(message: BlogMessage): void {
        const cards = this.cards$.getValue();
        cards.unshift(message);
        this.cards$.next(cards);
    }

    public deleteMessage(id: number): void {
        let cards = this.cards$.getValue();
        cards = cards.filter(card => {
            return card.id !== id;
        });
        this.cards$.next(cards);
    }

    private listenQueryParam(): void {
        this.activatedRoute.queryParamMap
            .pipe(
                switchMap((map: ParamMap) =>
                    this.messagesService.fetchMessages(map.get('username'), map.get('tags')?.split(','))
                ),
            )
            .subscribe((messages: BlogMessage[]) => {
                this.cards$.next(messages);
            });
    }
}
