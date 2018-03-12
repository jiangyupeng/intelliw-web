import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, FormControl, NgForm, Validators} from '@angular/forms';
import {OauthService} from '../oauth.service';

import {OauthToken} from '../oauth-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
// export class LoginComponent implements OnInit {
export class LoginComponent {

  username: string;
  password: string;
  data: any;
  form: FormGroup;

  constructor(private oauthService: OauthService,
              private router: Router,
              private fb: FormBuilder) {
    // initialize the form
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  // ngOnInit() {
  // }

  onSubmit() {
    const username = this.form.value.Username;
    const password = this.form.value.Password;

    this.oauthService.login2(username, password)
      .subscribe(
        (data) => {
          console.log(data);
        }
        // res => {
        //   console.log(res);
        // },
        // error => {
        //   console.log(error);
        //   alert('Incorrect username or password');
        // }
      );
  }

  // onSubmit(event: NgForm) {
  //   this.oauthService.login(event.value.username, event.value.password)
  //     .subscribe(res => {
  //         console.log(res);
  //       }
  //       // error => {
  //       //   // console.log(error);
  //       //   alert('Incorrect username or password');
  //       // }
  //     );
  // }


  // retrieve a FormControl
  getFormControl(name: string) {
    return this.form.get(name);
  }

  // returns TRUE if the FormControl is valid
  isValid(name: string) {
    const e = this.getFormControl(name);
    return e && e.valid;
  }

  // returns TRUE if the FormControl has been changed
  isChanged(name: string) {
    const e = this.getFormControl(name);
    return e && (e.dirty || e.touched);
  }

  // returns TRUE if the FormControl is invalid after user changes
  hasError(name: string) {
    const e = this.getFormControl(name);
    return e && (e.dirty || e.touched) && !e.valid;
  }
}
