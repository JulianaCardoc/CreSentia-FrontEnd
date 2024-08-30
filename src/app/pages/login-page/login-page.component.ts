import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { LayoutComponent } from '../../layout/layout.component';

import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginFormComponent, LayoutComponent, LogoComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {}
