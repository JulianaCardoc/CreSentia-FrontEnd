import { Component, Inject, inject } from '@angular/core';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  private userService = inject(UserService);
}
