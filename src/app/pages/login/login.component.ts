import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UserService} from './services/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Token} from './models/token';

@Component({
  selector: 'app-sign',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
    public readonly userForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    });

    constructor(private userService: UserService) {
    }

    login() {
        this.userService.login(this.userForm.value).subscribe(
            ({id_token}: Token) => {
                localStorage.setItem('id_token', id_token);
            }
        );
    }
}
