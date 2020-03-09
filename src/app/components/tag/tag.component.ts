import {ChangeDetectionStrategy, Component, Input, OnChanges} from '@angular/core';
import {Tag} from '../../models/tag.interface';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {angularLifecycleMethodKeys} from 'codelyzer/util/utils';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent implements OnChanges {
    @Input() item: Tag;

    private readonly name$ = new BehaviorSubject<string>('');

    public readonly queryParam$ = this.queryParamsChanges();

    constructor(private activatedRoute: ActivatedRoute) {
    }

    private queryParamsChanges(): Observable<string> {
        return combineLatest([
            this.name$,
            this.activatedRoute.queryParamMap
        ])
            .pipe(
                map(([name, paramMap]: [string, ParamMap]) => !paramMap.has('tags')
                    ? name
                    : `${this.item.name},${paramMap.get('tags')}`
                )
            );
    }

    ngOnChanges(): void {
        this.name$.next(this.item.name);
    }
}
