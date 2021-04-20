import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Perfect"
  ano = "Enter your account no";
  pswd = "";

  LoginForm = this.fb.group({
    ano: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private router: Router, private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
 //eventbindng getAccno(event: any) {
   // this.ano = event.target.value;
    // console.log(this.ano);

  //}
 // pswdChange(event: any) {
   // this.pswd = event.target.value;
    // console.log(this.pswd);

  //}
  login() {
    //alert("Successful");
    if (this.LoginForm.valid) {
      var accNumbr = this.LoginForm.value.ano;
      var pwd = this.LoginForm.value.pswd;
      this.dataService.login(accNumbr,pwd)
      .subscribe((data:any) => {
        if (data) {
          alert(data.message)
          localStorage.setItem("name",data.name)
          localStorage.setItem("acno",data.acno)

          this.router.navigateByUrl("dashboard")
        }
      }, (data) => {
        alert(data.error.message)
      }
      )
    }
    else {
      alert("invalid form")
    }
    
  }
  }

