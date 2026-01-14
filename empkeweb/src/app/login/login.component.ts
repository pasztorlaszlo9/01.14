import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  loginForm !: any;
  
  constructor(private auth: AuthService,
    private builder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.builder.group({
      name: [''],
      password: ['']
    })
    // this.auth.login().subscribe({
    //   next: (response) => {
    //     console.log(response)
    //   },
    //   error: () => {}, 
    // })
  }

  login() {
    console.log("belépés...")
  }
}
