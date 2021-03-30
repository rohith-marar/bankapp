import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  uname = "";
  ano = "";
  pswd = "";

  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    ano: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {
   // if(this.registerForm.get('uname')?.errors){
    //  alert("invalid username")
   // }
    
    if (this.registerForm.valid) {

      var result = this.dataService.register(this.registerForm.value.ano, this.registerForm.value.uname, this.registerForm.value.pswd)
      if (result) {
        this.router.navigateByUrl("")
      }
      else {
        this.router.navigateByUrl("")
      }
    }
    else {
      alert("invalid form")
    }

  }
}
