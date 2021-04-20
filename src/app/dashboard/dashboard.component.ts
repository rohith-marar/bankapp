import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  depositForm = this.fb.group({
    ano: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['',[Validators.required, Validators.pattern('[0-9]*')]]

  })

  withdrawForm = this.fb.group({
    ano: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['',[Validators.required, Validators.pattern('[0-9]*')]]

  })

id="1234"
name:any
acno:any
accdelete:any
lLogin:Date=new Date()
  constructor(private fb: FormBuilder,public dataService:DataService,private router:Router) {
    this.name=localStorage.getItem("name")
   }

  ngOnInit(): void {
  }
  deposit(){
      if(this.depositForm.valid)
      {
        this.dataService.deposit(this.depositForm.value.ano,this.depositForm.value.pswd,this.depositForm.value.amount)
        .subscribe((data:any) => {
          if (data) {
            alert(data.message)
            alert(data.balance)
            
          }
        }, (data) => {
          alert(data.error.message)
        }
        )
      
      }
      else{
        alert("invalid forms")
      }
  }

  withdraw(){
    if(this.withdrawForm.valid)
    {
      this.dataService.withdraw(this.withdrawForm.value.ano,this.withdrawForm.value.pswd,this.withdrawForm.value.amount)
      .subscribe((data:any) => {
        if (data) {
          alert(data.message)
          alert(data.balance)
          
        }
      }, (data) => {
        alert(data.error.message)
      }
      )
    }
    else{
      alert("invalid forms")
    }
  }
  delete(){
    this.acno=localStorage.getItem("acno")
  }
  onDelete($event:any){
   // alert("This is an alert from parent "+$event)
    this.accdelete=$event;
    this.dataService.deleteAccDetails($event)
    .subscribe((data:any) => {
      if (data) {
        alert(data.message)
        this.router.navigateByUrl("")
      
      }
    }, (data) => {
      alert(data.error.message)
    }
    )


  }
  onCancel(){
    this.acno=null;
  }
}
