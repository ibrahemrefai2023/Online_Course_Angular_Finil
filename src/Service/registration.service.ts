import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  private DB_url="http://localhost:48190/api/Account/register"; 
  
  ADDNewusers(userdata: any){ 
    return this.http.post(this.DB_url, userdata);
  }
  
}
