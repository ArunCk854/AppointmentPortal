import { Injectable } from '@angular/core';
import { UserDetail } from './user-detail.model';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { observable, throwError, of } from "rxjs";
import { Router } from "@angular/router";
const httpoptions ={
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private http:HttpClient,
              private router:Router, ) { }

  readonly baseURL = 'http://localhost:57231/api/UserDetails'
  readonly baseUrl = 'http://localhost:57231/api/UserDetails/login'
  formData:UserDetail = new UserDetail();
  list:UserDetail[];
  userNAME:string;
  passWORD:string;
  

  postUserDetail(){
   return this.http.post(this.baseURL,this.formData)
  }

refreshList(){
  this.http.get(this.baseURL)
  .toPromise()
  .then(res => this.list = res as UserDetail[]);
}

UserLogin(user:any)
{
  return this.http.post(this.baseUrl,user)
  .pipe(map(response => {
    //this.router.navigateByUrl('/bookanappointment')
    return response;
    }))
    .pipe(catchError((error, caught) => {
      return of(error);
      }) as any);

}


}
