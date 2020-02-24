import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Tag} from '../../models/tag.interface';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent {
    @Input() item: Tag;
}
