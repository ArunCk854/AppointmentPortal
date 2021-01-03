import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDetailService } from 'src/app/shared/user-detail.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styles: [
  ]
})
export class UserLoginComponent implements OnInit {

  constructor( public service: UserDetailService,
               private router:Router,
               private toastr:ToastrService,
               ) {

                }

  ngOnInit(): void {
    this.service.refreshList();
  }

  cancel(){
    this.router.navigateByUrl('/')
     }
  onSubmit(form: NgForm){
    if(this.service.userNAME=='admin123' && this.service.passWORD=='admin123'){
       this.router.navigateByUrl('/doctor');
    }
    else{
      for(let ud of this.service.list){
        if(this.service.userNAME == ud.userName && this.service.passWORD == ud.password){
           this.router.navigateByUrl('/bookanappointment')
        }
      }
      }
      
    

  }

  

}
