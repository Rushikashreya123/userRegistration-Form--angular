import { Component,ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistrationService } from './user-registration.service';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
//  decloratins
  indexArr:Array<number> =[0];
  count=0;
  AddDataLabel='';
  AddLabel:Array<string>=[];
  addValue:Array<string>=[];
  addInfoCount=0;
  submittedData:any;
  constructor(private userReg: UserRegistrationService,private router: Router, private activeroute: ActivatedRoute){}
  // form validators to validate form
  registrationForm = new FormGroup({
    firstName: new FormControl('',Validators.compose([Validators.required,Validators.pattern("^[A-Z]+[a-zA-Z]*$"),Validators.minLength(3),Validators.maxLength(256)])),
    lastName: new FormControl('',Validators.compose([Validators.required,Validators.pattern("^[A-Z]+[a-zA-Z]*$"),Validators.minLength(3),Validators.maxLength(256)])),
    Age: new FormControl('',Validators.compose([Validators.required,Validators.max(999),Validators.min(1)])),
    Email: new FormControl('', Validators.compose([Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{3,4}$")])),
    PhoneNo: new FormControl('',Validators.compose([Validators.required,Validators.pattern("^(\\+?\d{1,4}[\s-])?(?!0+\s+,?$)\\d{10}\s*,?$")])),
    UserName: new FormControl('',Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$")])),
    AdditinalDataLabel: new FormControl('',Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){1,256}[a-zA-Z0-9]$")])),
    
  });
  // The method pushes the values of the AdditinalDataLabel and event into the AddLabel and addValue arrays, respectively.
  getInput(event:string){
   
    this.AddLabel.push(this.registrationForm.value.AdditinalDataLabel as string);
    this.addValue.push(event);
    
    this.addInfoCount=this.addInfoCount+1;
   
  }
  // The method uses the get method of the FormGroup to retrieve the control.

 get firstname(){
  return this.registrationForm.get('firstName')
  }
  get lastname(){
    return this.registrationForm.get('lastName')
    }
  get Age(){
    return this.registrationForm.get('Age')
  }
  get email() {
    return this.registrationForm.get('Email');
  }
  get PhoneNo(){
    return this.registrationForm.get('PhoneNo');
  }
  get UserName(){
    return this.registrationForm.get('UserName')
  }
  get AdditinalDataLabel(){
    return this.registrationForm.get('AdditinalDataLabel')
  }

   // Function to update the index array and count property
  updateIndex(){
    // Push the next index to the index array
    this.indexArr.push(this.count+1);
    // Increment the count property
    this.count=this.count+1;
    // Log the updated index array to the console
    console.log("add button clicked: ",this.indexArr);
  }
  
  // onsubmit function 
  onSubmit(){
    console.log(this.registrationForm);
    this.submittedData = this.registrationForm.value; 
  
    this.router.navigate(['display'],{
      
      state: {AdditionalValue : this.addValue,label:this.AddLabel}
    })
    this.userReg.saveUserDetails(this.submittedData).subscribe();
}
}
