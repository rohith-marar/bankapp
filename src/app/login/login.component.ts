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
      var result = this.dataService.login(accNumbr,pwd)
      if (result) {
        this.router.navigateByUrl("dashboard")
      }
    }
    else {
      alert("invalid form")
    }
    
  }
  }

