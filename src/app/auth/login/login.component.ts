import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      'email' : [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  login(formValue) {
    this.authService.login(formValue.email, formValue.password);

  }
}
