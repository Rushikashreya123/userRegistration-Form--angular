import { Injectable } from '@angular/core';import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http : HttpClient) { }
  // service to create the  data
  saveUserDetails(data:any){
    return this.http.post('http://localhost:3000/users',data);
  }
  // service to fetch the data
  getUserDetails():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/users');
  }
}
