import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserService } from "../user.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  constructor(
    private router: Router,
    private UserService: UserService
  ) { }

  username: FormControl;

  onSubmit() {
      this.UserService.changeMessage(this.username)   
      this.router.navigate(['/albums']);
    }
}
