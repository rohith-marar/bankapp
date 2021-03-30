import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails: any = {
    1000: { acno: 1000, name: "userone", balance: 5000, password: "user1" },
    1001: { acno: 1001, name: "usertwo", balance: 5500, password: "user2" },
    1002: { acno: 1002, name: "userthree", balance: 6000, password: "user3" },
    1003: { acno: 1003, name: "userfour", balance: 7000, password: "user4" },
    1004: { acno: 1004, name: "userfive", balance: 6500, password: "user5" }


  }
  currentUser:any;
  
  
  constructor() {
    this.getDetails()
   }

  saveDetails(){
    localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails))
    if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
  }

  getDetails(){
    if(localStorage.getItem("accountDetails")){
   this.accountDetails= JSON.parse(localStorage.getItem("accountDetails") ||'')
    }
    if(localStorage.getItem("currentUser")){
    this.currentUser= JSON.parse(localStorage.getItem("currentUser") || '')
    }
  }
  register(acno: any, name: any, password: any) {
    if (acno in this.accountDetails) {
      alert("User already exists ,please login")
      return false;
    }

    this.accountDetails[acno] = {
      acno,
      name,
      balance: 0,
      password
    }
    this.saveDetails();
    alert("registeration successful")
    console.log(this.accountDetails);
    return true;

  }
  login(acno: any, password: any) {
    let dataset = this.accountDetails
    if (acno in dataset) {
      var pswd1 = dataset[acno].password;
      if (pswd1 == password) {
        this.currentUser=dataset[acno].name;
        this.saveDetails();
        alert("login successsful")
        return true;
      }
      else {
        alert("incorrect password")
        return false;
      }
    }
    else {
      alert("invalid accountnumber")
      return false;
    }

  }
  deposit(acno:any,pswd:any,amount:any){
    var amt=parseInt(amount)
    let dataset = this.accountDetails
    if (acno in dataset) {
      var pswd1 = dataset[acno].password;
      if (pswd1 == pswd) {
        dataset[acno].balance+=amt;
        this.saveDetails();
        alert("Amount credited with " + amount + " New balance is " + dataset[acno].balance)
      }
      else {
        alert("incorrect password")
      }
    }
    else {
      alert("invalid accountnumber")
    }
  }
  withdraw(acno:any,pswd:any,amount:any){
    var amt=parseInt(amount)
    let dataset = this.accountDetails
    if (acno in dataset) {
      var pswd1 = dataset[acno].password;
      if (pswd1 == pswd) {
        if(amount>dataset[acno].balance)
        {
            alert("insufficient balance")
        }
        else{
        dataset[acno].balance-=amt;
        this.saveDetails();
        alert("Amount debited with " + amount + " New balance is " + dataset[acno].balance)
        }
      }
      else {
        alert("incorrect password")
      }
    }
    else {
      alert("invalid accountnumber")
    }
  }
}

