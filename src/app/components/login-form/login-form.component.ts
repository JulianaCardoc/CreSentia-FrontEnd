import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
private userService = inject(UserService);
}
