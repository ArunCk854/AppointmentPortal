import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDetailService } from 'src/app/shared/user-detail.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styles: [
  ]
})
export class UserSigninComponent implements OnInit {

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
       this.toastr.success("login succes","Admin Login");
    }
    else{
      for(let ud of this.service.list){
        if(this.service.userNAME == ud.userName && this.service.passWORD == ud.password){
           this.router.navigateByUrl('/bookanappointment');
           this.toastr.success("login succes","User Login");
        }
      }

      }
      
    this.resetForm(form);

  }

  
  resetForm(form:NgForm)
  {
    form.form.reset();
   
  }
}
