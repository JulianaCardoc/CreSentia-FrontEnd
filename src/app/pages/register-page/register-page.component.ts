import { Component, Inject, inject } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { LayoutComponent } from '../../layout/layout.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [LayoutComponent, LogoComponent, RegisterFormComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  // private userService = inject(UserService);
}
