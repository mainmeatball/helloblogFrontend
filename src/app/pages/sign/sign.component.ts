import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SignService} from './services/sign.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Token} from '../login/models/token';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

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

    constructor(
        private router: Router,
        private signService: SignService,
        private user: UserService
    ) {
    }

    signUp(): void {
        this.signService.signUser(this.userForm.value).subscribe(
            ({id_token}: Token) => {
                this.user.setToken(id_token);
                this.router.navigate(['/messages']);
            }
        );
    }
}
