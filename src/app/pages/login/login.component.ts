import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UserService} from './services/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Token} from './models/token';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
    public readonly userForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    });

    constructor(
        private router: Router,
        private userService: UserService
    ) {
    }

    login(): void {
        this.userService.login(this.userForm.value).subscribe(
            ({id_token}: Token) => {
                localStorage.setItem('id_token', id_token);
                this.router.navigate(['/messages']);
            }
        );
    }
}
