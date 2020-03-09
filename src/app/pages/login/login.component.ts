import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LoginService} from './services/login.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Token} from './models/token';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

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
        private loginService: LoginService,
        private user: UserService
    ) {
    }

    login(): void {
        this.loginService.login(this.userForm.value).subscribe(
            ({id_token}: Token) => {
                this.user.setToken(id_token);
                this.router.navigate(['/messages']);
            }
        );
    }
}
