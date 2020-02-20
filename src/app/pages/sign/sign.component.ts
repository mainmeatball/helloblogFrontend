import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UserService} from './services/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignComponent {
    public readonly userForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    });

    constructor(private userService: UserService) {
    }

    signUp() {
        this.userService.signUser(this.userForm.value).subscribe(
        );
    }
}
