import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-authgod',
  templateUrl: './authgod.component.html',
  styleUrls: ['./authgod.component.scss']
})
export class AuthgodComponent {
  myData: any = [] = [];
  isSubmitted: boolean = false;
  isValidUser: boolean = false;
  constructor(private authService: AuthService, private hello: AuthGuard, private routes: Router) { }
  SignupForm: FormGroup | any;
  ngOnInit(): void {
    this.formValid();
    this.authService.IsloggerOut();
  }

  formValid() {
    this.SignupForm = new FormGroup({
      userName: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    })
  }
  loginToken() {
    debugger;
    this.myData = {
      Username: this.SignupForm.value.userName,
      Password: this.SignupForm.value.password
    }
    this.authService.getToken(this.myData).subscribe({
      next: ((res: any) => {
        this.myData = res;
        this.routes.navigate(["test"]);
      })
    })
  }

}

