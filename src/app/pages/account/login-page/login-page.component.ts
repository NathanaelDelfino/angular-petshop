import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';
import { DataService } from 'src/app/services/data.services';
import { Security } from 'src/app/utils/security.util';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;
  public erro = "";
  constructor(
    private router: Router,
    private service: DataService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.required,
        CustomValidator.isCpf()
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required])]
    });
  }

  ngOnInit(): void {
    const token = Security.getToken();
    if (token) {
      this.busy = true;
      this.service.refreshToken().subscribe((data: any) => {
        this.busy = false;
        this.setUser(data.customer, data.token);
      }, (err) => {
        Security.clear();
        this.busy = false;
      })
    }
  }

  submit() {
    this.service
      .authenticate(this.form.value)
      .subscribe((data: any) => {
        this.setUser(data.customer, data.token);
      }, (err) => {
        console.log(err);
      })
  }

  setUser(user, token) {
    Security.set(user, token);
    this.router.navigate(['/']);
  }

}
