import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UserService} from './services/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Token} from '../login/models/token';
import {ActivatedRoute, Router} from '@angular/router';

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
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService
    ) {
    }

    signUp(): void {
        this.userService.signUser(this.userForm.value).subscribe(
            ({id_token}: Token) => {
                localStorage.setItem('id_token', id_token);
                this.router.navigate(['/messages']);
            }
        );
    }
}
