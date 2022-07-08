import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  message: any = null;
  errormgs: any;

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    
  } 
  initForm() {
    console.log(this.formGroup)
    this.formGroup = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }


  loginProcess() {
    if (this.formGroup.valid) {
      this.authService.loginac(this.formGroup.value).subscribe((result) => {
        if (result.success) {
          
          this.formGroup.reset();

          this.authService.setDataInLocalStorage('userData', result.email);
         
          this.router.navigate(['admin']);
        }
        if (result.success == 0) {
          this.formGroup.reset();
          this.message = 'Your email or password is invalid. Please try again.';
          this.errormgs = true;
        }
      });
    }
  }
}
