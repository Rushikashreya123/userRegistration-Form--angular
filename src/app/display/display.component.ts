import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration/user-registration.service';
import { AgGridModule } from 'ag-grid-angular/public-api';
import { AgGridAngular } from 'ag-grid-angular';
import { Observable } from 'rxjs';
import {  ColDef ,GridReadyEvent,Grid} from 'ag-grid-community';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
//  declorations
  data:any;
  lastId:number=0;
  selectedUser:any;
  AdditionalValue :Array<string>=[];
  AddLabel:Array<string>=[];
  // for ag grid data
  public rowData$!: Observable<any[]>;
  public columHeadings:ColDef[]=[
    {field:'id',width: 100},
    {field:'firstName'},
    {field:'lastName'},
    {field:'Age',width: 100},
    {field: 'Email'},
    {field: 'PhoneNo'},
    {field: 'UserName'},
    {field:'AdditinalDataLabel'},
   
  ];
  
// Getting the Values from app component on routing and taking in a variable to display in html
  constructor(private router: Router, private route:ActivatedRoute,private userReg:UserRegistrationService){
    this.AddLabel=this.router.getCurrentNavigation()?.extras.state?.['label'];
    this.AdditionalValue = this.router.getCurrentNavigation()?.extras.state?.['AdditionalValue'];
    console.log("info",this.AddLabel);
    console.log("v",this.AdditionalValue);
    // console.log(this.data.Firstname,this.router.getCurrentNavigation());
    this.userReg.getUserDetails().subscribe((data)=>{
      this.lastId = Math.max(...data.map(user => user.id));
    this.selectedUser = data.find(user => user.id === this.lastId);
   
      this.data=data;
    })
  }
}
